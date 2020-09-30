package model;

public class User {
    private String id_usuario;
    private String clave_acceso;
    private String clave_vencida;
    private int rol;

    public User(String id_usuario, String clave_acceso, String clave_vencida, int rol) {
        this.id_usuario = id_usuario;
        this.clave_acceso = clave_acceso;
        this.clave_vencida = clave_vencida;
        this.rol = rol;
    }

    public String getClave_vencida() {
        return clave_vencida;
    }

    public void setClave_vencida(String clave_vencida) {
        this.clave_vencida = clave_vencida;
    }

    

    public String getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(String id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getClave_acceso() {
        return clave_acceso;
    }

    public void setClave_acceso(String clave_acceso) {
        this.clave_acceso = clave_acceso;
    }

    public int getRol() {
        return rol;
    }

    public void setRol(int rol) {
        this.rol = rol;
    }
}
