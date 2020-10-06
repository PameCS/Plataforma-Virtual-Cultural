package com.backEnd.demo;

import java.util.List;
import org.springframework.data.repository.Repository;

public interface ClassroomRepository extends Repository<Classroom,Integer>{
     List<Classroom>findAll();
     Classroom findById(int PK_idClass);
     Classroom save(Classroom c);
     void delete(Classroom c);
}
