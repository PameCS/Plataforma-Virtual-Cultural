package data;

import cr.ac.database.managers.DBManager;
import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

public class Database {

    // <editor-fold defaultstate="collapsed" desc="constructores">
    private Database()
            throws ClassNotFoundException,
            IllegalAccessException,
            InstantiationException,
            IOException {
        configuration = new Properties();
        try {
            configuration.load(getClass().getResourceAsStream(CONFIGURATION_FILE));
            try {
                bd = DBManager.getDBManager(DBManager.DB_MGR.MYSQL_SERVER,
                        configuration.getProperty("server_url"));
            } catch (ClassNotFoundException
                    | IllegalAccessException
                    | InstantiationException ex) {
                System.err.println("Failed to load the database handler...");
                System.err.printf("Exception: '%s'%n", ex.getMessage());
                throw ex;
            }
        } catch (IOException ex) {
            System.err.println("The configuration file could not be read...");
            throw ex;
        }
    }

    public static Database getInstance() {
        if (instancia == null) {
            try {
                instancia = new Database();
            } catch (IOException
                    | ClassNotFoundException
                    | IllegalAccessException
                    | InstantiationException ex) {
                System.err.printf("Excepción: '%s'%n", ex.getMessage());
            }
        }
        return instancia;
    }

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="métodos">
    public Connection getConnection()
            throws SQLException {
        return bd.getConnection(
                configuration.getProperty("database"),
                configuration.getProperty("user"),
                configuration.getProperty("password")
        );
    }

    public void closeConnection() {
        bd.closeConnection();
    }

    public String getConfiguration() {
        return bd.toString();
    }

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="SINGLETON">
    private static Database instancia = null;
    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="atributos BD">
    private static final String CONFIGURATION_FILE = "bd.properties";
    private final Properties configuration;
    private DBManager bd;
    // </editor-fold>
}
