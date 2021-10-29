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
    public boolean deleteClient(int id){
        Optional<Client> clientd = clientRepository.getClient(id);
        if (clientd.isEmpty()) {
            return false;
        } else {
            clientRepository.delete(clientd.get());
            return true;
        }
    }
    public Client updateClient(Client client){
        
        if (client.getIdClient()!=null) {
            Optional<Client> clientU = clientRepository.getClient(client.getIdClient());
            
            if (!clientU.isEmpty()) {
                          
                if (client.getName()!= null){
                    clientU.get().setName(client.getName());
            }
                if (client.getEmail()!= null){
                    clientU.get().setEmail(client.getEmail());
                }
                if (client.getPassword()!= null){
                    clientU.get().setPassword(client.getPassword());
                }
                if (client.getAge()!= null){
                    clientU.get().setAge(client.getAge());
                }
            }
            return clientRepository.save(clientU.get());
        } 
        return client;
    }
    
   
    
}
