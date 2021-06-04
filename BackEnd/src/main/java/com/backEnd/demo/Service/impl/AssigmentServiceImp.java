package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.Assigment;
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Repository.AssigmentRepository;
import com.backEnd.demo.Service.AssigmentService;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssigmentServiceImp implements AssigmentService{
    
    @Autowired
    private AssigmentRepository repository;
   
    @Override
    public List<Assigment> list() {
        return repository.findAll();
    }

    @Override
    public Assigment listId(int id) {
        return repository.findById(id);
    }

    @Override
    public Assigment add(Assigment c) {
        return repository.save(c);
    }

    @Override
    public Assigment edit(Assigment c) {
        return repository.save(c);
    }

    @Override
    public Assigment delete(int id) {
        Assigment c = repository.findById(id);
        if (c != null) {
            repository.delete(c);
        }
        return c;
    }
    
    @Override
    public Assigment addMaterial(FileDB file, Assigment a) throws IOException {

        List<FileDB> list = a.getMaterials();
        list.add(file);
        a.setMaterials(list);
        repository.save(a);
        return a;
    }
    
    
     @Override
    public Assigment addAssigmentFiles(FileDB file, Assigment a) throws IOException {
        List<FileDB> list = a.getAssigmentFiles();
        list.add(file);
        a.setAssigmentFiles(list);
        repository.save(a);
        return a;
    }
}
