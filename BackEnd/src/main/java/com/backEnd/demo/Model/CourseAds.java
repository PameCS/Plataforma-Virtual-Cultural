package com.backEnd.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity

@Table(name = "T_COURSEADS",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "PK_id")
        })
public class CourseAds {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PK_id;
    @Column
    private String title;
    @Column
    private String description;
    @Column
    private String state;
    
    public CourseAds() {
    }

    public CourseAds(int PK_id, String title, String description, String state) {
        this.PK_id = PK_id;
        this.title = title;
        this.description = description;
        this.state = state;
    }

    public int getPK_id() {
        return PK_id;
    }

    public void setPK_id(int PK_id) {
        this.PK_id = PK_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
    
}
