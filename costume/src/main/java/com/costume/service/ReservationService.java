/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Reservation;
import com.costume.repository.ReservationRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author win10
 */
@Service
public class ReservationService {
    @Autowired
    
    private ReservationRepository reservationRepository;
    
    public List <Reservation> getAll(){
        return reservationRepository.getAll();
    }
    
    public Reservation save(Reservation reservation){
        if (reservation.getIdReservation()==null) {
            return reservationRepository.save(reservation);
        } else {
            Optional <Reservation> reservation1 = reservationRepository.getReservation(reservation.getIdReservation());
            if (reservation1.isEmpty()) {
                return reservationRepository.save(reservation);
            } else {
                return reservation;
            }
        }
    }
    public boolean reservationDelete(int id){
        Optional<Reservation> reservationd = reservationRepository.getReservation(id);
        if (reservationd.isEmpty()) {
            return false;
        } else {
            reservationRepository.delete(reservationd.get());
            return true;
        }
    }
    public Reservation updateReservation(Reservation reservation){
        
        if (reservation.getIdReservation()!=null) {
            Optional<Reservation> reservationU = reservationRepository.getReservation(reservation.getIdReservation());
            
            if (!reservationU.isEmpty()) {
                          
                if (reservation.getStartDate()!= null){
                    reservationU.get().setStartDate(reservation.getStartDate());
            }
                if (reservation.getDevolutionDate()!= null){
                    reservationU.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if (reservation.getStatus()!= null){
                    reservationU.get().setStatus(reservation.getStatus());
                }
               
            }
            return reservationRepository.save(reservationU.get());
        } 
        return reservation;
    }
    
}
