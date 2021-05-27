package com.backEnd.demo.Service;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.CourseAds;
import com.backEnd.demo.Model.FileDB;
import java.io.IOException;
import java.util.List;


public interface courseService {
    List<Course> list();
    Course listId(int id);
    Course add(Course c);
    Course edit(Course c);
    Course delete(int id);
    Course addCourseAds(Course c, CourseAds curAds);
    Course addMaterial(FileDB file, Course c) throws IOException ;
    Course deleteAd(Course c,CourseAds curAds);
}
