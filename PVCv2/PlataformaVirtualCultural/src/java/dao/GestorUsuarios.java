package dao;

import data.BaseDatos;
import model.Cliente;
import model.User;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class GestorUsuarios implements Serializable {

    // <editor-fold defaultstate="collapsed" desc="constructores">
    public GestorUsuarios() {
        this.bd = BaseDatos.obtenerInstancia();
    }

    public static GestorUsuarios obtenerInstancia() {
        if (instancia == null) {
            instancia = new GestorUsuarios();
        }
        return instancia;
    }

    public boolean verificarUsuario(String id_usuario, String clave_acceso, String rol) {
        boolean encontrado = false;
        try {
            Connection cnx = bd.obtenerConexion();
            try (PreparedStatement stm = cnx.prepareStatement(IMEC_Usuario.VERIFICAR.obtenerComando())) {
                stm.clearParameters();
                stm.setString(1, id_usuario);
                stm.setString(2, clave_acceso);
                stm.setString(3, rol);
                ResultSet rs = stm.executeQuery();
                encontrado = rs.next();
            }

        } catch (SQLException ex) {
            System.err.printf("Excepción: '%s'%n", ex.getMessage());
        } finally {
            bd.cerrarConexion();
        }
        return encontrado;
    }
 public boolean verificarUsuario2(String id_usuario) {
        boolean encontrado = false;
        try {
            Connection cnx = bd.obtenerConexion();
            try (PreparedStatement stm = cnx.prepareStatement(IMEC_Usuario.VERIFICAR2.obtenerComando())) {
                stm.clearParameters();
                stm.setString(1, id_usuario);
                ResultSet rs = stm.executeQuery();
                encontrado = rs.next();
            }

        } catch (SQLException ex) {
            System.err.printf("Excepción: '%s'%n", ex.getMessage());
        } finally {
            bd.cerrarConexion();
        }
        return encontrado;
    }
    public boolean registrarUsuario(User nuevoUsuario) {
        boolean exito = false;
        int registrosActualizados = 0;
        try {
            Connection cnx = bd.obtenerConexion();

            try (PreparedStatement stm = cnx.prepareStatement(IMEC_Usuario.INSERTAR.obtenerComando())) {
                stm.clearParameters();

                stm.setString(1, nuevoUsuario.getId_usuario());
                stm.setString(2, nuevoUsuario.getClave_acceso());
                stm.setInt(3, nuevoUsuario.getRol());

                registrosActualizados = stm.executeUpdate();
                exito = registrosActualizados == 1;
            }

        } catch (SQLException ex) {
            System.err.printf("Excepción: '%s'%n", ex.getMessage());
        } finally {
            bd.cerrarConexion();
        }
        return exito;
    }

    @Override
    public String toString() {
        return super.toString();
    }

    public static void main(String[] args) {
        GestorUsuarios g = GestorUsuarios.obtenerInstancia();

    }

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="atributos BD">
    private static GestorUsuarios instancia = null;
    private BaseDatos bd = null;
    // </editor-fold>
}
