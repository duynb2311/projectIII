package duy.nb.project3.demo.service;

import duy.nb.project3.demo.entities.FreeTime;
import duy.nb.project3.demo.entities.Meeting;
import duy.nb.project3.demo.exception.NotFoundException;
import duy.nb.project3.demo.repository.FreeTimeRepository;
import duy.nb.project3.demo.repository.MeetingRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Service
public class MeetingService {
    private MeetingRepository meetingRepository;
    private FreeTimeRepository freeTimeRepository;

    public MeetingService(MeetingRepository meetingRepository, FreeTimeRepository freeTimeRepository) {
        this.meetingRepository = meetingRepository;
        this.freeTimeRepository = freeTimeRepository;
    }

    @Transactional
    public Meeting createMeeting(Meeting meeting){
        System.out.println(meeting.toString());
        FreeTime freeTime = freeTimeRepository.findById(meeting.getFreeTimeId())
                .orElseThrow(() -> new NotFoundException("Freetime not found"));
        freeTime.setStatus(2);
        freeTimeRepository.save(freeTime);
        return meetingRepository.save(meeting);
    }

    public Meeting updateMeeting(Meeting meeting){
        return meetingRepository.save(meeting);
    }

    public Meeting getById(int id){
        return meetingRepository.findById(id);
    }

    @Transactional
    public void deleteMeeting(int id){
        Meeting meeting = meetingRepository.findById(id);
        FreeTime freeTime = freeTimeRepository.findById(meeting.getFreeTimeId())
                .orElseThrow(() -> new NotFoundException("Freetime not found"));
        freeTime.setStatus(1);
        freeTimeRepository.save(freeTime);
        meetingRepository.delete(meeting);
    }

    public List<Meeting> getHistory(String studentId, String teacherId){
        return meetingRepository.findHistory(studentId, teacherId);
    }
    public List<Map<String,Object>> getStudentNextMeet(String studentId){
        Date date = new Date(System.currentTimeMillis());
        return meetingRepository.findStudentNextMeet(studentId,date);
    }

    public List<Map<String,Object>> getTeacherNextMeet(String teacherId){
        Date date = new Date(System.currentTimeMillis());
        return meetingRepository.findTeacherNextMeet(teacherId,date);
    }
}
