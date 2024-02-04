package duy.nb.project3.demo.repository;

import duy.nb.project3.demo.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, String> {
    @Query("Select s from Student s where s.id= :id")
    Student getById(@Param("id") String id);

}
