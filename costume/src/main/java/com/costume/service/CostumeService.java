/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Costume;
import com.costume.repository.CostumeRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author win10
 */
@Service
public class CostumeService {

    @Autowired

    private CostumeRepository costumeRepository;

    public List<Costume> getAll() {
        return costumeRepository.getAll();
    }

    public Costume save(Costume costume) {
        if (costume.getId() == null) {
            return costumeRepository.save(costume);

        } else {
            Optional<Costume> client1 = costumeRepository.getCostume(costume.getId());
            if (client1.isEmpty()) {
                return costumeRepository.save(costume);
            } else {
                return costume;
            }
        }
    }
    public boolean deleteCostume(int id){
        Optional<Costume> costumed = costumeRepository.getCostume(id);
        if (costumed.isEmpty()) {
            return false;
        } else {
            costumeRepository.delete(costumed.get());
            return true;
        }
    }
    public Costume updateCostume(Costume costume){
        
        if (costume.getId()!=null) {
            Optional<Costume> costumeU = costumeRepository.getCostume(costume.getId());
            
            if (!costumeU.isEmpty()) {
                          
                if (costume.getName()!= null){
                    costumeU.get().setName(costume.getName());
            }
                if (costume.getBrand()!= null){
                    costumeU.get().setBrand(costume.getBrand());
                }
                if (costume.getYear()!= null){
                    costumeU.get().setYear(costume.getYear());
                }
                if (costume.getDescription()!= null){
                    costumeU.get().setDescription(costume.getDescription());
                }
                if (costume.getCategory()!= null){
                    costumeU.get().setCategory(costume.getCategory());
                }
            }
            return costumeRepository.save(costumeU.get());
        } 
        return costume;
    }
}
