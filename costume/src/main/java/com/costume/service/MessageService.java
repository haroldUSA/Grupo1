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
    
    public boolean deleteMessage(int id){
        Optional <Message> messaged = messageRepository.getMessage(id);
        if (messaged.isEmpty()) {
            return false;
        } else {
            messageRepository.delete(messaged.get());
            return true;
        }
        
    }
    public Message updateMessage(Message message){
        
        if (message.getIdMessage()!=null) {
            Optional<Message> messageU = messageRepository.getMessage(message.getIdMessage());
            
            if (!messageU.isEmpty()) {
                          
                if (message.getMessageText()!= null){
                    messageU.get().setMessageText(message.getMessageText());
            }
                if (message.getCostume()!=null) {
                    messageU.get().setCostume(message.getCostume());
                }
                if (message.getClient()!=null) {
                    messageU.get().setClient(message.getClient());
                }
                
                
            }
            return messageRepository.save(messageU.get());
        } 
        return message;
    }
    
}
