package com.backEnd.demo;

import javax.persistence.*;

@Entity
@Table(name="t_user")
public class User {
    @Id
    @Column
    private int PK_idUser;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String lastName;
    @Column
    private String type;

    public int getPK_idUser() {
        return PK_idUser;
    }

    public void setPK_idUser(int PK_idUser) {
        this.PK_idUser = PK_idUser;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    
}
