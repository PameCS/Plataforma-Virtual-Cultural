package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Service.courseService;
import com.backEnd.demo.Repository.courseRepository;
import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.CourseAds;
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Service.UserService;
import java.io.IOException;
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

    @Autowired
    FileStorageServiceImp fileService;

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
    public Course addCourseAds(Course c, CourseAds curAds) {
        try {
            Set<CourseAds> coursesAds = c.getAds();
            coursesAds.add(curAds);
            c.setAds(coursesAds);
            courseService.edit(c);

        } catch (Exception ex) {
            System.out.print(ex);
        }
        return c;
    }

     @Override
    public Course addMaterial(FileDB file, Course c) throws IOException {

        Set<FileDB> list = c.getMaterials();
        list.add(file);
        c.setMaterials(list);
        courseService.edit(c);
        return c;
    }
}
