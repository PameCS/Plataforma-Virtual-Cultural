package com.backEnd.demo.Service;

import com.backEnd.demo.Model.CourseAttendance;
import java.util.List;

public interface CourseAttendanceService {
    List<CourseAttendance> list();

    CourseAttendance listId(int id);
    CourseAttendance edit(CourseAttendance u);
    CourseAttendance add(CourseAttendance u);

    CourseAttendance delete(int id);
}
