package duy.nb.project3.demo.controller;

import duy.nb.project3.demo.entities.FreeTime;
import duy.nb.project3.demo.service.FreeTimeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/freetime")
public class FreeTimeController {
    private FreeTimeService freeTimeService;

    public FreeTimeController(FreeTimeService freeTimeService) {
        this.freeTimeService = freeTimeService;
    }

    @PostMapping
    public FreeTime createFreeTime(@RequestBody FreeTime freeTime){
        return freeTimeService.createFreeTime(freeTime);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFreeTime(@PathVariable int id){
        freeTimeService.deleteFreeTime(id);
        return ResponseEntity.ok("Delete success");
    }

    @GetMapping("/after")
    public List<FreeTime> getFreeTimeAfter(){
        return freeTimeService.getFreeTimeAfter();
    }

}
