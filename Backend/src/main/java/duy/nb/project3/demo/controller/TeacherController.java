package duy.nb.project3.demo.controller;

import duy.nb.project3.demo.entities.Teacher;
import duy.nb.project3.demo.service.TeacherService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/teacher")
public class TeacherController {
    private TeacherService teacherService;

    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @PostMapping
    public Teacher createTeacher(@RequestBody Teacher teacher){
        return teacherService.createTeacher(teacher);
    }

    @GetMapping("/{id}")
    public Teacher getById(@PathVariable String id){
        return teacherService.getTeacherById(id);
    }
}
