package com.backEnd.demo.Service.impl;

import com.backEnd.demo.Model.StudentAttendance;
import com.backEnd.demo.Model.User;
import com.backEnd.demo.Repository.StudentAttendanceRepository;
import com.backEnd.demo.Service.StudentAttendanceService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentAttendanceServiceImp implements StudentAttendanceService {

    @Autowired
    private StudentAttendanceRepository repository;

    @Override
    public List<StudentAttendance> list() {
        return repository.findAll();
    }

    @Override
    public StudentAttendance listId(int id) {
        return repository.findById(id);
    }

    @Override
    public StudentAttendance add(StudentAttendance c) {
        return repository.save(c);
    }

    @Override
    public StudentAttendance delete(int id) {
        StudentAttendance c = repository.findById(id);
        if (c != null) {
            repository.delete(c);
        }
        return c;
    }


    @Override
    public List<StudentAttendance> createStudentAttendance(List<User> students, int idcourse) {

        List<StudentAttendance> list = new ArrayList<>();
        for (int i = 0; i < students.size(); i++) {
            list.add(new StudentAttendance(students.get(i).getUsername(), students.get(i).getName() +" " +students.get(i).getLastName()));
        }
        return list;
    }
}
