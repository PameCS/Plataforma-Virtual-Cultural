package com.backEnd.demo.Service;

import com.backEnd.demo.Model.CourseRequest;
import java.util.List;

public interface CourseRequestService {
    
    List<CourseRequest> list();

    CourseRequest listId(int id);

    CourseRequest add(CourseRequest u);

    CourseRequest delete(int id);
}
