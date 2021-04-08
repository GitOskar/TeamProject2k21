package scholarshiprevaluation.presentation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import scholarshiprevaluation.domain.enumerate.CurrencyEnum;
import scholarshiprevaluation.domain.enumerate.ScholarshipEnum;
import scholarshiprevaluation.domain.enumerate.ScholarshipLevelEnum;
import scholarshiprevaluation.service.RevaluationService;

import java.math.BigDecimal;

@RestController
public class ScholarshipController {

    RevaluationService service;

    public ScholarshipController(RevaluationService service) {
        this.service = service;
    }

    @GetMapping
    public BigDecimal getScholarshipValueInSelectedCurrency(
            @RequestParam("scholarship") ScholarshipEnum scholarship,
            @RequestParam("level") ScholarshipLevelEnum scholarshipLevel,
            @RequestParam("currency") CurrencyEnum currency) {
        return service.revaluateScholarship(scholarship, scholarshipLevel, currency);
    }
}
