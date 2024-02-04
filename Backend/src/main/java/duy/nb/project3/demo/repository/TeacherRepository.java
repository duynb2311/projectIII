package duy.nb.project3.demo.repository;

import duy.nb.project3.demo.entities.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, String> {
    @Query("Select t from Teacher t where t.id= :id")
    Teacher getById(@Param("id") String id);
}
