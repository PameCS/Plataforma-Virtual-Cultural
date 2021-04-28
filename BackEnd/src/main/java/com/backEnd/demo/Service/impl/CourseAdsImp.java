package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.CourseAds;
import com.backEnd.demo.Repository.CourseAdsRepository;
import com.backEnd.demo.Service.CourseAdsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseAdsImp implements CourseAdsService{
    @Autowired
    private CourseAdsRepository repository;
   
    @Override
    public List<CourseAds> list() {
        return repository.findAll();
    }

    @Override
    public CourseAds listId(int id) {
        return repository.findById(id);
    }

    @Override
    public CourseAds add(CourseAds c) {
        return repository.save(c);
    }

    @Override
    public CourseAds edit(CourseAds c) {
        return repository.save(c);
    }

    @Override
    public CourseAds delete(int id) {
        CourseAds c = repository.findById(id);
        if (c != null) {
            repository.delete(c);
        }
        return c;
    }
}
