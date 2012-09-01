/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author trecio
 */
public class WordResolver {
    public String getWord(int idx) {
        if (idx == 0) return "Hello";
        if (idx == 1) return "World";
        throw new IllegalArgumentException("Index " + idx + "is not supported.");
    }
}
