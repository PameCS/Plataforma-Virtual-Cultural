<<<<<<< Updated upstream

package com.backEnd.demo.message;

/**
 *
 * @author david
 */
public class ResponseFile {
  private String name;
=======
package com.backEnd.demo.message;

public class ResponseFile {
 private String name;
>>>>>>> Stashed changes
  private String url;
  private String type;
  private long size;

  public ResponseFile(String name, String url, String type, long size) {
    this.name = name;
    this.url = url;
    this.type = type;
    this.size = size;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public long getSize() {
    return size;
  }

  public void setSize(long size) {
    this.size = size;
<<<<<<< Updated upstream
  }
=======
  }    
>>>>>>> Stashed changes
}
