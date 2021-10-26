/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.repository;
import com.costume.model.Category;
import com.costume.repository.crud.CategoryCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Esta clase accede a la interfaz que extiende de CrudRepository y le solicita
 * servicios o métodos que soportan operacioes de crud
 * @author desaextremo
 */
@Repository
public class CategoryRepository {
    @Autowired
    private CategoryCrudRepository categoryCrudRepository;
    
    /**
     * Accede al método findAll() de CrudRespository para obtener el listado de
     * las categorias
     * @return Retorna un listado de Categorias
     */
    public List<Category> getAll(){
        return (List<Category>) categoryCrudRepository.findAll();
    }
    
    /**
     * Obtiene una categoria a partir de su id
     * @param id codigo de una categoria
     * @return La categoria coincidente con ese codigo
     */
    public Optional<Category> getCategory(int id){
        return categoryCrudRepository.findById(id);
    }
    
    /**
     * Se encarga de ingresar o actualizar una categoria
     * @param category Recibe la categoria a ingresar o a modificar
     * @return Categoria insgresada o modificada
     */
    public Category save(Category category){
        return categoryCrudRepository.save(category);
    }
    
    public void delete(Category category){
        categoryCrudRepository.delete(category);
    }
}