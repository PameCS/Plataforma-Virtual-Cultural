package com.backEnd.demo.Service.impl;
import java.io.IOException;
import java.util.stream.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import com.backEnd.demo.Model.FileDB;
import com.backEnd.demo.Repository.FileDBRepository;


@Service
public class FileStorageServiceImp {
    
  @Autowired
  private FileDBRepository fileDBRepository;

  public FileDB store(MultipartFile file) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());

    return fileDBRepository.save(FileDB);
  }

  public FileDB getFile(String id) {

    return fileDBRepository.findByName(id);
  }
  
    public Stream<FileDB> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }
}
