package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Service.UserService;
import com.backEnd.demo.Repository.userRepository;
import com.backEnd.demo.Model.User;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userServiceImp implements UserService {

    @Autowired
    private userRepository repository;

    @Override
    public List<User> list() {
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
        User u = repository.findByidUser(id).get();
        if (u != null) {
            repository.delete(u);
        }
        return u;
    }

    @Override
    public List<User> listProfessors() {
        List<User> professors = new ArrayList<>();
        List<User> list = repository.findAll();
        for (int i = 0; i < list.size(); i++) {
            if(list.get(i).getType() != null){
            if (list.get(i).getType().equals("Profesor")) {
                professors.add(list.get(i));
            }
            }
        }
        return professors;
    }

    @Override
    public Set<Course> listMyCourses(String id) {
        User user = repository.findByidUser(id).get();
        Set<Course> listCourses = user.getCourses();
        return listCourses;
    }
}
