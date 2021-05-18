package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.StudentAttendance;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface StudentAttendanceRepository extends Repository<StudentAttendance,Integer>{
     List<StudentAttendance> findAll();

    StudentAttendance findById(int PK_idRequest);

   StudentAttendance  save(StudentAttendance  e);

    void delete(StudentAttendance  e);
    
}
