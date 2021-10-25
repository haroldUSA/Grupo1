/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Representa a una categoria en la que se clasifican los disfraces
 * @author desaextremo
 */
@Entity
@Table(name = "category")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {
    /**
     * primary key usada para Category
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Integer id;
    /**
     * nombre de la persona
     */
    @Column(nullable = false, length = 45)
    private String name;
    /**
     * descripcion de la persona
     */
    @Column(nullable = false, length = 250)
    private String description;
    /**
     * forany kay de costume
     */
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "category")
    @JsonIgnoreProperties("category")
    private List<Costume> costumes;
}
