# Scholarship Revaluation

## Introduction

API return the value of scholarship based on parameters given from user \
IF currency param is equal to GOLD, API returns value in grams.

## Documantation

### GET /scholarship-revaluation

#### Params

Required scholarship: <SOCJALNE, REKTORSKIE, NIEPELNOSPRAWNYCH> \
Required level: <FIRST, SECOND, THIRD, FOURTH> \
Required currency: <CAD, HKD, ISK, PHP, DKK, HUF, CZK, \
    GBP, RON, SEK, IDR, INR, BRL, RUB, \
    HRK, JPY, THB, CHF, EUR, MYR, BGN, \
    TRY, CNY, NOK, NZD, ZAR, USD, MXN, \
    SGD, AUD, ILS, KRW, PLN, BTC, GOLD>

#### Example request

```http
GET http://localhost:8090?scholarship=SOCJALNE&level=FIRST&currency=USD
```
#### Example response

```
171.1517194165043200
```

#### Example request

```http
GET http://localhost:8090?scholarship=REKTORSKIE&level=SECOND&currency=GOLD
```
#### Example response
```
3.259148896545302
```

#### Example request

```http
GET http://localhost:8090?scholarship=SOCJALNE&level=FIRST&currency=BTC
```
#### Example response
```
0.00277099
```
