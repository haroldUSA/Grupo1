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
    
}
