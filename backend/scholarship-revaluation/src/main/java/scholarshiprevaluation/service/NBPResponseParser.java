package scholarshiprevaluation.service;

import java.math.BigDecimal;

public class NBPResponseParser {

    private static String currencyRegex = "(?s).*\"mid\"\\s*:\\s*([-.\\d]+).*";
    private static String goldRegex = "(?s).*\"cena\"\\s*:\\s*([-.\\d]+).*";

    public static BigDecimal parseResponseCurrency(String response) {
        return BigDecimal.valueOf(Double.parseDouble(response.replaceFirst(currencyRegex, "$1")));
    }

    public static BigDecimal parseResponseGold(String response) {
        return BigDecimal.valueOf(Double.parseDouble(response.replaceFirst(goldRegex, "$1")));
    }
}
