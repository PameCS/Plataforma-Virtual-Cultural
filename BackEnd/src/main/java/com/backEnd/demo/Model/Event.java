package com.backEnd.demo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "T_EVENT",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "PK_idEvent")
        })
public class Event  {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PK_idEvent;
    @Column
    private String name;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date dateEvent;
    @Column
    private String place;
    @Column
    private String hourEvent;
    
    @OneToOne
    @JoinColumn(name = "fileDB_id")
    private FileDB image;

    public int getPK_idEvent() {
        return PK_idEvent;
    }

    public void setPK_idEvent(int PK_idEvent) {
        this.PK_idEvent = PK_idEvent;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDateEvent() {
        return dateEvent;
    }

    public void setDateEvent(Date dateEvent) {
        this.dateEvent = dateEvent;
    }


    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getHourEvent() {
        return hourEvent;
    }

    public void setHourEvent(String hourEvent) {
        this.hourEvent = hourEvent;
    }

    public FileDB getImage() {
        return image;
    }

    public void setImage(FileDB fileDB) {
        this.image = fileDB;
    }
    
}
