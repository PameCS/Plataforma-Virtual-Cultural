package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.ERole;
import com.backEnd.demo.Model.Role;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}

