package com.backEnd.demo.Model;

<<<<<<< Updated upstream
/**
 * @author david
 */
=======
>>>>>>> Stashed changes
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
<<<<<<< Updated upstream
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;  

@Entity
@Table(name = "T_FILES")
public class FileDB {
    @Id
=======
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "T_FILE")
public class FileDB {
  @Id
>>>>>>> Stashed changes
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  private String id;

  private String name;

  private String type;

  @Lob
  private byte[] data;
<<<<<<< Updated upstream
=======
  
  @OneToOne(mappedBy = "fileDB")
    private Course course;
>>>>>>> Stashed changes

  public FileDB() {
  }

  public FileDB(String name, String type, byte[] data) {
    this.name = name;
    this.type = type;
    this.data = data;
  }

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public byte[] getData() {
    return data;
  }

  public void setData(byte[] data) {
    this.data = data;
  }
<<<<<<< Updated upstream
}
=======

}
>>>>>>> Stashed changes
