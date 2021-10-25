/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.repository;

import com.costume.model.Admin;
import com.costume.repository.crud.AdminCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * *Esta clase accede a la interfaz que extiende de CrudRepository y le solicita
 * servicios o métodos que soportan operacioes de crud
 * @author win10
 */
@Repository
public class AdminRepository {
    @Autowired
    private AdminCrudRepository adminCrudRepository;
    /**
     * accede al metodo FindAll del repositorio de admin
     * @return lista de administradores
     */
    public List <Admin> getAll(){
    return (List<Admin>) adminCrudRepository.findAll();
    }
    /**
     * 
     * @param id resive la Id del Administrdor
     * @return El adminstrador coincidente con el codigo
     */
    public Optional<Admin>getAdmin(int id){
        return adminCrudRepository.findById(id);
    }
    /**
     * 
     * @param admin recive el admin ingresado
     * @return almacena el dato del admin ingresado
     */
    public Admin save(Admin admin){
        return adminCrudRepository.save(admin);
    }
    
    public void delete(Admin admin){
        adminCrudRepository.delete(admin);
    }
    
    
}
