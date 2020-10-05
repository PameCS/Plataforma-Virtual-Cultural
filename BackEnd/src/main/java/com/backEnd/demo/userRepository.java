package com.backEnd.demo;

import java.util.List;
import org.springframework.data.repository.Repository;


public interface userRepository extends Repository<User,Integer>{
    List<User>findAll();
    User findById(int PK_idUser);
    User save(User u);
    void delete(User u);
}
