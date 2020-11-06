package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.Event;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface EventRepository extends Repository<Event,Integer>{
     List<Event>findAll();
     Event findById(int PK_idEvent);
     Event save(Event e);
     void delete(Event e);
}