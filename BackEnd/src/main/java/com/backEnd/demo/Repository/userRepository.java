package com.backEnd.demo.Repository;

import com.backEnd.demo.Model.User;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<User, Long> {

    Optional<User> findByidUser(String idUser);

    Boolean existsByidUser(String idUser);

    Boolean existsByEmail(String email);

}
