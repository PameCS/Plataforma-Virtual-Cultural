package dao;

public enum IMEC_User {
    INSERT("INSERT INTO T_USER (PK_idUser, password, role) VALUES (?, ?, ?);"),
    VERIFY("SELECT PK_idUser FROM T_USER WHERE id_usuario=? AND password=? AND role=?;"),
    VERIFY2("SELECT PK_idUser FROM T_USER WHERE PK_idUser=?;");

    
    IMEC_User(String command) {
        this.command = command;
    }

    public String getCommand() {
        return command;
    }

    private final String command;
}
