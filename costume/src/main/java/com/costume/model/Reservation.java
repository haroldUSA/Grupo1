package com.costume.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Representa a una reserva por un disfraz
 * @author desaextremo
 */
@Entity
@Table(name = "reservation")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idReservation;
    @Column (nullable = false)
    private Date startDate;
    @Column (nullable = false)
    private Date devolutionDate;
    @Column (nullable = false)
    private String status="created";
    
    @ManyToOne
    @JoinColumn(name = "costumeId")
    @JsonIgnoreProperties("reservations")
    private Costume costume;
    
    @ManyToOne
    @JoinColumn(name = "clientId")
    @JsonIgnoreProperties("reservations")
    private Client client;
    
}
