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
public class Status implements Serializable{
    public int completed;
    public int cancelled;

    public void setCompleted(int completed) {
        this.completed = completed;
    }

    public void setCancelled(int cancelled) {
        this.cancelled = cancelled;
    }

    public int getCompleted() {
        return completed;
    }

    public int getCancelled() {
        return cancelled;
    }
}
