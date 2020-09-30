package model;

public class SuperAdmin {

    private String id_admin;
    private String user_id_user;
    private String lastName;
    private String name;
    private Integer telephone;
    private String email;

    public SuperAdmin(String id_admin, String user_id_user, String lastName, String name, Integer telephone, String email) {
        this.id_admin = id_admin;
        this.user_id_user = user_id_user;
        this.lastName = lastName;
        this.name = name;
        this.telephone = telephone;
        this.email = email;
    }



    public String getId_admin() {
        return id_admin;
    }

    public void setId_admin(String id_admin) {
        this.id_admin = id_admin;
    }

    public String getUser_id_user() {
        return user_id_user;
    }

    public void setUser_id_user(String user_id_user) {
        this.user_id_user = user_id_user;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTelephone() {
        return telephone;
    }

    public void setTelephone(Integer telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

   
    
}
