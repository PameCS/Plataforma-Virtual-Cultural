<<<<<<< Updated upstream

package com.backEnd.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backEnd.demo.Model.FileDB;
/**
 *
 * @author david
 */
public interface FileDBRepository extends JpaRepository<FileDB, String> {
    
 
}
=======
package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.FileDB;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {
     List<FileDB>findAll();
     FileDB findById(int id);
     FileDB findByName(String id);
     FileDB save(FileDB e);
     void delete(FileDB e);
}

>>>>>>> Stashed changes
