package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.Assigment;
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Service.AssigmentService;
import com.backEnd.demo.Service.impl.FileStorageServiceImp;
import com.backEnd.demo.message.ResponseMessage;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/assigment"})
public class AssigmentController {
  
    
    @Autowired
    AssigmentService service;
    
    @Autowired
    FileStorageServiceImp storageService;
    
    @GetMapping
    public List<Assigment>list(){
        return service.list();
    } 
    
    
    @GetMapping(path = {"/{id}"})
    public Assigment ListId(@PathVariable("id")int id){
        return service.listId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Assigment Edit(@RequestBody Assigment c,@PathVariable("id")int id){
        c.setPK_idAssigment(id);
        return service.edit(c); 
    }
    @DeleteMapping(path = {"/{id}"})
    public Assigment Delete(@PathVariable("id")int id){
        return service.delete(id);
    }
    
    
    @PostMapping("/uploadMaterial/{id}")
    public ResponseEntity<ResponseMessage> uploadMaterial(@RequestParam("file") MultipartFile file, @PathVariable("id") int id) {
        String message = "";
        try {
            Assigment assigment = service.listId(id);
            storageService.store(file);
            FileDB File = storageService.getFile(file.getOriginalFilename());
            service.addMaterial(File, assigment);
            message = "El archivo se subió con éxito: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "No se pudo subir el archivo: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
    
     @PostMapping("/uploadAssigmentFile/{id}")
    public ResponseEntity<ResponseMessage> uploadAssigmentFile(@RequestParam("file") MultipartFile file, @PathVariable("id") int id) {
        String message = "";
        try {
            Assigment assigment = service.listId(id);
            storageService.store(file);
            FileDB File = storageService.getFile(file.getOriginalFilename());
            service.addAssigmentFiles(File, assigment);
            message = "El archivo se subió con éxito: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "No se pudo subir el archivo: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
}
