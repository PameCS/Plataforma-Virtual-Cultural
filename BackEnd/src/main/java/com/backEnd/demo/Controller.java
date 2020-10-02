package com.backEnd.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/users"})
public class Controller {
  
    @Autowired
    UserService service;
    
    @GetMapping
    public List<User>list(){
        return service.list();
    }
    @PostMapping
    public User add(@RequestBody User u){
        return service.add(u);
    }
}
