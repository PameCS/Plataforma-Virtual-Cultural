
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
