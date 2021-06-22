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
    private String userid; //El nombre de usuario que hace la solicitud
    @Column
    private String classId;
    @Column
    private String fullNameSoli;
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
    
    @Column
    private String status;
    @Column
    private String comment;
    
    public int getPK_idRequest() {
        return PK_idRequest;
    }

    public void setPK_idRequest(int PK_idRequest) {
        this.PK_idRequest = PK_idRequest;
    }

    public String getClassId() {
        return classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    public String getFullNameSoli() {
        return fullNameSoli;
    }

    public void setFullNameSoli(String fullNameSoli) {
        this.fullNameSoli = fullNameSoli;
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
    


    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getUserid() {
        return this.userid;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
    
    public String getReason()
    {
        return  this.reason;
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
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
    
}
