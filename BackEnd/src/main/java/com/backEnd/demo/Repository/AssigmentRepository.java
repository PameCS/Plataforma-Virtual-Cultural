package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.Assigment;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface AssigmentRepository extends Repository<Assigment,Integer>{

    List<Assigment> findAll();

    Assigment findById(int PK_idAssigment);

    Assigment save(Assigment e);

    void delete(Assigment e);
}
