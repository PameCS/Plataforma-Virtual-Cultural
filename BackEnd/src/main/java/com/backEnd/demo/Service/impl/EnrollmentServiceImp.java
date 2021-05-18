package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.Enrollment;
import com.backEnd.demo.Model.User;
import com.backEnd.demo.Repository.EnrollmentRepository;
import com.backEnd.demo.Service.EnrollmentService;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnrollmentServiceImp implements EnrollmentService {

    @Autowired
    private EnrollmentRepository repository;

    @Override
    public List<Enrollment> list() {
        return repository.findAll();
    }

    @Override
    public Enrollment listId(int id) {
        return repository.findById(id);
    }

    @Override
    public Enrollment edit(Enrollment c) {
        return repository.save(c);
    }

    @Override
    public Enrollment delete(int id) {
        Enrollment c = repository.findById(id);
        if (c != null) {
            repository.delete(c);
        }
        return c;
    }

    @Override
    public Enrollment enroll(Course c, User u) {
        Enrollment registration = new Enrollment(u, c);
        try {
            repository.save(registration);
        } catch (Exception ex) {
            System.out.print(ex);
        }
        return registration;
    }

    @Override
    public Boolean isEnroll(User u, Course c) {
        boolean value = false;
        List<Enrollment> list = repository.findAll();
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getCourse().getPK_idCourse() == c.getPK_idCourse()
                    && Objects.equals(list.get(i).getUser().getId(), u.getId())) {
                value = true;
            }
        }
        return value;
    }

    @Override
    public List<Course> findCourses(User u) {
        List<Enrollment> list = repository.findAll();
        List<Course> myCourses = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            if (Objects.equals(list.get(i).getUser().getPK_id(), u.getId())) {
                myCourses.add(list.get(i).getCourse());
            }
        }

        return myCourses;
    }

    @Override
    public List<User> findStudents(Course c) {
        List<Enrollment> list = repository.findAll();
        List<User> students = new ArrayList<>();

        for (int i = 0; i < list.size(); i++) {
            if (Objects.equals(list.get(i).getCourse().getPK_idCourse(), c.getPK_idCourse())) {
              if(list.get(i).getUser().getType() == null){
                students.add(list.get(i).getUser());
              }
            }
        }

        return students;

    }
}
