package duy.nb.project3.demo.repository;

import duy.nb.project3.demo.entities.FreeTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface FreeTimeRepository extends JpaRepository<FreeTime, Integer> {
    @Query("select f from FreeTime f where f.day>= :date")
    List<FreeTime> getFreeTimeAfter(@Param("date") Date date);

    @Query("select f from FreeTime f where f.day= :date")
    List<FreeTime> getFreeTimeByDay(@Param("date") Date date);
}
