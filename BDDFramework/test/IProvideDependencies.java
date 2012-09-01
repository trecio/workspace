/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author trecio
 */
public interface IProvideDependencies {
    <T> T on(Class<T> type);
}