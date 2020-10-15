package com.backEnd.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class courseServiceImp implements courseService{
 
    @Autowired
    private courseRepository repository;
  
    @Override
    public List<Course> list(){
        return repository.findAll();
    }

    @Override
    public Course listId(int id) {
        return repository.findById(id);
    }

    @Override
    public Course add(Course c) {
        return repository.save(c);
    }

    @Override
    public Course edit(Course c) {
        return repository.save(c);
    }

    @Override
    public Course delete(int id) {
        Course c= repository.findById(id);
        if(c!= null)
        {
            repository.delete(c);
        }
        return c;
    }
}
