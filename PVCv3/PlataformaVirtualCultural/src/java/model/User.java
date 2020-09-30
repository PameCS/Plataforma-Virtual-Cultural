package model;

public class User {
    private String id_user;
    private String password;
    private int role;

    public User(String id_user, String password, int role) {
        this.id_user = id_user;
        this.password = password;
        this.role = role;
    }   

    public String getId_usuario() {
        return id_user;
    }

    public void setId_usuario(String id_user) {
        this.id_user = id_user;
    }

    public String getClave_acceso() {
        return password;
    }

    public void setClave_acceso(String password) {
        this.password = password;
    }

    public int getRol() {
        return role;
    }

    public void setRol(int role) {
        this.role = role;
    }
}
