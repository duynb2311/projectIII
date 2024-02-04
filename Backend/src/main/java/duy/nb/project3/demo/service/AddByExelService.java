package duy.nb.project3.demo.service;

import duy.nb.project3.demo.dto.AddByExelResponse;
import duy.nb.project3.demo.dto.ExelInputDto;
import duy.nb.project3.demo.entities.Student;
import duy.nb.project3.demo.entities.StudentTeacher;
import duy.nb.project3.demo.entities.User;
import duy.nb.project3.demo.repository.StudentRepository;
import duy.nb.project3.demo.repository.StudentTeacherRepository;
import duy.nb.project3.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AddByExelService {
    private StudentRepository studentRepository;
    private StudentTeacherRepository studentTeacherRepository;
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public AddByExelService(StudentRepository studentRepository, StudentTeacherRepository studentTeacherRepository, UserRepository userRepository) {
        this.studentRepository = studentRepository;
        this.studentTeacherRepository = studentTeacherRepository;
        this.userRepository = userRepository;
    }
    public AddByExelResponse addByExel(String teacherId, int semeter, ExelInputDto exelInputDto){
        System.out.println(exelInputDto.getStudentId());
        Student findStudent= studentRepository.getById(exelInputDto.getStudentId());
        StudentTeacher studentTeacher = new StudentTeacher();
        if(findStudent== null){
            Student student = new Student();
            student.setId(exelInputDto.getStudentId());
            student.setName(exelInputDto.getStudentName());
            student.setEmail(exelInputDto.getEmail());
            Student savedStudent = studentRepository.save(student);
            User user = new User();
            user.setUsername(exelInputDto.getStudentId());
            user.setPassword(passwordEncoder.encode(exelInputDto.getStudentId()));
            user.setRole("STUDENT");
            userRepository.save(user);
        }
        studentTeacher.setTeacherId(teacherId);
        studentTeacher.setStudentId(exelInputDto.getStudentId());
        studentTeacher.setSemeter(semeter);
        studentTeacher.setCourseName(exelInputDto.getName());
        StudentTeacher savedStudentTeacher = studentTeacherRepository.save(studentTeacher);
        AddByExelResponse response = new AddByExelResponse();
        response.setMessage("Success");
        response.setStudentTeacher(savedStudentTeacher);
        return response;
    }
}
