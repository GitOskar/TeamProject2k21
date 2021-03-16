# Worldwide UMCS

## Introduction

The project will be based on the microservices architecture. \
The aim of the project will be to present various statistical data on the university with the use of external REST API. \
For diagram go to /img/

### Example


The API Gateway will be able to return some serious information, such as the number of students who will die in the next 5 years, based on any statistical API that reports the number of dead
or just cool facts like what is the chance your teacher is an alcoholic or an API which based on the email provided gives you a percentage chance your teacher will be angry after reading it (for example if you started email with "Dzień dobry panie magistrze", and degree of the 
addressee is "prof. dr hab." chance for getting angry will be between 90 and 100 percentage).

### Technology stack

Project will be created in:

#### Java with:

Spring-boot and Spring modules \
Lombok \
MapStruct \
Hibernate (If database will be needed) \
JUnit \
Mockito

#### Python:
django


----
### Example APIs:
- **https://powietrze.gios.gov.pl/pjp/content/api** (air quality data)

e.g. request *http://api.gios.gov.pl/pjp-api/rest/station/findAll*

response contains information about air quality monitoring stations in Poland: 
```json
[
    ...
    {
        "id":266,
        "stationName":"Lublin ul. Obywatelska",
        "gegrLat":"51.259431","gegrLon":"22.569133",
        "city":{
            "id":489,
            "name":"Lublin",
            "commune":{
                "communeName":"Lublin",
                "districtName":"Lublin",
                "provinceName":"LUBELSKIE"
                }
        },
        "addressStreet":"ul. Obywatelska 13"
    }
    ...
]
```

e.g. request *http://api.gios.gov.pl/pjp-api/rest/station/sensors/266*

response contains information about monitoring station with id=**266**

```json
[
    {
        "id":1888,
        "stationId":266,
        "param":{
            "paramName":"tlenek węgla",
            "paramFormula":"CO",
            "paramCode":"CO",
            "idParam":8
        }
    }
    {
        "id":1895,
        "stationId":266,
        "param":{
            "paramName":"dwutlenek azotu",
            "paramFormula":"NO2",
            "paramCode":"NO2",
            "idParam":6
        }
    }
    {
        "id":1897,
        "stationId":266,
        "param":{
            "paramName":"ozon",
            "paramFormula":"O3",
            "paramCode":"O3",
            "idParam":5
        }
    }
    ...
]
```
e.g. request *http://api.gios.gov.pl/pjp-api/rest/data/getData/1897*

response contains information about data gathered by sensor with id=**1897**

```json
{
    "key":"O3",
    "values":
    [
        {
            "date":"2021-03-16 13:00:00",
            "value":null
        },
        {
            "date":"2021-03-16 12:00:00",
            "value":66.0
        },
        {
            "date":"2021-03-16 11:00:00",
            "value":null
        },
        {
            "date":"2021-03-16 10:00:00",
            "value":null
        },
        {
            "date":"2021-03-16 09:00:00",
            "value":35.0
        },
        {
            "date":"2021-03-16 08:00:00",
            "value":14.6
        }
        ...
    ]
}
```
- **https://danepubliczne.imgw.pl/apiinfo** 

e.g. request *https://danepubliczne.imgw.pl/api/data/synop* (weather data)

response contains information about weather stations in Poland

```json
[
...
    {
        "id_stacji":"12495",
        "stacja":"Lublin",
        "data_pomiaru":"2021-03-16",
        "godzina_pomiaru":"12",
        "temperatura":"7.5",
        "predkosc_wiatru":"5",
        "kierunek_wiatru":"10",
        "wilgotnosc_wzgledna":"49.5",
        "suma_opadu":"0",
        "cisnienie":"1009.7"
    }
...
]

```

- **https://danepubliczne.imgw.pl/apiinfo**  (bitcoin data)

e.g. response

```json
{
    "config": {
        "data": "assets",
        "symbol": "'BTC'",
        "interval": "hour",
        "data_points": 24
    },
    "usage": {
        "day": 15,
        "month": 103
    },
    "data": [{
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "price": 9798.977911,
        "price_btc": 1,
        "market_cap": 180245643159,
        "percent_change_24h": 1.41,
        "percent_change_7d": -1.89,
        "percent_change_30d": 4.73,
        "volume_24h": 26140524526.52,
        "max_supply": "21000000",
        "asset_id": 1,
        "time": 1591315200,
        "open": 9801.616408,
        "high": 9806.977146,
        "low": 9801.616408,
        "volume": 353205420,
        "url_shares": 1135,
        "unique_url_shares": 659,
        "reddit_posts": 1,
        "reddit_posts_score": 1,
        "reddit_comments": 1,
        "reddit_comments_score": 1,
        "tweets": 3758,
        "tweet_spam": 338,
        "tweet_followers": 14174661,
        "tweet_quotes": 11,
        "tweet_retweets": 338,
        "tweet_replies": 110,
        "tweet_favorites": 551,
        "tweet_sentiment1": 85,
        "tweet_sentiment2": 206,
        "tweet_sentiment3": 685,
        "tweet_sentiment4": 2564,
        "tweet_sentiment5": 218,
        "tweet_sentiment_impact1": 181592,
        "tweet_sentiment_impact2": 1455907,
        "tweet_sentiment_impact3": 3225871,
        "tweet_sentiment_impact4": 8750266,
        "tweet_sentiment_impact5": 562035,
        "social_score": 14176806,
        "average_sentiment": 3.7,
        "sentiment_absolute": 3,
        "sentiment_relative": 91,
        "news": 47,
        "price_score": 3,
        "social_impact_score": 4.3,
        "correlation_rank": 4.1,
        "galaxy_score": 75.5,
        "volatility": 0.01008901,
        "alt_rank": 26,
        "alt_rank_30d": 1,
        "market_cap_rank": 1,
        "percent_change_24h_rank": 657,
        "volume_24h_rank": 2,
        "social_volume_24h_rank": 1,
        "social_score_24h_rank": 1,
        "youtube": 47,
        "social_contributors": 1963,
        "social_volume": 4466,
        "social_volume_global": 7118,
        "social_dominance": 62.74234335487496,
        "market_cap_global": 278814602122,
        "market_dominance": 64.55374708002002,
        "medium": 1,
    }
```

#### Moria API

GET /student_list
```json
{
    "result": {
        "array": [
            {
                "id": 0,
                "name": ""
            },
            {
                "id": 3,
                "name": "0i SKNI Stud. Koło Nauk. Inf. (zaj. cykl.)"
            },
            {
                "id": 142,
                "name": "2 Geografia I stopień stacj. hydrometeorologia (P)"
            },
	...

	"count": 245
}
```
GET /teacher_list
```json
[
...
{
                "degree": "dr inż.",
                "department_id": 3,
                "first_name": "Dariusz",
                "id": 3064,
                "last_name": "Dobrowolski"
            },
            {
                "degree": "mgr inż.",
                "department_id": 46,
                "first_name": "Piotr",
                "id": 3065,
                "last_name": "Schneider"
            },
            {
                "degree": "mgr",
                "department_id": 4,
                "first_name": "J.",
                "id": 3067,
                "last_name": "Matusiak"
            },
...
	"count": 697
}
```