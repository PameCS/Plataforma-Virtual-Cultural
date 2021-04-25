package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.CourseRequest;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface CourseRequestRepository extends Repository<CourseRequest,Integer>{
    List<CourseRequest> findAll();

    CourseRequest findById(int PK_idRequest);

    CourseRequest  save(CourseRequest  e);

    void delete(CourseRequest  e);
}
