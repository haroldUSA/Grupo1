package com.costume.repository.crud;

import com.costume.model.Category;
import org.springframework.data.repository.CrudRepository;

/**
 * Interfaz que extiende de CrudRepositorypara la clase Category
 * @author desaextremo
 */
public interface CategoryCrudRepository extends CrudRepository<Category, Integer>{
    
}
