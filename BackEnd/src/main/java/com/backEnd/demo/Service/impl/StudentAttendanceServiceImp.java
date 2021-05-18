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
    public List<StudentAttendance> getCourseList(int id) {
        List<StudentAttendance> newlist = new ArrayList<>();
        List<StudentAttendance> list = repository.findAll();     
        
        if(!list.isEmpty()){
            list.stream().filter(list1 -> (list1.getCourseId() == id)).forEachOrdered(list1 -> {
                newlist.add(list1);
            });
        }
        return newlist;
    }

    @Override
    public boolean findStudent(String idStudent, int courseId) {
        boolean value = false;
        List<StudentAttendance> list = getCourseList(courseId);
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getCourseId() == courseId && list.get(i).getStudentId().equals(idStudent)) {
                value = true;
            }
        }
        return value;
    }

    @Override
    public List<StudentAttendance> createStudentAttendance(List<User> students, int idcourse) {

        List<StudentAttendance> list = getCourseList(idcourse);
        for (int i = 0; i < students.size(); i++) {       
            if(list.isEmpty() || !findStudent(list.get(i).getStudentId(), idcourse) ){
                    add(new StudentAttendance(students.get(i).getUsername(), students.get(i).getName() + students.get(i).getLastName(), idcourse));
                    list.add(new StudentAttendance(students.get(i).getUsername(), students.get(i).getName() + students.get(i).getLastName(), idcourse));
            }
                }
        
        return list;
    }
}
