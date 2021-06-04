package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.CourseAttendance;
import com.backEnd.demo.Model.StudentAttendance;
import com.backEnd.demo.Service.CourseAttendanceService;
import com.backEnd.demo.Service.EnrollmentService;
import com.backEnd.demo.Service.StudentAttendanceService;
import com.backEnd.demo.Service.courseService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/courseAttendance"})
public class ControllerCourseAttendance {
    
    @Autowired
    CourseAttendanceService courseAttendanceService;
    
    @Autowired
    StudentAttendanceService StudentService;
     
    @Autowired
    EnrollmentService enrollmentService;
    
    @Autowired
    courseService courseService;
    
    
    @GetMapping
    public List<CourseAttendance>list(){
        return courseAttendanceService.list();
    } 
    
    @PostMapping(path = {"/addCourseAttendance/{id}"})
    public CourseAttendance add(@RequestBody List<StudentAttendance> list,@PathVariable("id")int id){
        CourseAttendance c = new CourseAttendance(new Date());
        c.setAttendanceList(list);
        Course course = courseService.listId(id);
        courseAttendanceService.add(c);
        List<CourseAttendance> l = course.getAttendance();
        l.add(c);
        course.setAttendance(l);
        courseService.edit(course);
        return c;
    }
    
    @GetMapping(path = {"/{id}"})
    public CourseAttendance ListId(@PathVariable("id")int id){
        return courseAttendanceService.listId(id);
    }
    
     @GetMapping(path = {"/attendanceList/{id}"})
    public List<StudentAttendance> attendanceList(@PathVariable("id")int id){  
        Course c = courseService.listId(id);
        return StudentService.createStudentAttendance(enrollmentService.findStudents(c),id);
    }
    
    @PutMapping(path = {"/{id}"})
    public CourseAttendance Edit(@RequestBody CourseAttendance c,@PathVariable("id")int id){
        c.setId(id);
        return courseAttendanceService.edit(c); 
    }
    
    @DeleteMapping(path = {"/{id}"})
    public CourseAttendance Delete(@PathVariable("id")int id){
        return courseAttendanceService.delete(id);
    }
}
