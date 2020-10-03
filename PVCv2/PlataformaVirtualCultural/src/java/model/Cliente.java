package model;

public class Cliente {

    private String id_cliente;
    private String usuario_id_usuario;
    private String apellidos;
    private String nombre;
    private String telefono;

    public Cliente(String id_cliente, String usuario_id_usuario, String apellidos, String nombre, String telefono) {
        this.id_cliente = id_cliente;
        this.usuario_id_usuario = usuario_id_usuario;
        this.apellidos = apellidos;
        this.nombre = nombre;
        this.telefono = telefono;
    }
//revision
    //revisob 2
    public String getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(String id_cliente) {
        this.id_cliente = id_cliente;
    }

    public String getUsuario_id_usuario() {
        return usuario_id_usuario;
    }

    public void setUsuario_id_usuario(String usuario_id_usuario) {
        this.usuario_id_usuario = usuario_id_usuario;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    
    
    
}
