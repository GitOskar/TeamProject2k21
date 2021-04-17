package scholarshiprevaluation.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import scholarshiprevaluation.domain.enumerate.CurrencyEnum;
import scholarshiprevaluation.domain.enumerate.ScholarshipEnum;
import scholarshiprevaluation.domain.enumerate.ScholarshipLevelEnum;

import java.math.BigDecimal;
import java.math.MathContext;
import java.text.MessageFormat;

import static scholarshiprevaluation.domain.enumerate.CurrencyEnum.BTC;
import static scholarshiprevaluation.domain.enumerate.CurrencyEnum.PLN;
import static scholarshiprevaluation.domain.enumerate.CurrencyEnum.GOLD;

@Service
public class RevaluationService {

    private static String SPECIFIC_CURRENCY_URL_TEMPLATE = "http://api.nbp.pl/api/exchangerates/rates/a/{0}/";
    private static String BITCOIN_REVALUATION_URL_TEMPLATE = "https://blockchain.info/tobtc?currency=PLN&value={0}";
    private static String GOLD_RATE_URL = "http://api.nbp.pl/api/cenyzlota";

    public BigDecimal revaluateScholarship(ScholarshipEnum scholarship, ScholarshipLevelEnum scholarshipLevel, CurrencyEnum currency) {

        BigDecimal money = ScholarshipValueHolder.getScholarshipValue(scholarship, scholarshipLevel);

        if (currency == PLN) {
            return money;
        }

        RestTemplate restTemplate = new RestTemplate();

        if (currency == BTC) {
            return BigDecimal.valueOf(Double.parseDouble(restTemplate.getForObject(MessageFormat.format(BITCOIN_REVALUATION_URL_TEMPLATE, money), String.class)));
        }

        if (currency == GOLD) {
            BigDecimal goldRate = NBPResponseParser.parseResponseGold(restTemplate.getForObject(GOLD_RATE_URL, String.class));
            return money.divide(goldRate, MathContext.DECIMAL64);
        }

        String url = MessageFormat.format(SPECIFIC_CURRENCY_URL_TEMPLATE, currency.toString());
        BigDecimal conversionRate = NBPResponseParser.parseResponseCurrency(restTemplate.getForObject(url, String.class)).pow(-1, MathContext.DECIMAL64);
        return money.multiply(conversionRate);
    }




}
