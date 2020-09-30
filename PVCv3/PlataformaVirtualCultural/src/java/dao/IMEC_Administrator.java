package dao;

public enum IMEC_Administrator {
    INSERT("INSERT INTO T_ADMIN (PK_idAdmin,FK_user_id_user,last,name,telephone,email) VALUES (?,?,?,?,?,?);"),
    VERIFY("SELECT PK_idAdmin FROM T_ADMIN WHERE PK_idAdmin=?;");
            
    IMEC_Administrator(String command) {
        this.command = command;
    }

    public String getCommand() {
        return command;
    }

    private final String command;
}
