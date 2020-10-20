package com.backEnd.demo;

import java.util.List;


public interface eventService {
    List<Event> list();
    Event listId(int id);
    Event add(Event e);
    Event edit(Event e);
    Event delete(int id);
}
