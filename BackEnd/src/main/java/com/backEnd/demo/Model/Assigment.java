package com.backEnd.demo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "T_ASSIGMENT",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "PK_idAssigment")
        })
public class Assigment {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PK_idAssigment;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String qualification;
     @Column
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date deadline;
     
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,orphanRemoval = true)
    @JoinTable(name = "T_ASSIGMENT_MATERIAL",
            joinColumns = @JoinColumn(name = "FK_Id"))
    private List<FileDB> materials = new ArrayList<>();
    
     @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,orphanRemoval = true)
    @JoinTable(name = "T_ASSIGMENT_FILES",
            joinColumns = @JoinColumn(name = "FK_Id"))
    private List<FileDB> assigmentFiles = new ArrayList<>();
    

    public Assigment() {
    }

    public Assigment(int PK_idAssigment, String name, String description, String qualification, Date deadline) {
        this.PK_idAssigment = PK_idAssigment;
        this.name = name;
        this.description = description;
        this.qualification = qualification;
        this.deadline = deadline;
    }

    public int getPK_idAssigment() {
        return PK_idAssigment;
    }

    public void setPK_idAssigment(int PK_idAssigment) {
        this.PK_idAssigment = PK_idAssigment;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public List<FileDB> getMaterials() {
        return materials;
    }

    public void setMaterials(List<FileDB> materials) {
        this.materials = materials;
    }

    public List<FileDB> getAssigmentFiles() {
        return assigmentFiles;
    }
    

    public void setAssigmentFiles(List<FileDB> assigmentFiles) {
        this.assigmentFiles = assigmentFiles;
    }
    
}
