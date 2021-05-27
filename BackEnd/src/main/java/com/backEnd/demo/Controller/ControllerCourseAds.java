package com.backEnd.demo.Controller;


import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.CourseAds;
import com.backEnd.demo.Service.CourseAdsService;
import com.backEnd.demo.Service.courseService;
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
@RequestMapping({"/courseAds"})
public class ControllerCourseAds {
    @Autowired
    CourseAdsService service;
    
    @Autowired
    courseService CourseService;
    
    @GetMapping
    public List<CourseAds>list(){
        return service.list();
    }
    @PostMapping(path = {"/{id}"})
    public CourseAds add(@RequestBody CourseAds e,@PathVariable("id")int id){
        Course course = CourseService.listId(id);
        return service.add(e);
    }
    @GetMapping(path = {"/{id}"})
    public CourseAds ListId(@PathVariable("id")int id){
        return service.listId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public CourseAds Edit(@RequestBody CourseAds e,@PathVariable("id")int id){
        e.setPK_id(id);
        return service.edit(e);
    }
    @DeleteMapping(path = {"/{id}"})
    public CourseAds Delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
}
