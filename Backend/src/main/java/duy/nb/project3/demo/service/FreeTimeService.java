package duy.nb.project3.demo.service;

import duy.nb.project3.demo.entities.FreeTime;
import duy.nb.project3.demo.exception.DuplicateException;
import duy.nb.project3.demo.exception.NotFoundException;
import duy.nb.project3.demo.repository.FreeTimeRepository;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class FreeTimeService {
    private FreeTimeRepository freeTimeRepository;

    public FreeTimeService(FreeTimeRepository freeTimeRepository) {
        this.freeTimeRepository = freeTimeRepository;
    }

    public FreeTime createFreeTime(FreeTime freeTime){
        List<FreeTime> freeTimes = freeTimeRepository.getFreeTimeByDay(freeTime.getDay());

        if(!freeTimes.isEmpty()){
            for (FreeTime eachFreeTime: freeTimes){
                int startStart = eachFreeTime.getStartTime().compareTo(freeTime.getStartTime());
                int startEnd = eachFreeTime.getStartTime().compareTo(freeTime.getEndTime());
                int endStart = eachFreeTime.getEndTime().compareTo(freeTime.getStartTime());
                int endEnd = eachFreeTime.getEndTime().compareTo(freeTime.getEndTime());

                if(startStart>=0&&startEnd<=0) throw new DuplicateException("Time Conflict");
                if(endStart>=0&&endEnd<=0) throw new DuplicateException("Time Conflict");
                if(startStart<=0&&endEnd>=0) throw new DuplicateException("Time Conflict");
            }
        }
        return freeTimeRepository.save(freeTime);
    }

    public List<FreeTime>  getFreeTimeAfter(){
        Date date = new Date(System.currentTimeMillis());
        return freeTimeRepository.getFreeTimeAfter(date);
    }

    public void deleteFreeTime(int id) throws NotFoundException {
        FreeTime freeTime=freeTimeRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Freetime not found"));
        freeTimeRepository.delete(freeTime);
    }
}
