package com.backEnd.demo.Service;

import com.backEnd.demo.Model.Classroom;
import java.util.List;

public interface classService {
    List<Classroom> list();
    Classroom listId(int id);
    Classroom add(Classroom u);
    Classroom edit(Classroom u);
    Classroom delete(int id);
}
