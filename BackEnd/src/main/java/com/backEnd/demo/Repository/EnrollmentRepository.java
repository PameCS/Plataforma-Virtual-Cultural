package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.Enrollment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {
     List<Enrollment>findAll();
     Enrollment findById(int PK_id);
     Enrollment save(Enrollment e);
     void delete(Enrollment e);
     
}
