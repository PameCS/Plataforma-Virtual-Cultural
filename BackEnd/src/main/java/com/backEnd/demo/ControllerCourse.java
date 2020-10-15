package com.backEnd.demo;

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
@RequestMapping({"/course"})

public class ControllerCourse {
    
    @Autowired
    courseService service;
    
    @GetMapping
    public List<Course>list(){
        return service.list();
    }
    @PostMapping
    public Course add(@RequestBody Course c){
        return service.add(c);
    }
    @GetMapping(path = {"/{id}"})
    public Course ListId(@PathVariable("id")int id){
        return service.listId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Course Edit(@RequestBody Course c,@PathVariable("id")int id){
        c.setPK_courseCode(id);
        return service.edit(c);
    }
    @DeleteMapping(path = {"/{id}"})
    public Course Delete(@PathVariable("id")int id){
        return service.delete(id);
    }
}

