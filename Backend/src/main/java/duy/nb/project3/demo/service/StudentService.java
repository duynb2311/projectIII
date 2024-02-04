package duy.nb.project3.demo.service;

import duy.nb.project3.demo.entities.Student;
import duy.nb.project3.demo.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student getByid(String id){
        return studentRepository.getById(id);
    }
}
