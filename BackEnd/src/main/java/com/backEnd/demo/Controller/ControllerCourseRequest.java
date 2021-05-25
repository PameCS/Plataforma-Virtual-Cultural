package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.CourseRequest;
import com.backEnd.demo.Service.CourseRequestService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/courseRequest"})
public class ControllerCourseRequest {
     @Autowired
    CourseRequestService service;
    
    @GetMapping
    public List<CourseRequest>list(){
        /*List<CourseRequest>lista;
        lista=service.list();
        for (CourseRequest elemento: lista){
            System.out.println(elemento.getPK_idRequest());
            }*/
        return service.list();
    } 
    
    @PostMapping
    public CourseRequest add(@RequestBody CourseRequest c){
        return service.add(c);
    }
    @GetMapping(path = {"/{id}"})
    public CourseRequest ListId(@PathVariable("id")int id){
        return service.listId(id);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public CourseRequest Delete(@PathVariable("id")int id){
        return service.delete(id);
    }
}
