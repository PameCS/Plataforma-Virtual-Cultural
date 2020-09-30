package dao;

import data.Database;
import model.Administrator;
import model.User;
import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class UserServlet implements Serializable {

    public UserServlet() {
        this.bd = Database.getInstance();
    }

    public static UserServlet getInstance() {
        if (instance == null) {
            instance = new UserServlet();
        }
        return instance;
    }

    public boolean verifyUser(String PK_idUser, String password, String role) {
        boolean found = false;
        try {
            Connection cnx = bd.getConnection();
            try (PreparedStatement stm = cnx.prepareStatement(IMEC_User.VERIFY.getCommand())) {
                stm.clearParameters();
                stm.setString(1, PK_idUser);
                stm.setString(2, password);
                stm.setString(3, role);
                ResultSet rs = stm.executeQuery();
                found = rs.next();
            }

        } catch (SQLException ex) {
            System.err.printf("Excepción: '%s'%n", ex.getMessage());
        } finally {
            bd.closeConnection();
        }
        return found;
    }
 public boolean verifyUser2(String PK_idUser) {
        boolean found = false;
        try {
            Connection cnx = bd.getConnection();
            try (PreparedStatement stm = cnx.prepareStatement(IMEC_User.VERIFY2.getCommand())) {
                stm.clearParameters();
                stm.setString(1, PK_idUser);
                ResultSet rs = stm.executeQuery();
                found = rs.next();
            }

        } catch (SQLException ex) {
            System.err.printf("Excepción: '%s'%n", ex.getMessage());
        } finally {
            bd.closeConnection();
        }
        return found;
    }
    public boolean registerUser(User newUser) {
        boolean success = false;
        int updated = 0;
        try {
            Connection cnx = bd.getConnection();

            try (PreparedStatement stm = cnx.prepareStatement(IMEC_User.INSERT.getCommand())) {
                stm.clearParameters();

                stm.setString(1, newUser.getId_usuario());
                stm.setString(2, newUser.getClave_acceso());
                stm.setInt(3, newUser.getRol());

                updated = stm.executeUpdate();
                success = updated == 1;
            }

        } catch (SQLException ex) {
            System.err.printf("Exception: '%s'%n", ex.getMessage());
        } finally {
            bd.closeConnection();
        }
        return success;
    }

    @Override
    public String toString() {
        return super.toString();
    }

    public static void main(String[] args) {
        UserServlet g = UserServlet.getInstance();

    }
    
    private static UserServlet instance = null;
    private Database bd = null;
}
