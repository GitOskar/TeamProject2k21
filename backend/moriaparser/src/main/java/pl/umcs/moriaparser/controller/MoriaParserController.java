package pl.umcs.moriaparser.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.umcs.moriaparser.domain.TeacherDto;
import pl.umcs.moriaparser.service.MoriaParserService;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class MoriaParserController {

    private final MoriaParserService service;

    @GetMapping("/it-institute")
    public List<TeacherDto> itInstituteTeachers() {
        return service.downloadAndFilterItTeachers();
    }

    @GetMapping("/no-it-institute")
    public List<TeacherDto> noItInstituteTeachers() {
        return service.downloadAndFilterNoItTeachers();
    }

}
