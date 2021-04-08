package scholarshiprevaluation.service;

import java.math.BigDecimal;

public class ResponseParser {

    private static int BEGIN = 16;

    public static BigDecimal parseConversionRate(String response) {

        int end = BEGIN+1;
        while (response.charAt(end) != '}')
            end++;

        return BigDecimal.valueOf(Double.parseDouble(response.substring(BEGIN, end)));

    }
}
