package com.backEnd.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class classroomServiceImp implements classService{
    @Autowired
    private ClassroomRepository repository;
    
    @Override
    public List<Classroom> list(){
        return repository.findAll();
    }

    @Override
    public Classroom listId(int id) {
        return repository.findById(id);
    }

    @Override
    public Classroom add(Classroom c) {
        return repository.save(c);
    }

    @Override
    public Classroom edit(Classroom c) {
        return repository.save(c);
    }

    @Override
    public Classroom delete(int id) {
        Classroom c= repository.findById(id);
        if(c!= null)
        {
            repository.delete(c);
        }
        return c;
    }
}
