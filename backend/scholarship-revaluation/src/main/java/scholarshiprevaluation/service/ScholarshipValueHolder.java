package scholarshiprevaluation.service;

import scholarshiprevaluation.domain.enumerate.ScholarshipEnum;
import scholarshiprevaluation.domain.enumerate.ScholarshipLevelEnum;

import java.math.BigDecimal;

public class ScholarshipValueHolder {

    public static BigDecimal getScholarshipValue(ScholarshipEnum scholarship, ScholarshipLevelEnum scholarshipLevel) {

        switch (scholarship) {

            case REKTORSKIE: switch (scholarshipLevel) {
                case FIRST: return BigDecimal.valueOf(500);
                case SECOND: return BigDecimal.valueOf(700);
                case THIRD: return BigDecimal.valueOf(1000);
                case FOURTH: return BigDecimal.valueOf(1200);
                default: throw new UnsupportedOperationException("Level not supported");
            }
            case SOCJALNE: switch (scholarshipLevel) {
                case FIRST: return BigDecimal.valueOf(650);
                case SECOND: return BigDecimal.valueOf(750);
                case THIRD: return BigDecimal.valueOf(950);
                default: throw new UnsupportedOperationException("Level not supported");
            }
            case NIEPELNOSPRAWNYCH: switch (scholarshipLevel) {
                case FIRST: return BigDecimal.valueOf(650);
                case SECOND: return BigDecimal.valueOf(750);
                case THIRD: return BigDecimal.valueOf(850);
                default: throw new UnsupportedOperationException("Level not supported");
            }
            default: throw new UnsupportedOperationException("Scholarship not supported");
        }
    }
}
