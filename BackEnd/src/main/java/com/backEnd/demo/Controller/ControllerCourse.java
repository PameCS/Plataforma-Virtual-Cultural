package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.User;
import com.backEnd.demo.Service.UserService;
import com.backEnd.demo.Service.courseService;
import com.backEnd.demo.payload.response.MessageResponse;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
@RequestMapping({"/course"})

public class ControllerCourse {

    @Autowired
    courseService service;

    @Autowired
    UserService user;

    @GetMapping
    public List<Course> list() {
        return service.list();
    }
    
    @GetMapping(path = {"/listStudents/{id}"})
    public Set<User> listStudents(@PathVariable("id") int id) {
        return service.listStudents(id);
    }

    @PostMapping
    public Course add(@RequestBody Course c) {
        return service.add(c);
    }

    @GetMapping(path = {"/{id}"})
    public Course ListId(@PathVariable("id") int id) {
        return service.listId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Course Edit(@RequestBody Course c, @PathVariable("id") int id) {
        c.setPK_courseCode(id);
        return service.edit(c);
    }

    @DeleteMapping(path = {"/{id}"})
    public Course Delete(@PathVariable("id") int id) {
        return service.delete(id);
    }

    @PostMapping(path = {"/enroll/{id}"})
    public ResponseEntity<?> enroll(@RequestBody Course c, @PathVariable("id") String id) {
        if (c != null && id != null && c.getStudentQuantity() > 0) {
            User u = user.listId(id);
            if (!c.isEnroll(u)) {
                service.enroll(c, u);
            } else {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Ya está matriculado en este curso!"));
            }
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Ya no hay más cupos este curso!"));
        }
        return ResponseEntity.ok(new MessageResponse("¡Se ha matriculado con éxito!"));
    }

}
