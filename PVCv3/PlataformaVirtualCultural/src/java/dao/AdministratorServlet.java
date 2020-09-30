package dao;

import data.Database;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import model.Administrator;

public class AdministratorServlet implements Serializable {

  public AdministratorServlet() {
        this.bd = Database.getInstance();
    }

    public static AdministratorServlet getInstance() {
        if (instance == null) {
            instance = new AdministratorServlet();
        }
        return instance;
    }
    
      public boolean registerAdmin (Administrator c) {
        boolean success = false;
        int updated = 0;
        try {
            Connection cnx = bd.getConnection();

            try (PreparedStatement stm = cnx.prepareStatement(IMEC_Administrator.INSERT.getCommand())) {
                stm.clearParameters();

               stm.setString(1, c.getId_admin());
               stm.setString(2, c.getUser_id_user());   
               stm.setString(3, c.getLastName());
               stm.setString(4, c.getName());
               stm.setInt(5, c.getTelephone());
               stm.setString(4, c.getEmail());
               
                updated = stm.executeUpdate();
                success = updated == 1;
            }

        } catch (SQLException ex) {
            System.err.printf("Excepción: '%s'%n", ex.getMessage());
        } finally {
            bd.closeConnection();
        }
        return success;
    }

 
 public boolean verifyAdmin(String id_Admin) {
        boolean encontrado = false;
        try {
            Connection cnx = bd.getConnection();
            try (PreparedStatement stm = cnx.prepareStatement(IMEC_Administrator.VERIFY.getCommand())) {
                stm.clearParameters();
                stm.setString(1, id_Admin);
                ResultSet rs = stm.executeQuery();
                encontrado = rs.next();
            }

        } catch (SQLException ex) {
            System.err.printf("Exception: '%s'%n", ex.getMessage());
        } finally {
            bd.closeConnection();
        }
        return encontrado;
    }
   
    @Override
    public String toString() {
        return super.toString();
    }

    public static void main(String[] args) {
        AdministratorServlet g = AdministratorServlet.getInstance();

    }

    private static AdministratorServlet instance = null;
    private Database bd = null;
}
