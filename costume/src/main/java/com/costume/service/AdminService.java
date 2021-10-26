/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.costume.service;

import com.costume.model.Admin;
import com.costume.repository.AdminRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author win10
 */
@Service
public class AdminService {

    @Autowired

    private AdminRepository adminRepository;

    public List<Admin> getAll() {
        return adminRepository.getAll();
    }

    public Admin save(Admin admin) {
        if (admin.getIdAdmin() == null) {
            return adminRepository.save(admin);

        } else {
            Optional<Admin> admin1 = adminRepository.getAdmin(admin.getIdAdmin());

            if (admin1.isEmpty()) {
                return adminRepository.save(admin);
            } else {
                return admin;
            }

        }
    }

    public boolean deleteAdmin(int id) {
        Optional<Admin> admind = adminRepository.getAdmin(id);
        if (admind.isEmpty()) {
            return false;
        } else {
            adminRepository.delete(admind.get());
            return true;
        }
    }

    public Admin updateAdmin(Admin admin) {

        if (admin.getIdAdmin() != null) {
            Optional<Admin> adminU = adminRepository.getAdmin(admin.getIdAdmin());

            if (!adminU.isEmpty()) {
                if (admin.getEmail() != null) {
                    adminU.get().setEmail(admin.getEmail());
                }

                if (admin.getPassword() != null) {
                    adminU.get().setPassword(admin.getPassword());
                }
                if (admin.getName() != null) {
                    adminU.get().setName(admin.getName());
                }
            }
            return adminRepository.save(adminU.get());
        }
        return admin;
    }

//    public boolean Acceso(Admin admin) {
//        for (int acceso = 0; acceso < getAll().size(); acceso++) {
//            if (admin.getIdAdmin() == acceso) {
//                Optional<Admin> adminU = adminRepository.getAdmin(admin.getIdAdmin());
//
//                if (!adminU.isEmpty()) {
//                    if (admin.getEmail() != null) {
//                        adminU.get().setEmail(admin.getEmail());
//                    }
//
//                    if (admin.getPassword() != null) {
//                        adminU.get().setPassword(admin.getPassword());
//                    }
//                    if (admin.getName() != null) {
//                        adminU.get().setName(admin.getName());
//                    }
//                }
//            }
//        }
//
//    }
}
