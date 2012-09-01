
import org.mockito.InjectMocks;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author trecio
 */
public class HelloGenerator {
    private final WordResolver resolver;
   
    public HelloGenerator(WordResolver resolver) {
        this.resolver = resolver;        
    }
    
    public String generate() {
        return resolver.getWord(0) + " " + resolver.getWord(1);
    }
}
