package com.backEnd.demo.payload.request;
import javax.validation.constraints.*;

public class SignupRequest {
    
    @NotBlank
    @Size(max = 20)
    private String idUser;

    @NotBlank
    @Size(max = 20)
    private String name;

    @NotBlank
    @Size(max = 20)
    private String lastName;
 
    @Size(max = 20)
    private String type;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 8, max = 120)
    private String password;

   
    @Size(max = 20) 
    private String bornDate;

    
    @Size(max = 8) 
    private String tel;
     
  
    @Size(max = 15)
    private String gender;

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idClient) {
        this.idUser = idClient;
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

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
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

    public String getBornDate() {
        return bornDate;
    }

    public void setBornDate(String bornDate) {
        this.bornDate = bornDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

}
