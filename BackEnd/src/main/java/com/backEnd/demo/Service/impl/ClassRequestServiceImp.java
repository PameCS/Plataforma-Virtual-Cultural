package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.ClassRequest;
import com.backEnd.demo.Repository.ClassRequestRepository;
import com.backEnd.demo.Service.ClassRequestService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClassRequestServiceImp implements ClassRequestService{
    
    @Autowired
    private ClassRequestRepository repository;
    
     @Override
    public List<ClassRequest> list(){
        return repository.findAll();
    }

    @Override
    public ClassRequest listId(int id) {
        return repository.findById(id);
    }

    @Override
    public ClassRequest add(ClassRequest c) {
        return repository.save(c);
    }

    @Override
    public ClassRequest delete(int id) {
        ClassRequest c= repository.findById(id);
        if(c!= null)
        {
            repository.delete(c);
        }
        return c;
    }
}
