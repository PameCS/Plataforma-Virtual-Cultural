package com.backEnd.demo.Model;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
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

   @Column(nullable = true)
    @Size(max = 20)
    private String type;
   
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
   @Column(nullable = true)
    @Size(max = 20) 
    private String bornDate;
    
    @Column(nullable = true)
    @Size(max = 8) 
    private String tel;
    
    @Column(nullable = true)
    @Size(max = 15)
    private String gender;
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "T_USERS_ROLES",
            joinColumns = @JoinColumn(name = "FK_UserId"),
            inverseJoinColumns = @JoinColumn(name = "FK_roleId"))
    private Set<Role> roles = new HashSet<>();
    
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "T_ENROLLMENT",
            joinColumns = @JoinColumn(name = "FK_CourseId"))
    private Set<Course> courses = new HashSet<>();
     
    public User() {
    }

    public User(String idUser, String password, String name, String lastName, String type, String email, String bornDate, String tel, String gender) {
        this.idUser = idUser;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.type = type;
        this.email = email;
        this.bornDate = bornDate;
        this.tel = tel;
        this.gender = gender;
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

    public Long getPK_id() {
        return PK_id;
    }

    public void setPK_id(Long PK_id) {
        this.PK_id = PK_id;
    }

    public String getIdClient() {
        return idUser;
    }

    public void setIdClient(String idClient) {
        this.idUser = idClient;
    }

    public String getBornDate() {
        return bornDate;
    }

    public void setBornDate(String bornDate) {
        this.bornDate = bornDate;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
    
     public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
    
     
     public Set<Course> getCourses() {
        return courses;
    }

    public void setCourses(Set<Course> courses) {
        this.courses = courses;
    }

}
