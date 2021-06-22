package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.ClassRequest;
import java.util.List;
import org.springframework.data.repository.Repository;
import org.springframework.data.jpa.repository.Query;

public interface ClassRequestRepository extends Repository<ClassRequest,Integer>{
    
    //@Query("select * from t_class_request where status='Pendiente'")
    List<ClassRequest> findAll();

    ClassRequest findById(int PK_idRequest);

    ClassRequest  save(ClassRequest  e);

    void delete(ClassRequest  e);
}
