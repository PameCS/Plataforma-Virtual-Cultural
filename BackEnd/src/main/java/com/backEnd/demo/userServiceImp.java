package com.backEnd.demo;

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
    public User listId(int id) {
        return repository.findById(id);
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
    public User delete(int id) {
        User u= repository.findById(id);
        if(u!= null)
        {
            repository.delete(u);
        }
        return u;
    }
   
}
