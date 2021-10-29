/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.controller;

import com.costume.model.ReportClient;
import com.costume.model.Reservation;
import com.costume.model.Status;
import com.costume.service.ReservationService;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author win10
 */
@RestController
@RequestMapping("/api/Reservation")
@CrossOrigin(origins = "*", methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class ReservationController {
    @Autowired
    
    private ReservationService reservationService;
    
    @GetMapping("/all")
    public List <Reservation> getAll(){
        return reservationService.getAll();
    }
    
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation reservation){
        return reservationService.save(reservation);
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean deleteReservation(@PathVariable int id){
        return reservationService.reservationDelete(id);
    }
    
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation reservationUpdate(@RequestBody Reservation reservation){
        return reservationService.updateReservation(reservation);
    }
    @GetMapping("/report-status")
    public Status getStatus(){
        return reservationService.getStatus();
    }
    @GetMapping("/report-clients")
    public List<ReportClient> getReportClient(){
        return reservationService.getReportClient();
    }
    
    @GetMapping("/report-dates/{startDate}/{devolutionDate}")
    public List<Reservation> getReportdate(@PathVariable String startDate,@PathVariable String devolutionDate) throws ParseException{
        Date date1=new SimpleDateFormat("yyyy-MM-dd").parse(startDate);
        Date date2=new SimpleDateFormat("yyyy-MM-dd").parse(devolutionDate);
        return reservationService.getReportDates(date1,date2);
    }        
}
