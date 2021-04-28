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
    private String text;

    public CourseAds() {
    }

    public CourseAds(String text) {
        this.text = text;
    }

    public int getPK_id() {
        return PK_id;
    }

    public void setPK_id(int PK_id) {
        this.PK_id = PK_id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }


}
