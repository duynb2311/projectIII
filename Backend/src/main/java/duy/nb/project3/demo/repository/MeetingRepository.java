package duy.nb.project3.demo.repository;

import duy.nb.project3.demo.entities.Meeting;
import duy.nb.project3.demo.entities.Student;
import duy.nb.project3.demo.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;
import java.util.Map;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
    Meeting findById(int id);

    @Query("select m from Meeting m where m.studentId = :studentId and m.teacherId = :teacherId order by m.meetingDate Desc")
    List<Meeting> findHistory(@Param("studentId") String studentId,@Param("teacherId") String teacherId);

    @Query("select m.id as id, t.name as name, m.meetingDate as date, m.startTime as startTime, m.endTime as endTime "+
            "from Meeting m left join Teacher t on m.teacherId= t.id "+
            "where m.studentId= :studentId and m.meetingDate>= :date ")
    List<Map<String,Object>> findStudentNextMeet(@Param("studentId") String studentId, @Param("date") Date date);
    @Query("select m.id as id, s.name as name, m.meetingDate as date, m.startTime as startTime, m.endTime as endTime  "+
            "from Meeting m left join Student s on m.studentId= s.id "+
            "where m.teacherId= :teacherId and m.meetingDate>= :date ")
    List<Map<String,Object>> findTeacherNextMeet(@Param("teacherId") String teacherId, @Param("date") Date date);
}
