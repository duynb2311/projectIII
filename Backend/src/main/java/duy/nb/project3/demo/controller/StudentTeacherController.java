package duy.nb.project3.demo.controller;

import duy.nb.project3.demo.entities.StudentTeacher;
import duy.nb.project3.demo.service.StudentTeacherService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/student_teacher")
public class StudentTeacherController {
    private StudentTeacherService studentTeacherService;

    public StudentTeacherController(StudentTeacherService studentTeacherService) {
        this.studentTeacherService = studentTeacherService;
    }

    @PutMapping("/{id}")
    public StudentTeacher update(@PathVariable int id, @RequestParam(value = "group", defaultValue = "")String group){
        return studentTeacherService.update(id, group);
    }

    @GetMapping("/student/{studentId}")
    public List<Map<String,Object>> getTeacherOfStudent(@PathVariable String studentId, @RequestParam(value = "semeter", defaultValue = "0") int semeter){
        return studentTeacherService.getTeacherOfStudent(studentId,semeter);
    }
    @GetMapping("/teacher/{teacherId}")
    public List<Map<String,Object>> getStudentOfTeacher(@PathVariable String teacherId, @RequestParam(value = "semeter", defaultValue = "0") int semeter){
        return studentTeacherService.getStudentOfTeacher(teacherId,semeter);
    }
}
