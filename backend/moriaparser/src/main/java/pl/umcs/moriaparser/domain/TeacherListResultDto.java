package pl.umcs.moriaparser.domain;

import lombok.Data;

import java.util.List;

@Data
public class TeacherListResultDto {
    public List<TeacherDto> array;
    public int count;
}
