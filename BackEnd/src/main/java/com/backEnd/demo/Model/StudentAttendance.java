package com.backEnd.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "T_STUDENT_ATTENDANCE",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "id")
        })
public class StudentAttendance {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String studentId;
    @Column
    private String studentFullName;
    @Column
    private String studentAttendance;    
    @Column
    private int courseId;  
    
    @ManyToOne
    @JoinColumn(name="courseAttendance_id")
    private CourseAttendance courseAttendance;

    public StudentAttendance() {
    }

    public StudentAttendance( String id_student, String studentFullName,int courseId){
        
        this.studentId = id_student;
        this.studentFullName = studentFullName;
        this.courseId = courseId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentFullName() {
        return studentFullName;
    }

    public void setStudentFullName(String studentFullName) {
        this.studentFullName = studentFullName;
    }

    public String getStudentAttendance() {
        return studentAttendance;
    }

    public void setStudentAttendance(String studentAttendance) {
        this.studentAttendance = studentAttendance;
    }

    public CourseAttendance getCourseAttendance() {
        return courseAttendance;
    }

    public void setCourseAttendance(CourseAttendance courseAttendance) {
        this.courseAttendance = courseAttendance;
    }

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

   
}
