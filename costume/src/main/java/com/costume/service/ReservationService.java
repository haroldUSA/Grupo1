/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Client;
import com.costume.model.ReportClient;
import com.costume.model.Reservation;
import com.costume.model.Status;
import com.costume.repository.ClientRepository;
import com.costume.repository.ReservationRepository;
import java.util.ArrayList;
import java.util.Date;
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
    private ClientRepository clientRepository;
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
                if(reservation.getClient()!=null){
                    reservationU.get().setClient(reservation.getClient());
                }
                if(reservation.getCostume()!=null){
                    reservationU.get().setCostume(reservation.getCostume());
                }   
               
            }
            return reservationRepository.save(reservationU.get());
        } 
        return reservation;
    }

    public Status getStatus() {
        Status status = new Status();
        List<Reservation> reservations=reservationRepository.getAll();
        int contF=0;
        int contC=0;
        for(Reservation res:reservations){
            if(res.getStatus().equals("completed")){
                contF=contF+1;
            }else if(res.getStatus().equals("cancelled")){
                contC=contC+1;
            }
        }
        status.setCompleted(contF);
        status.setCancelled(contC);
        return status;
    }

    public List<ReportClient> getReportClient() {
        List<ReportClient> repoclient=new ArrayList<ReportClient>();
        List<Client> clients=clientRepository.getAll();
        int total=0;
        for(Client cli:clients){
            for(Reservation res:cli.getReservations()){
             total=total+1;   
            }
            ReportClient reportclient= new ReportClient();
            reportclient.setTotal(total);
            reportclient.setClient(cli);
            repoclient.add(reportclient);
            total=0;
        }
        return repoclient;
    }
    

    public List<Reservation> getReportDates(Date date1, Date date2) {
        List<Reservation> reservations= reservationRepository.getAll();
        List<Reservation> reservationsDate =new ArrayList<Reservation>();
        for(Reservation res:reservations){
            if(date1.compareTo(res.getStartDate()) * res.getStartDate().compareTo(date2) >= 0){
                reservationsDate.add(res);
            }
        }
        return reservationsDate;
    }
    
}
