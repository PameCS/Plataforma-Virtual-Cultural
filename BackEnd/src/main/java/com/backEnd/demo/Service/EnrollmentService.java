package com.backEnd.demo.Service;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.Enrollment;
import com.backEnd.demo.Model.User;
import java.util.List;

public interface EnrollmentService {
    List<Enrollment> list();
    Enrollment listId(int id);
    Enrollment edit(Enrollment e);
    Enrollment delete(int id);
    Enrollment enroll(Course c, User u);
    Boolean isEnroll(User u, Course c);
    List<Course> findCourses(User u);
    List<User> findStudents(Course c);
}
