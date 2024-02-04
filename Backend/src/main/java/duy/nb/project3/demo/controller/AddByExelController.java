package duy.nb.project3.demo.controller;

import duy.nb.project3.demo.dto.AddByExelResponse;
import duy.nb.project3.demo.dto.ExelInputDto;
import duy.nb.project3.demo.service.AddByExelService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/exeladd")
public class AddByExelController {
    private AddByExelService addByExelService;

    public AddByExelController(AddByExelService addByExelService) {
        this.addByExelService = addByExelService;
    }

    @PostMapping("/{teacherId}/{semeter}")
    public AddByExelResponse addByExel(@PathVariable(name = "teacherId") String teacherId, @PathVariable(name = "semeter") int semeter, @RequestBody ExelInputDto exelInputDto){
        return addByExelService.addByExel(teacherId,semeter,exelInputDto);
    }
}
