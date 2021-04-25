package com.backEnd.demo.Service;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.User;
import java.util.List;
import java.util.Set;

public interface UserService {
    List<User> list();
    User listId(String id);
    User add(User u);
    User edit(User u);
    User delete(String id);
    List<User> listProfessors();
    Set<Course> listMyCourses(String id);
}
