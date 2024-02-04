package duy.nb.project3.demo.entities;

import jakarta.validation.constraints.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "student_teacher")
public class StudentTeacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "teacher_id")
    @NotNull
    private String teacherId;
    @Column(name = "student_id")
    @NotNull
    private String studentId;
    @Column(name = "course_name")
    @NotNull
    private String courseName;
    @Column(name = "semeter")
    @NotNull
    private int semeter;
    @Column(name = "group_name")
    private String group;

    public StudentTeacher() {
    }

    public StudentTeacher(String teacherId, String studentId, String courseName, int semeter, String group) {
        this.teacherId = teacherId;
        this.studentId = studentId;
        this.courseName = courseName;
        this.semeter = semeter;
        this.group = group;
    }

    public StudentTeacher(int id, String teacherId, String studentId, String courseName, int semeter, String group) {
        this.id = id;
        this.teacherId = teacherId;
        this.studentId = studentId;
        this.courseName = courseName;
        this.semeter = semeter;
        this.group = group;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(String teacherId) {
        this.teacherId = teacherId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public int getSemeter() {
        return semeter;
    }

    public void setSemeter(int semeter) {
        this.semeter = semeter;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }
}
