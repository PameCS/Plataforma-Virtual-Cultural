package com.backEnd.demo.Service;

import com.backEnd.demo.Model.Assigment;
import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.FileDB;
import java.io.IOException;
import java.util.List;

public interface AssigmentService {
     List<Assigment> list();

    Assigment listId(int id);

    Assigment add(Assigment u);

    Assigment edit(Assigment c);
    
    Assigment delete(int id);
    
    Assigment addMaterial(FileDB file, Assigment a) throws IOException;
    
    Assigment addAssigmentFiles(FileDB file, Assigment a) throws IOException;
}
