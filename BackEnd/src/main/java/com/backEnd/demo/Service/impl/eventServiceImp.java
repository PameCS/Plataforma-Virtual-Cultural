package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Service.eventService;
import com.backEnd.demo.Repository.EventRepository;
import com.backEnd.demo.Model.Event;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class eventServiceImp implements eventService {
 
    @Autowired
    private EventRepository repository;
  
    @Override
    public List<Event> list(){
        return repository.findAll();
    }

    @Override
    public Event listId(int id) {
        return repository.findById(id);
    }

    @Override
    public Event add(Event e) {
        return repository.save(e);
    }

    @Override
    public Event edit(Event e) {
        return repository.save(e);
    }

    @Override
    public Event delete(int id) {
        Event e= repository.findById(id);
        if(e!= null)
        {
            repository.delete(e);
        }
        return e;
    }
}
