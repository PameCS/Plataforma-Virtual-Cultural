package com.backEnd.demo.payload.request;

import java.util.Set;

import javax.validation.constraints.*;
import org.hibernate.validator.constraints.Range;
 
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
         
	@Range(min=0,max=9)
	private int tel;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@Size(max = 20)
	private String address;
	
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
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

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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
    
    public Set<String> getRole() {
      return this.role;
    }
    
    public void setRole(Set<String> role) {
      this.role = role;
    }
}

