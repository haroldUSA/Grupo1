/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Score;
import com.costume.repository.ScoreRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author win10
 */
 @Service
public class ScoreService {
     @Autowired
     
     private ScoreRepository scoreRepository;
     
     public List <Score> getAll(){
         return scoreRepository.getAll();
     }
     
     public Score save(Score score){
         if (score.getIdScore()==null) {
             return scoreRepository.save(score);
         } else {
             Optional<Score> score1 = scoreRepository.getScore(score.getIdScore());
             if (score1.isEmpty()) {
                 return scoreRepository.save(score);
             } else {
                 return  score;
             }
         }
     }
     public boolean deleteScore (int id ){
         Optional<Score> scored = scoreRepository.getScore(id);
         if (scored.isEmpty()) {
             return false;
         } else {
             scoreRepository.delete(scored.get());
             return true;
         }
     }
     public Score updateClient(Score score){
        
        if (score.getIdScore()!=null) {
            Optional<Score> scoreU = scoreRepository.getScore(score.getIdScore());
            
            if (!scoreU.isEmpty()) {
                          
                if (score.getMessageText()!= null){
                    scoreU.get().setMessageText(score.getMessageText());
            }
                if (score.getStars()!= null){
                    scoreU.get().setStars(score.getStars());
                }                
            }
            return scoreRepository.save(scoreU.get());
        } 
        return score;
    }
    
}
