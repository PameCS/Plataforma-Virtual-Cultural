package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.Classroom;
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Service.classService;
import com.backEnd.demo.Service.impl.FileStorageServiceImp;
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
@RequestMapping({"/classroom"})
public class ControllerClass {
    
    @Autowired
    classService service;
    
     @Autowired
    FileStorageServiceImp storageService;
    
    @GetMapping
    public List<Classroom>list(){
        return service.list();
    } 
    @PostMapping(path = {"/{id}"})
    public Classroom add(@RequestBody Classroom c, @PathVariable("id") String id){
         FileDB fileDB = storageService.getFileByName(id);
        c.setImage(fileDB);
        return service.add(c);
    }
    @GetMapping(path = {"/{id}"})
    public Classroom ListId(@PathVariable("id")int id){
        return service.listId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Classroom Edit(@RequestBody Classroom c,@PathVariable("id")int id){
        c.setPK_idClass(id);
        return service.edit(c); 
    }
    @DeleteMapping(path = {"/{id}"})
    public Classroom Delete(@PathVariable("id")int id){
        return service.delete(id);
    }
}
