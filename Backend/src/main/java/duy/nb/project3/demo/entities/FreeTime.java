package duy.nb.project3.demo.entities;

import jakarta.validation.constraints.NotNull;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.sql.Date;

@Entity
@Table(name = "free_time")
public class FreeTime {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "teacher_id")
    @NotNull
    private String teacherId;
    @Column
    @NotNull
    private Date day;
    @Column(name = "start_time")
    @NotNull
    private Time startTime;
    @Column(name = "end_time")
    @NotNull
    private Time endTime;
    @Column
    private int status;

    public FreeTime() {
    }

    public FreeTime(String teacherId, Date day, Time startTime, Time endTime, int status) {
        this.teacherId = teacherId;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
    }

    public FreeTime(int id, String teacherId, Date day, Time startTime, Time endTime, int status) {
        this.id = id;
        this.teacherId = teacherId;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
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

    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
