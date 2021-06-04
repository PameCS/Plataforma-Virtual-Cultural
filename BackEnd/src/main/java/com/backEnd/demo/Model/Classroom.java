package com.backEnd.demo.Model;

import javax.persistence.*;

@Entity
@Table(name = "T_CLASSROOM",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "PK_idClass")
        })
public class Classroom {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PK_idClass;
    @Column
    private int capacity;
    @Column
    private String availability;
    @Column
    private String type;
    
    @OneToOne
    @JoinColumn(name = "fileDB_id")
    private FileDB image;

    public int getPK_idClass() {
        return PK_idClass;
    }

    public void setPK_idClass(int PK_idClass) {
        this.PK_idClass = PK_idClass;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public FileDB getFileDB() {
        return image;
    }

    public void setFileDB(FileDB fileDB) {
        this.image = fileDB;
    }
    
    

}
