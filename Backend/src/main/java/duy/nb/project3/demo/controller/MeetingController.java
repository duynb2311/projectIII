package duy.nb.project3.demo.controller;

import duy.nb.project3.demo.entities.Meeting;
import duy.nb.project3.demo.service.MeetingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/meeting")
public class MeetingController {
    private MeetingService meetingService;

    public MeetingController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @PostMapping
    public Meeting createMeeting(@RequestBody Meeting meeting){
        return meetingService.createMeeting(meeting);
    }
    @GetMapping("/{id}")
    public Meeting getById(@PathVariable int id){
        return meetingService.getById(id);
    }

    @PutMapping("/{id}")
    public Meeting updateMeeting(@RequestBody Meeting meeting){
        return meetingService.updateMeeting(meeting);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMeeting(@PathVariable int id){
        meetingService.deleteMeeting(id);
        return ResponseEntity.ok("Delete Success");
    }

    @GetMapping("/history")
    public List<Meeting> getHistory(@RequestParam(value = "teacherId", defaultValue = "") String teacherId, @RequestParam(value = "studentId", defaultValue = "")String studentId){
        return meetingService.getHistory(studentId,teacherId);
    }

    @GetMapping("/student/{studentId}")
    public List<Map<String,Object>> getStudentNextMeet(@PathVariable String studentId){
        return meetingService.getStudentNextMeet(studentId);
    }

    @GetMapping("/teacher/{teacherId}")
    public List<Map<String,Object>> getTeacherNextMeet(@PathVariable String teacherId){
        return meetingService.getTeacherNextMeet(teacherId);
    }
}
