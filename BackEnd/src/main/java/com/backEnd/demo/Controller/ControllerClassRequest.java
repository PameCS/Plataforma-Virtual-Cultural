package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.ClassRequest;
import com.backEnd.demo.Service.ClassRequestService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/classroomRequest"})
public class ControllerClassRequest {
     @Autowired
    ClassRequestService service;
    
    @GetMapping(path = {"/{username}"})
    public List<ClassRequest>list(@PathVariable("username") String username){ //Listo todas las solicitudes pendientes
        List<ClassRequest> listaPendientes=service.list(); 
        List<ClassRequest> listaPendientesaux= new ArrayList();
        System.out.print(username);
        for(int i=0; i< listaPendientes.size();i++)
        {      if(listaPendientes.get(i).getStatus().equals("Pendiente") && 
                listaPendientes.get(i).getUserid().equals(username))
                {
                    listaPendientesaux.add(listaPendientes.get(i));
                }
        }
        return listaPendientes;
    } 
    @PostMapping
    public ClassRequest add(@RequestBody ClassRequest c){
        return service.add(c);
    }
    @GetMapping(path = {"/{id}"})
    public ClassRequest ListId(@PathVariable("id")int id){
        return service.listId(id);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public ClassRequest Delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
    @PutMapping
    public ClassRequest Edit(@RequestBody ClassRequest cr) {
        return service.edit(cr);
    }
}
