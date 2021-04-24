package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Service.courseService;
import com.backEnd.demo.Repository.courseRepository;
import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.User;
import com.backEnd.demo.Repository.userRepository;
import com.backEnd.demo.Service.UserService;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class courseServiceImp implements courseService {

    @Autowired
    private courseRepository repository;

    @Autowired
    courseService courseService;

    @Autowired
    UserService userService;

    @Override
    public List<Course> list() {
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
        Course c = repository.findById(id);
        if (c != null) {
            repository.delete(c);
        }
        return c;
    }

    @Override
    public Course enroll(Course c, User u) {
        try {
            Set<User> users = c.getUsers();
            Set<Course> courses = u.getCourses();
            users.add(u);
            courses.add(c);
            c.setStudentQuantity(c.getStudentQuantity() - 1);
            c.setUsers(users);
            u.setCourses(courses);
            courseService.edit(c);
            userService.edit(u);
            
        } catch (Exception ex) {
            System.out.print(ex);
        }
        return c;
    }
    
     @Override
     public Set<User> listStudents(int id){
         Course c = courseService.listId(id);
         Set<User> list = c.getUsers();
         return list;
     }
}
