package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.CourseAds;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface CourseAdsRepository extends Repository<CourseAds,Integer>{

    List<CourseAds> findAll();

    CourseAds findById(int PK_id);

    CourseAds save(CourseAds e);

    void delete(CourseAds e);
}
