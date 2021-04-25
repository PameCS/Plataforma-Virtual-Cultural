package com.backEnd.demo.Service;

import com.backEnd.demo.Model.ClassRequest;
import java.util.List;

public interface ClassRequestService {

    List<ClassRequest> list();

    ClassRequest listId(int id);

    ClassRequest add(ClassRequest u);

    ClassRequest delete(int id);
}
