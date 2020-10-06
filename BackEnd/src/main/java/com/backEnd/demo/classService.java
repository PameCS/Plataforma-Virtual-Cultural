package com.backEnd.demo;

import java.util.List;

public interface classService {
    List<Classroom> list();
    Classroom listId(int id);
    Classroom add(Classroom u);
    Classroom edit(Classroom u);
    Classroom delete(int id);
}
