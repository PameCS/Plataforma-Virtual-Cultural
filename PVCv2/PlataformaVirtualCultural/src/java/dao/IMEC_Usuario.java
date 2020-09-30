package dao;

public enum IMEC_Usuario {
    INSERTAR("INSERT INTO usuario (id_usuario, clave_acceso,rol) VALUES (?, ?, ?); "),
    VERIFICAR("SELECT id_usuario FROM usuario WHERE id_usuario=? AND clave_acceso=? AND rol=?; "),
    VERIFICAR2("SELECT id_usuario FROM usuario WHERE id_usuario=?;");

    
    IMEC_Usuario(String comando) {
        this.comando = comando;
    }

    public String obtenerComando() {
        return comando;
    }

    private final String comando;
}
