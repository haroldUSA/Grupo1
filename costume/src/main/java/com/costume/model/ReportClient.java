/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.model;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 *
 * @author harld
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportClient implements Serializable{
    public int total;
    public Client client;

    public Client getClient() {
        return client;
    }

    public int getTotal() {
        return total;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}
