package duy.nb.project3.demo.repository;

import duy.nb.project3.demo.entities.StudentTeacher;
import duy.nb.project3.demo.entities.Student;
import duy.nb.project3.demo.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface StudentTeacherRepository extends JpaRepository<StudentTeacher, Integer> {
    @Query("select st.id as id, t.id as teacherId, t.name as name, st.courseName as courseName "+
            "from Teacher t left join StudentTeacher st on st.teacherId=t.id "+
            "where st.studentId= :studentId and st.semeter= :semeter ")
    List<Map<String,Object>> getTeacherOfStudent(@Param("studentId") String studentId, @Param("semeter") int semeter);

    @Query("select st.id as id, s.id as studentId, s.name as name, st.courseName as courseName, st.group as groupName "+
            "from Student s left join StudentTeacher st on st.studentId=s.id "+
            "where st.teacherId= :teacherId and st.semeter= :semeter "+
            "order by st.group Desc")
    List<Map<String,Object>> getStudentOfTeacher(@Param("teacherId") String teacherId, @Param("semeter") int semeter);
}
