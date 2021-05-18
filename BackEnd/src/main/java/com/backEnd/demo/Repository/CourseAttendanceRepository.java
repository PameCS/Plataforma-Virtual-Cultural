package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.CourseAttendance;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface CourseAttendanceRepository extends Repository<CourseAttendance,Integer>{
     List<CourseAttendance> findAll();

    CourseAttendance findById(int PK_idRequest);

   CourseAttendance  save(CourseAttendance  e);

    void delete(CourseAttendance  e);
    
}
