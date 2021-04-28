package pl.umcs.moriaparser.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.umcs.moriaparser.domain.MoriaResponseDto;
import pl.umcs.moriaparser.domain.TeacherDto;

import java.util.Arrays;
import java.util.List;

import static java.util.stream.Collectors.*;

@Service
public class MoriaParserService {

    private static String MORIA_URL = "http://moria.umcs.lublin.pl/api/teacher_list";
    private static List<Integer> IT_DEPARTMENTS = Arrays.asList(3, 6, 7, 46, 29, 56, 36, 39, 45);

    public List<TeacherDto> downloadAndFilterItTeachers() {

        return downloadAllTeachers().stream()
                .filter(teacherDto -> IT_DEPARTMENTS.contains(teacherDto.getDepartment_id()))
                .collect(toList());
    }

    public List<TeacherDto> downloadAndFilterNoItTeachers() {

        return downloadAllTeachers().stream()
                .filter(teacherDto -> !IT_DEPARTMENTS.contains(teacherDto.getDepartment_id()) && teacherDto.getDepartment_id() != 0)
                .collect(toList());
    }

    private List<TeacherDto> downloadAllTeachers() {
        RestTemplate restTemplate = new RestTemplate();

        MoriaResponseDto moriaResponseDto = restTemplate.getForObject(MORIA_URL, MoriaResponseDto.class);

        return moriaResponseDto.getResult().getArray();
    }
}
