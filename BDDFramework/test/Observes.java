/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
import org.junit.Before;

/**
 *
 * @author trecio
 */
public abstract class Observes<T> {
    protected T sut;
    protected IProvideDependencies depends;
    
    @Before
    public void setUp() throws Exception {
        sut = createSut();
        because();
    }

    public T createSut() throws Exception {
        Class<?> thisClass = getClass();
        Class<?> sutClass = thisClass.getDeclaredField("sut").getType();
        AutoMockingContainer container = new AutoMockingContainer();
        depends = container;
        return (T)container.createInstance(sutClass);
    }
    
    protected abstract void because() throws Exception;
}
