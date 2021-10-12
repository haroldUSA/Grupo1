/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Client;
import com.costume.repository.ClientRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author win10
 */
@Service
public class ClientService {
    @Autowired
    
    private ClientRepository clientRepository;
    
    public List <Client> getAll(){
        return clientRepository.getAll();
    }
    
    public Client save(Client client){
        if(client.getIdClient()==null){
            return clientRepository.save(client);
            
        }else{
            Optional<Client> client1 = clientRepository.getClient(client.getIdClient());
            if (client1.isEmpty()) {
                return clientRepository.save(client);
            } else {
                return client;
            }
        }
        
    }
    
    
}
