package dao;

import data.BaseDatos;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.Cliente;

public class GestorCliente implements Serializable {

    // <editor-fold defaultstate="collapsed" desc="constructores">
    public GestorCliente() {
        this.bd = BaseDatos.obtenerInstancia();
    }

    public static GestorCliente obtenerInstancia() {
        if (instancia == null) {
            instancia = new GestorCliente();
        }
        return instancia;
    }
    
      public boolean registrarCliente (Cliente c) {
        boolean exito = false;
        int registrosActualizados = 0;
        try {
            Connection cnx = bd.obtenerConexion();

            try (PreparedStatement stm = cnx.prepareStatement(IMEC_Cliente.INSERTAR1.obtenerComando())) {
                stm.clearParameters();

               stm.setString(1, c.getId_cliente());
               stm.setString(2, c.getUsuario_id_usuario());   
               stm.setString(3, c.getApellidos());
               stm.setString(4, c.getNombre());
               stm.setString(5, c.getTelefono());

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

    // </editor-fold>
 

 
 public boolean verificarCliente(String id_cliente) {
        boolean encontrado = false;
        try {
            Connection cnx = bd.obtenerConexion();
            try (PreparedStatement stm = cnx.prepareStatement(IMEC_Cliente.VERIFICAR.obtenerComando())) {
                stm.clearParameters();
                stm.setString(1, id_cliente);
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
   
    @Override
    public String toString() {
        return super.toString();
    }

    public static void main(String[] args) {
        GestorCliente g = GestorCliente.obtenerInstancia();

    }

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="atributos BD">
    private static GestorCliente instancia = null;
    private BaseDatos bd = null;
    // </editor-fold>
}
