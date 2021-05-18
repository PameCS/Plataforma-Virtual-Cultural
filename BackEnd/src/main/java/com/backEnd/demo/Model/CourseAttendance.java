package com.backEnd.demo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "T_COURSE_ATTENDANCE",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "id")
        })
public class CourseAttendance {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String text;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date date;
    
    @OneToMany(mappedBy = "courseAttendance")
    private List<StudentAttendance> attendanceList;

    public CourseAttendance() {
    }

    public CourseAttendance(String text, Date date) {
        this.text = text;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<StudentAttendance> getAttendanceList() {
        return attendanceList;
    }

    public void setAttendanceList(List<StudentAttendance> attendanceList) {
        this.attendanceList = attendanceList;
    }
    

}
