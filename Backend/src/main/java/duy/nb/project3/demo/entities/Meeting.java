package duy.nb.project3.demo.entities;

import jakarta.validation.constraints.NotNull;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.sql.Date;

@Entity
@Table
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "teacher_id")
    @NotNull
    private String teacherId;
    @Column(name = "student_id")
    @NotNull
    private String studentId;
    @Column(name = "meeting_date")
    @NotNull
    private Date meetingDate;
    @Column(name = "start_time")
    @NotNull
    private Time startTime;
    @Column(name = "end_time")
    @NotNull
    private Time endTime;
    @Column(name = "free_time_id")
    @NotNull
    private int freeTimeId;
    @Column(name = "student_note")
    @NotNull
    private String studentNote;
    @Column(name = "teacher_note")
    @NotNull
    private String teacherNote;

    public Meeting() {
    }

    public Meeting(String teacherId, String studentId, Date meetingDate, Time startTime, Time endTime, int freeTimeId, String studentNote, String teacherNote) {
        this.teacherId = teacherId;
        this.studentId = studentId;
        this.meetingDate = meetingDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.freeTimeId = freeTimeId;
        this.studentNote = studentNote;
        this.teacherNote = teacherNote;
    }

    public Meeting(int id, String teacherId, String studentId, Date meetingDate, Time startTime, Time endTime, int freeTimeId, String studentNote, String teacherNote) {
        this.id = id;
        this.teacherId = teacherId;
        this.studentId = studentId;
        this.meetingDate = meetingDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.freeTimeId = freeTimeId;
        this.studentNote = studentNote;
        this.teacherNote = teacherNote;
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

    public Date getMeetingDate() {
        return meetingDate;
    }

    public void setMeetingDate(Date meetingDate) {
        this.meetingDate = meetingDate;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public int getFreeTimeId() {
        return freeTimeId;
    }

    public void setFreeTimeId(int freeTimeId) {
        this.freeTimeId = freeTimeId;
    }

    public String getStudentNote() {
        return studentNote;
    }

    public void setStudentNote(String studentNote) {
        this.studentNote = studentNote;
    }

    public String getTeacherNote() {
        return teacherNote;
    }

    public void setTeacherNote(String teacherNote) {
        this.teacherNote = teacherNote;
    }

    @Override
    public String toString() {
        return "Meeting{" +
                "teacherId='" + teacherId + '\'' +
                ", studentId='" + studentId + '\'' +
                ", meetingDate=" + meetingDate +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", freeTimeId=" + freeTimeId +
                ", studentNote='" + studentNote + '\'' +
                ", teacherNote='" + teacherNote + '\'' +
                '}';
    }
}
