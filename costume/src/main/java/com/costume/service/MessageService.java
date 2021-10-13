/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Message;
import com.costume.repository.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author win10
 */
@Service
public class MessageService {
    @Autowired
    
    private MessageRepository messageRepository;
    
    public List <Message> getAll(){
        return messageRepository.getAll();
    } 
    
    public  Message save(Message message){
        if (message.getIdMessage()==null) {
            return messageRepository.save(message);
        } else {
            Optional<Message> message1 = messageRepository.getMessage(message.getIdMessage());
            if (message1.isEmpty()) {
                return messageRepository.save(message);
            } else {
                return message;
            }
        }
    }
    
}
