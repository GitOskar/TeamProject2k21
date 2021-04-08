# Scholarship Revaluation

## Introduction

API return the value of scholarship based on parameters given from user

## Documantation

### GET /scholarship-revaluation

#### Params

Required scholarship: <SOCJALNE, REKTORSKIE, NIEPELNOSPRAWNYCH> \
Required level: <FIRST, SECOND, THIRD, FOURTH> \
Required currency: <CAD, HKD, ISK, PHP, DKK, HUF, CZK, \
    GBP, RON, SEK, IDR, INR, BRL, RUB, \
    HRK, JPY, THB, CHF, EUR, MYR, BGN, \
    TRY, CNY, NOK, NZD, ZAR, USD, MXN, \
    SGD, AUD, ILS, KRW, PLN, BTC>

#### Example request

```http
GET http://localhost:8080/scholarship-revaluation?scholarship=SOCJALNE&level=FIRST&currency=USD
```
#### Example response
```
164.7194201250
```