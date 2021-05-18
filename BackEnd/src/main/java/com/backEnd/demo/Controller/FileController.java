<<<<<<< Updated upstream

package com.backEnd.demo.Controller;
=======
package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Service.impl.FileStorageServiceImp;
import com.backEnd.demo.message.ResponseFile;
import com.backEnd.demo.message.ResponseMessage;
>>>>>>> Stashed changes
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< Updated upstream
import org.springframework.http.HttpHeaders;
=======
>>>>>>> Stashed changes
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
<<<<<<< Updated upstream
=======
import org.springframework.web.bind.annotation.RequestMapping;
>>>>>>> Stashed changes
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

<<<<<<< Updated upstream
import com.backEnd.demo.Service.impl.FileStorageServiceImp;
import com.backEnd.demo.message.ResponseFile;
import com.backEnd.demo.message.ResponseMessage;
import com.backEnd.demo.Model.FileDB;

/**
 *
 * @author david
 */
@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class FileController {
    @Autowired
=======
@Controller
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RequestMapping({"/file"})

public class FileController {
    
  @Autowired
>>>>>>> Stashed changes
  private FileStorageServiceImp storageService;

  @PostMapping("/upload")
  public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
    String message = "";
    try {
      storageService.store(file);

<<<<<<< Updated upstream
      message = "archivo subido exitosamente: " + file.getOriginalFilename();
      return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
    } catch (Exception e) {
      message = "No se pudo cargar el archivo: " + file.getOriginalFilename() + "!";
=======
      message = "Uploaded the file successfully: " + file.getOriginalFilename();
      return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
    } catch (Exception e) {
      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
>>>>>>> Stashed changes
      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
    }
  }

  @GetMapping("/files")
  public ResponseEntity<List<ResponseFile>> getListFiles() {
    List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
      String fileDownloadUri = ServletUriComponentsBuilder
          .fromCurrentContextPath()
          .path("/files/")
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

  @GetMapping("/files/{id}")
<<<<<<< Updated upstream
  public ResponseEntity<byte[]> getFile(@PathVariable String id) {
    FileDB fileDB = storageService.getFile(id);

    return ResponseEntity.ok()
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
        .body(fileDB.getData());
=======
  public ResponseEntity<ResponseFile> getFile(@PathVariable String id) {
    FileDB fileDB = storageService.getFile(id);
 String fileDownloadUri = ServletUriComponentsBuilder
          .fromCurrentContextPath()
          .path("/files/")
          .path(fileDB.getId())
          .toUriString();
 
    ResponseFile file =  new ResponseFile(
          fileDB.getName(),
          fileDownloadUri,
          fileDB.getType(),
          fileDB.getData().length);
    
     return ResponseEntity.status(HttpStatus.OK).body(file);
>>>>>>> Stashed changes
  }
}
