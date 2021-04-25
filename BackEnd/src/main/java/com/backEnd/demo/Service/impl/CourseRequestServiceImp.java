package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.CourseRequest;
import com.backEnd.demo.Repository.CourseRequestRepository;
import com.backEnd.demo.Service.CourseRequestService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseRequestServiceImp implements CourseRequestService{
    
    @Autowired
    private CourseRequestRepository repository;
    
     @Override
    public List<CourseRequest> list(){
        return repository.findAll();
    }

    @Override
    public CourseRequest listId(int id) {
        return repository.findById(id);
    }

    @Override
    public CourseRequest add(CourseRequest c) {
        return repository.save(c);
    }

    @Override
    public CourseRequest delete(int id) {
        CourseRequest c= repository.findById(id);
        if(c!= null)
        {
            repository.delete(c);
        }
        return c;
    }
}
