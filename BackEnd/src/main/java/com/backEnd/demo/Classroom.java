package com.backEnd.demo;

import javax.persistence.*;

@Entity
@Table(name="t_classroom")
public class Classroom {
    @Id
    @Column
    private int PK_idClass;
    @Column
    private int capacity;
    @Column
    private String availability;
    @Column
    private String type;

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
    
    

}
