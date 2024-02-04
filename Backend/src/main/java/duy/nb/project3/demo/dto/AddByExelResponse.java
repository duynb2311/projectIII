package duy.nb.project3.demo.dto;

import duy.nb.project3.demo.entities.StudentTeacher;

public class AddByExelResponse {
    private String message;
    private StudentTeacher studentTeacher;

    public AddByExelResponse() {
    }

    public AddByExelResponse(String message, StudentTeacher studentTeacher) {
        this.message = message;
        this.studentTeacher = studentTeacher;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public StudentTeacher getStudentTeacher() {
        return studentTeacher;
    }

    public void setStudentTeacher(StudentTeacher studentTeacher) {
        this.studentTeacher = studentTeacher;
    }
}
