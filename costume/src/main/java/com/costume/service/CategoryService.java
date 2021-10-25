package com.costume.service;

import com.costume.model.Category;
import com.costume.repository.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Esta clase se utiliza para escribir métodos de negocio y validaciones
 * sobre la información de la Entidad Category
 * @author desaextremo
 */

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    
    /**
     * Accede al método getAll() de la clase CategoryRepository para obtener
     * el listado de las categorias
     * @return Retorna un listado de Categorias
     */
    public List<Category> getAll(){
       return categoryRepository.getAll();
    }
    
    /**
     * Inserta una nueva categoria
     * @param category Categoria
     * @return Categoria ingresada
     */
    public Category save(Category category) {
        if (category.getId() == null) {
            return categoryRepository.save(category);
        } else {
            Optional<Category> category1 = categoryRepository.getCategory(category.getId());
            if (category1.isEmpty()) {
                return categoryRepository.save(category);
            } else {
                return category;
            }
        }
    }
    
    public boolean deleteCategory(int id){
        Optional<Category> categoryd = categoryRepository.getCategory(id);
        
        if (categoryd.isEmpty()) {
            return false;
        } else {
            categoryRepository.delete(categoryd.get());
            return true;
        }
    }
    
    public Category updateCategory(Category category){
        
        if (category.getId() !=null) {
            Optional<Category> categoryU = categoryRepository.getCategory(category.getId());
            
            if (!categoryU.isEmpty()) {
                          
                if (category.getName()!= null){
                    categoryU.get().setName(category.getName());
            }
                if (category.getDescription()!= null){
                    categoryU.get().setDescription(category.getDescription());
                }
            }
            return categoryRepository.save(categoryU.get());
        } 
        return category;
    }
    
}
