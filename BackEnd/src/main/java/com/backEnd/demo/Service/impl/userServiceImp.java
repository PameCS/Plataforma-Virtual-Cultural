package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Service.UserService;
import com.backEnd.demo.Repository.userRepository;
import com.backEnd.demo.Model.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class userServiceImp implements UserService{
    
    @Autowired
    private userRepository repository;
    @Override
    public List<User> list(){
        return repository.findAll();
    }

    @Override
    public User listId(String id) {
        return repository.findByidUser(id).get();
    }

    @Override
    public User add(User u) {
        return repository.save(u);
    }

    @Override
    public User edit(User u) {
        return repository.save(u);
    }

    @Override
    public User delete(String id) {
        User u= repository.findByidUser(id).get();
        if(u!= null)
        {
            repository.delete(u);
        }
        return u;
    }
   
}