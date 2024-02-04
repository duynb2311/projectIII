package duy.nb.project3.demo.service;

import duy.nb.project3.demo.entities.Teacher;
import duy.nb.project3.demo.entities.User;
import duy.nb.project3.demo.repository.TeacherRepository;
import duy.nb.project3.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {
    private TeacherRepository teacherRepository;
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public TeacherService(TeacherRepository teacherRepository, UserRepository userRepository) {
        this.teacherRepository = teacherRepository;
        this.userRepository = userRepository;
    }

    public Teacher createTeacher(Teacher teacher){
        User user = new User();
        user.setUsername(teacher.getEmail());
        user.setPassword(passwordEncoder.encode(teacher.getId()));
        user.setRole("TEACHER");
        userRepository.save(user);
        return teacherRepository.save(teacher);
    }

    public Teacher getTeacherById(String id){
        return teacherRepository.getById(id);
    }
}
