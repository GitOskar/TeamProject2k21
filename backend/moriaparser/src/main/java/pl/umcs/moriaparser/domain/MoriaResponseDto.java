package pl.umcs.moriaparser.domain;

import lombok.Data;

@Data
public class MoriaResponseDto {
    private TeacherListResultDto result;
    private String status;
}
