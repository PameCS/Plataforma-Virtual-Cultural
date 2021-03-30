package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.User;
import com.backEnd.demo.Service.UserService;
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

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/users"})
public class ControllerUser {

    @Autowired
    UserService service;

    @GetMapping
    public List<User> list() {
        return service.list();
    }

    @PostMapping
    public User add(@RequestBody User u) {
        return service.add(u);
    }

    @GetMapping(path = {"/{id}"})
    public User ListId(@PathVariable("id") String id) {
        return service.listId(id);
    }

    @PutMapping(path = {"/{id}"})
    public User Edit(@RequestBody User u, @PathVariable("id") String id) {
        u.setPK_idUser(id);
        return service.edit(u);
    }

    @DeleteMapping(path = {"/{id}"})
    public User Delete(@PathVariable("id") String id) {
        return service.delete(id);
    }
}
