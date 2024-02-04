package duy.nb.project3.demo.service;

import duy.nb.project3.demo.entities.StudentTeacher;
import duy.nb.project3.demo.exception.NotFoundException;
import duy.nb.project3.demo.repository.StudentTeacherRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class StudentTeacherService {
    private StudentTeacherRepository studentTeacherRepository;

    public StudentTeacherService(StudentTeacherRepository studentTeacherRepository) {
        this.studentTeacherRepository = studentTeacherRepository;
    }

    public StudentTeacher update(int id, String group){
        StudentTeacher studentTeacher = studentTeacherRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Not found"));
        studentTeacher.setGroup(group);
        return studentTeacherRepository.save(studentTeacher);
    }
    public List<Map<String,Object>> getTeacherOfStudent(String studentId, int semeter){
        return studentTeacherRepository.getTeacherOfStudent(studentId,semeter);
    }
    public List<Map<String,Object>> getStudentOfTeacher(String teacherId, int semeter){
        return studentTeacherRepository.getStudentOfTeacher(teacherId,semeter);
    }
}
