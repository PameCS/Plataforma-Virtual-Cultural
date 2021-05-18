package com.backEnd.demo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "T_COURSES",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "PK_idCourse")
        })
public class Course {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int PK_idCourse;
    @Column
    private String name;
    @Column
    private String mode;
    @Column
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date startDate;
    @Column
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date finishDate;
    @Column
    private String shedule;
    @Column
    private String professor;
    @Column
    private int studentQuantity;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "T_COURSE_ADS",
            joinColumns = @JoinColumn(name = "FK_Id"))
    private Set<CourseAds> ads = new HashSet<>();
    
    @OneToOne
    @JoinColumn(name = "fileDB_id")
    private FileDB fileDB;
    
    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "T_COURSE_MATERIAL",
            joinColumns = @JoinColumn(name = "FK_Id"))
    private Set<FileDB> materials = new HashSet<>();
    
    
    public int getStudentQuantity() {
        return studentQuantity;
    }

    public void setStudentQuantity(int studentQuantity) {
        this.studentQuantity = studentQuantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    public String getShedule() {
        return shedule;
    }

    public void setShedule(String shedule) {
        this.shedule = shedule;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public int getPK_idCourse() {
        return PK_idCourse;
    }

    public void setPK_idCourse(int PK_idCourse) {
        this.PK_idCourse = PK_idCourse;
    }

    public Set<CourseAds> getAds() {
        return ads;
    }

    public void setAds(Set<CourseAds> ads) {
        this.ads = ads;
    }

    public FileDB getFileDB() {
        return fileDB;
    }

    public void setFileDB(FileDB fileDB) {
        this.fileDB = fileDB;
    }

    public Set<FileDB> getMaterials() {
        return materials;
    }

    public void setMaterials(Set<FileDB> materials) {
        this.materials = materials;
    }
    
    
}
