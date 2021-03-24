package scholarshiprevaluation.presentation;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScholarshipController {

    @GetMapping
    public String exampleScholarshipRevaluation() {
        return "Scholarship revaluation";
    }
}
