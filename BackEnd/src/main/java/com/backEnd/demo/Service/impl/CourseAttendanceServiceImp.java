package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.CourseAttendance;
import com.backEnd.demo.Repository.CourseAttendanceRepository;
import com.backEnd.demo.Service.CourseAttendanceService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseAttendanceServiceImp implements CourseAttendanceService{
    @Autowired
    private CourseAttendanceRepository repository;
    
     @Override
    public List<CourseAttendance> list(){
        return repository.findAll();
    }

    @Override
    public CourseAttendance listId(int id) {
        return repository.findById(id);
    }

     @Override
    public CourseAttendance edit(CourseAttendance c) {
        return repository.save(c);
    }
    
    @Override
    public CourseAttendance add(CourseAttendance c) {
        return repository.save(c);
    }

    @Override
    public CourseAttendance delete(int id) {
        CourseAttendance c= repository.findById(id);
        if(c!= null)
        {
            repository.delete(c);
        }
        return c;
    }
}
