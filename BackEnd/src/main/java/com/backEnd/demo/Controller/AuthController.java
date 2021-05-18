package com.backEnd.demo.Controller;

import com.backEnd.demo.Model.ERole;
import com.backEnd.demo.Model.Role;
import com.backEnd.demo.Model.User;
import com.backEnd.demo.Repository.RoleRepository;
import com.backEnd.demo.Repository.userRepository;
import com.backEnd.demo.payload.request.LoginRequest;
import com.backEnd.demo.payload.request.SignupRequest;
import com.backEnd.demo.payload.response.JwtResponse;
import com.backEnd.demo.payload.response.MessageResponse;
import com.backEnd.demo.security.jwt.JwtUtils;
import com.backEnd.demo.security.services.UserDetailsImpl;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api/auth"})
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    userRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping(path = {"/signin"})
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    @PostMapping(path = {"/signup"})
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByidUser(signUpRequest.getIdUser())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Esta identificación ya existe!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Este correo ya esta en uso!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getIdUser(), encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getName(), signUpRequest.getLastName(), signUpRequest.getType(),
                signUpRequest.getEmail(), signUpRequest.getBornDate(), signUpRequest.getTel(), signUpRequest.getGender());
    
        Set<Role> roles = new HashSet<>();

        if (user.getType() == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: No se encontró el rol"));
            roles.add(userRole);
        } else {
            if (user.getType().equals("Administrador")) {
                Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                        .orElseThrow(() -> new RuntimeException("Error: No se encontró el rol"));
                roles.add(adminRole);
            } else {
                if (user.getType().equals("Super-administrador")) {
                    Role superAdminRole = roleRepository.findByName(ERole.ROLE_SUPER_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error:No se encontró el rol"));
                    roles.add(superAdminRole);

                } else if (user.getType().equals("Profesor")) {
                    Role superAdminRole = roleRepository.findByName(ERole.ROLE_PROFESSOR)
                            .orElseThrow(() -> new RuntimeException("Error:No se encontró el rol"));
                    roles.add(superAdminRole);

                } else {
                    Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: No se encontró el rol"));
                    roles.add(userRole);
                }
            }
        }
        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("Usuario registrado correctamente!"));
    }
}
