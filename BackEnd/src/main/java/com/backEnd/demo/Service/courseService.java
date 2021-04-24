package com.backEnd.demo.Service;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.User;
import java.util.List;
import java.util.Set;


public interface courseService {
    List<Course> list();
    Course listId(int id);
    Course add(Course c);
    Course edit(Course c);
    Course delete(int id);
    Course enroll(Course c, User u);
    Set<User> listStudents(int id);
}
