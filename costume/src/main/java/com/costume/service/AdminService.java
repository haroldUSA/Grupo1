/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Admin;
import com.costume.repository.AdminRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author win10
 */
@Service
public class AdminService {
    @Autowired
    
    private AdminRepository adminRepository;
    
    public List <Admin> getAll(){
        return adminRepository.getAll();
    } 
    
    public Admin save(Admin admin){
        if(admin.getIdAdmin()==null){
            return adminRepository.save(admin);
       
        }else{
            Optional<Admin> admin1 = adminRepository.getAdmin(admin.getIdAdmin());
            
            if (admin1.isEmpty()) {
                return adminRepository.save(admin);
            } else {
                return admin;
            }
            
        }
    }
    
}
