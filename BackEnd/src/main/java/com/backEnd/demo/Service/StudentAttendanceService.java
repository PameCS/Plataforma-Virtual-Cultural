package com.backEnd.demo.Service;

import com.backEnd.demo.Model.StudentAttendance;
import com.backEnd.demo.Model.User;
import java.util.List;

public interface StudentAttendanceService {
     List<StudentAttendance> list();

    StudentAttendance listId(int id);

    StudentAttendance add(StudentAttendance u);

    StudentAttendance delete(int id);
    
    List<StudentAttendance> createStudentAttendance(List<User> students,int idcourse);

    List<StudentAttendance> getCourseList(int id);
    
    boolean findStudent(String idStudent, int courseId);

}
