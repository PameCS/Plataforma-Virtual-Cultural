package dao;

public enum IMEC_Cliente {
    VERIFICAR("SELECT id_cliente FROM cliente WHERE id_cliente=?;"),
    INSERTAR1("INSERT INTO cliente (id_cliente,usuario_id_usuario, apellidos,nombre, telefono) VALUES (?, ?, ?,?,?);");

    IMEC_Cliente(String comando) {
        this.comando = comando;
    }

    public String obtenerComando() {
        return comando;
    }

    private final String comando;
}
