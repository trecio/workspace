
import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.mockito.Mockito;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author trecio
 */

class AutoMockingContainer implements IProvideDependencies {
    private Container container = new Container();
    
    public <T> T createInstance(Class<T> type) throws Exception {
        Constructor<?> constructor = getInjectConstructor(type);        
        if (constructor == null) 
            constructor = getDefaultConstructor(type);
        if (constructor == null)
            throw new IllegalArgumentException("Class " + type.getName() + " has neither injection nor default constructor.");
        Object[] dependencies = createDependenciesFor(constructor);
        return (T)constructor.newInstance(dependencies);
    }
    
    public <T> T on(Class<T> type) {
        return container.getMock(type);
    }
    
    private static Constructor<?> getInjectConstructor(Class<?> type) {
        Constructor<?> result = null;
        for (Constructor<?> constructor : type.getConstructors()) {
            for (Annotation annotation : constructor.getAnnotations())
                if ("Inject".equals(annotation.annotationType().getName()))
                    if (result == null) result = constructor;
                    else throw new IllegalArgumentException("Class " + type.getName()+ " has more than one injecting constructor.");
        }
        return result;
    }

    private Constructor<?> getDefaultConstructor(Class<?> type) {
        try {
            return type.getConstructor();
        } catch (NoSuchMethodException ex) {
            return null;
        } 
    }
    
    private Object[] createDependenciesFor(Constructor<?> constructor) {
        List instances = new ArrayList();
        for (Class<?> constructorParam : constructor.getParameterTypes())
            instances.add(on(constructorParam));
        return instances.toArray();
    }
}

class Container {
    Map<Class<?>, Object> objects = new HashMap<Class<?>, Object>();
    
    public <T> T getMock(Class<T> type) {
        if (!objects.containsKey(type))
            objects.put(type, Mockito.mock(type));
        return (T)objects.get(type);
    }
}
