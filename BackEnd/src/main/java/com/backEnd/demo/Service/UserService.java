package com.backEnd.demo.Service;

import com.backEnd.demo.Model.User;
import java.util.List;

public interface UserService {
    List<User> list();
    User listId(String id);
    User add(User u);
    User edit(User u);
    User delete(String id);
    List<User> listProfessors();
}
