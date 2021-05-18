<<<<<<< Updated upstream

package com.backEnd.demo.Service.impl;
=======
package com.backEnd.demo.Service.impl;
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Repository.FileDBRepository;
>>>>>>> Stashed changes
import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

<<<<<<< Updated upstream
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Repository.FileDBRepository;

/**
 *
 * @author david
 */
@Service
public class FileStorageServiceImp {
  @Autowired
=======
@Service
public class FileStorageServiceImp {
    @Autowired
>>>>>>> Stashed changes
  private FileDBRepository fileDBRepository;

  public FileDB store(MultipartFile file) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());

    return fileDBRepository.save(FileDB);
  }

  public FileDB getFile(String id) {
<<<<<<< Updated upstream
    return fileDBRepository.findById(id).get();
  }
  
=======
    return fileDBRepository.findByName(id);
  }
  
  
>>>>>>> Stashed changes
  public Stream<FileDB> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }
}
