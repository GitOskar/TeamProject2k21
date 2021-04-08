package scholarshiprevaluation.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import scholarshiprevaluation.domain.enumerate.CurrencyEnum;
import scholarshiprevaluation.domain.enumerate.ScholarshipEnum;
import scholarshiprevaluation.domain.enumerate.ScholarshipLevelEnum;

import java.math.BigDecimal;
import java.text.MessageFormat;

import static scholarshiprevaluation.domain.enumerate.CurrencyEnum.BTC;

@Service
public class RevaluationService {

    private static String SPECIFIC_CURRENCY_URL_TEMPLATE = "https://api.exchangeratesapi.io/latest?symbols={0}&base=PLN";
    private static String BITCOIN_REVALUATION_URL_TEMPLATE = "https://blockchain.info/tobtc?currency=PLN&value={0}";

    public BigDecimal revaluateScholarship(ScholarshipEnum scholarship, ScholarshipLevelEnum scholarshipLevel, CurrencyEnum currency) {

        BigDecimal money = ScholarshipValueHolder.getScholarshipValue(scholarship, scholarshipLevel);
        RestTemplate restTemplate = new RestTemplate();

        if (currency == BTC)
            return BigDecimal.valueOf(Double.parseDouble(restTemplate.getForObject(MessageFormat.format(BITCOIN_REVALUATION_URL_TEMPLATE, money), String.class)));

        String url = MessageFormat.format(SPECIFIC_CURRENCY_URL_TEMPLATE, currency.toString());
        BigDecimal conversionRate = ResponseParser.parseConversionRate(restTemplate.getForObject(url, String.class));
        return money.multiply(conversionRate);
    }




}
