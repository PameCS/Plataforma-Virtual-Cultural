package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.Assigment;
import com.backEnd.demo.Model.Course;
import com.backEnd.demo.Model.CourseAds;
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Model.User;
import com.backEnd.demo.Service.AssigmentService;
import com.backEnd.demo.Service.CourseAdsService;
import com.backEnd.demo.Service.EnrollmentService;
import com.backEnd.demo.Service.UserService;
import com.backEnd.demo.Service.courseService;
import com.backEnd.demo.Service.impl.ExportServiceImp;
import com.backEnd.demo.Service.impl.FileStorageServiceImp;
import com.backEnd.demo.message.ResponseFile;
import com.backEnd.demo.message.ResponseMessage;
import com.backEnd.demo.payload.response.MessageResponse;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/course"})

public class ControllerCourse {

    @Autowired
    courseService service;

    @Autowired
    CourseAdsService courseAdsservice;
    
     @Autowired
    AssigmentService assigmentAdsservice;

    @Autowired
    UserService user;

    @Autowired
    EnrollmentService enrollService;

    @Autowired
    FileStorageServiceImp storageService;

    @Autowired
    ExportServiceImp exportService;

    @GetMapping
    public List<Course> list() {
        return service.list();
    }

    @GetMapping(path = {"/listStudents/{id}"})
    public List<User> listStudents(@PathVariable("id") int id) {
        Course c = service.listId(id);
        return enrollService.findStudents(c);
    }

    @PostMapping("/uploadMaterial/{id}")
    public ResponseEntity<ResponseMessage> uploadMaterial(@RequestParam("file") MultipartFile file, @PathVariable("id") int id) {
        String message = "";
        try {
            Course c = service.listId(id);
            storageService.store(file);
            FileDB File = storageService.getFile(file.getOriginalFilename());
            service.addMaterial(File, c);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
    
  @GetMapping("/materialList/{id}")
  public ResponseEntity<List<ResponseFile>> getListFiles(@PathVariable("id") int id) {
      Course c = service.listId(id);
    List<ResponseFile> files = c.getMaterials().stream().map(dbFile -> {
      String fileDownloadUri = ServletUriComponentsBuilder
          .fromCurrentContextPath()
          .path("/materialList/")
          .path(dbFile.getId())
          .toUriString();

      return new ResponseFile(
          dbFile.getName(),
          fileDownloadUri,
          dbFile.getType(),
          dbFile.getData().length);
    }).collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(files);
  }


    @GetMapping(path = {"/image/{id}"})
    public ResponseEntity<ResponseFile> getImage(@PathVariable("id") int id) {
        Course c = service.listId(id);
        FileDB fileDB = c.getImage();
        String fileDownloadUri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/files/")
                .path(fileDB.getId())
                .toUriString();

        ResponseFile file = new ResponseFile(
                fileDB.getName(),
                fileDownloadUri,
                fileDB.getType(),
                fileDB.getData().length);

        return ResponseEntity.status(HttpStatus.OK).body(file);
    }

    @PostMapping(path = {"/{id}"})
    public Course add(@RequestBody Course c, @PathVariable("id") String id) {
        FileDB fileDB = storageService.getFile(id);
        c.setImage(fileDB);
        return service.add(c);
    }

    @GetMapping(path = {"/{id}"})
    public Course ListId(@PathVariable("id") int id) {
        return service.listId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Course Edit(@RequestBody Course c, @PathVariable("id") int id) {
        c.setPK_idCourse(id);
        return service.edit(c);
    }

    @DeleteMapping(path = {"/{id}"})
    public Course Delete(@PathVariable("id") int id) {
        return service.delete(id);
    }
    
   
    @PostMapping(path = {"/enroll/{id}"})
    public ResponseEntity<?> enroll(@RequestBody Course c, @PathVariable("id") String id) {
        if (c != null && id != null && c.getStudentQuantity() > 0) {
            User u = user.listId(id);
            if (!enrollService.isEnroll(u, c)) {
                enrollService.enroll(c, u);

            } else {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: Ya está matriculado en este curso!"));
            }
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Ya no hay más cupos este curso!"));
        }
        return ResponseEntity.ok(new MessageResponse("¡Se ha matriculado con éxito!"));
    }

    @PostMapping(path = {"/CourseAds/{id}"})
    public ResponseEntity<?> addCourseAds(@RequestBody CourseAds c, @PathVariable("id") int id) {
        if (c != null) {
            courseAdsservice.add(c);
            Course course = service.listId(id);
            service.addCourseAds(course, c);
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: No se pudo agregar el aviso correctamente!"));
        }
        return ResponseEntity.ok(new MessageResponse("¡Se ha agregado un nuevo aviso!"));
    }
    
     @PostMapping(path = {"/Assigment/{id}"})
    public ResponseEntity<?> addAssigment(@RequestBody Assigment c, @PathVariable("id") int id) {
        if (c != null) {
            assigmentAdsservice.add(c);
            Course course = service.listId(id);
            service.addAssigment(course, c);
        } else {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: No se pudo agregar la entrega correctamente!"));
        }
        return ResponseEntity.ok(new MessageResponse("¡Se ha agregado una nueva entrega!"));
    }

    @GetMapping(path = "/exportStudentClass/excel/{id}")
    public ResponseEntity<InputStreamResource> exportStudentList(@PathVariable("id") int id) throws IOException {

        Course c = service.listId(id);
        List<User> list = enrollService.findStudents(c);
        ByteArrayInputStream bais = exportService.productExcelReport(list);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename-product.xlsx");
        return ResponseEntity.ok().headers(headers).body(new InputStreamResource(bais));
    }

}
