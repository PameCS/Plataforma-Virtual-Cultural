package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.Course;
import java.util.List;
import org.springframework.data.repository.Repository;


public interface courseRepository extends Repository<Course,Integer>{
    List<Course>findAll();
    Course findById(int PK_courseCode);
    Course save(Course c);
    void delete(Course c);
}
