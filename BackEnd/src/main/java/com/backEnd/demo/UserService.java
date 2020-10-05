package com.backEnd.demo;

import java.util.List;

public interface UserService {
    List<User> list();
    User listId(int id);
    User add(User u);
    User edit(User u);
    User delete(int id);
}
