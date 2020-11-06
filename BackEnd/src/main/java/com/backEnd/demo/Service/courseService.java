package com.backEnd.demo.Service;

import com.backEnd.demo.Model.Course;
import java.util.List;


public interface courseService {
    List<Course> list();
    Course listId(int id);
    Course add(Course c);
    Course edit(Course c);
    Course delete(int id);
}
