package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.Event;
import com.backEnd.demo.Service.eventService;
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
@RequestMapping({"/event"})

public class ControllerEvent {
    
    @Autowired
    eventService service;
    
    @GetMapping
    public List<Event>list(){
        return service.list();
    }
    @PostMapping
    public Event add(@RequestBody Event e){
        return service.add(e);
    }
    @GetMapping(path = {"/{id}"})
    public Event ListId(@PathVariable("id")int id){
        return service.listId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Event Edit(@RequestBody Event e,@PathVariable("id")int id){
        e.setPK_idEvent(id);
        return service.edit(e);
    }
    @DeleteMapping(path = {"/{id}"})
    public Event Delete(@PathVariable("id")int id){
        return service.delete(id);
    }
}

