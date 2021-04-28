package com.backEnd.demo.Service;

import com.backEnd.demo.Model.CourseAds;
import java.util.List;

public interface CourseAdsService {
    List<CourseAds> list();
    CourseAds listId(int id);
    CourseAds add(CourseAds c);
    CourseAds edit(CourseAds c);
    CourseAds delete(int id);
}
