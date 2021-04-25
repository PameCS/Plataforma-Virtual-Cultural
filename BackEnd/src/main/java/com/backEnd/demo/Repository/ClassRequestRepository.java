package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.ClassRequest;
import java.util.List;
import org.springframework.data.repository.Repository;

public interface ClassRequestRepository extends Repository<ClassRequest,Integer>{

    List<ClassRequest> findAll();

    ClassRequest findById(int PK_idRequest);

    ClassRequest  save(ClassRequest  e);

    void delete(ClassRequest  e);
}
