package com.backEnd.demo.Model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "T_USERS",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "PK_id")
            ,
                        @UniqueConstraint(columnNames = "idUser")
            ,
			@UniqueConstraint(columnNames = "email")
        })
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long PK_id;

    @NotBlank
    @Size(max = 20)
    private String idUser;

    @NotBlank
    @Size(max = 120)
    private String password;

    @NotBlank
    @Size(max = 20)
    private String name;

    @NotBlank
    @Size(max = 20)
    private String lastName;

    @Size(max = 20)
    @Column(nullable = true)
    private String type;
   
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    @Column(nullable = true)
    @Size(max = 20)
    private String address;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "T_USER_ROLES",
            joinColumns = @JoinColumn(name = "FK_userId"),
            inverseJoinColumns = @JoinColumn(name = "FK_roleId"))
    private Set<Role> roles = new HashSet<>();

    public User() {
    }

    public User(String idUser, String password, String name, String lastName, String type, String email, String address) {
        this.idUser = idUser;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.type = type;
        this.email = email;
        this.address = address;
    }

    public Long getId() {
        return PK_id;
    }

    public void setId(Long id) {
        this.PK_id = id;
    }

    public String getUsername() {
        return idUser;
    }

    public void setUsername(String username) {
        this.idUser = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPK_idUser() {
        return idUser;
    }

    public void setPK_idUser(String PK_idUser) {
        this.idUser = PK_idUser;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
