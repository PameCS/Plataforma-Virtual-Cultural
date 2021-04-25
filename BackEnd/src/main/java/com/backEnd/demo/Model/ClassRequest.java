package com.backEnd.demo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.UniqueConstraint;


@Entity
@Table(name = "T_CLASS_REQUEST",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "PK_idRequest")
        })
public class ClassRequest {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PK_idRequest;
    @Column
    private int classId;
    @Column
    private String fullName;
    @Column
    private String tel;
    @Column
    private String email;   
    @Column
    private String reason;
    
    @Column
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date requestDate;
    @Column
    private String requestHour;
    @Column
    private String equipment;

    public int getPK_idRequest() {
        return PK_idRequest;
    }

    public void setPK_idRequest(int PK_idRequest) {
        this.PK_idRequest = PK_idRequest;
    }

    public int getClassId() {
        return classId;
    }

    public void setClassId(int classId) {
        this.classId = classId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public String getRequestHour() {
        return requestHour;
    }

    public void setRequestHour(String requestHour) {
        this.requestHour = requestHour;
    }

    public String getEquipment() {
        return equipment;
    }

    public void setEquipment(String equipment) {
        this.equipment = equipment;
    }
    
}
