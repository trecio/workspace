/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import junit.framework.Assert;
import org.junit.AfterClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.BeforeClass;

/**
 *
 * @author trecio
 */
public class When_generating_hello_world extends Observes
{
    private HelloGenerator sut;
    
    private String result;

    @Override
    protected void because() throws Exception {
        result = sut.generate();
    }

    @Test public void itShouldReturnHelloWorld() {
        Assert.assertEquals("Hello World", result);
    }
}