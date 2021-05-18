package com.backEnd.demo.Model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import org.hibernate.annotations.GenericGenerator;  
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "T_FILE")
public class FileDB {
  @Id
  @GeneratedValue(generator = "uuid")
  @GenericGenerator(name = "uuid", strategy = "uuid2")
  private String id;

  private String name;

  private String type;

  @Lob
  private byte[] data;
  
  @OneToOne(mappedBy = "fileDB")
    private Course course;


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
}

