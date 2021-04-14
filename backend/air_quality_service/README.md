# Air quality in Poland
## Introduction
This service returns data about amount of air pollutions (types of pollutions are specified in url parameters by user) in different cities in Poland (cities are also specified in url parameter by user). The data is gathered from multiple sensors in given city and then averaged.
<br>
## Documentation:
> GET /air-quality
<br>
### Parameters:
 * cities - city names separated by commas (use lower case for  city names); e.g. cities=kraków,wrocław,warszawa
 * pollutions - types of pollutions separated by commas (use upper case for pollution names); valid pollutions types are: SO2, NO2, PM10, PM2.5, CO, C6H6, O3 ; e.g. pollutions=SO2,NO2,CO

 If returned value is ```NULL``` that means that there is no sensor available
 <br>
 ### Example request:
> GET http://127.0.0.1:8091/air-quality/?cities=kraków,wrocław,warszawa&pollutions=SO2,NO2,CO

### returend value:
```json
[
  {
    "city_name": "kraków", 
    "pollution_types": {
      "CO": 375.135, 
      "NO2": 27.306275, 
      "SO2": 2.9770250000000003
    }
  }, 
  {
    "city_name": "wrocław", 
    "pollution_types": {
      "CO": 262.6305, 
      "NO2": 15.36072, 
      "SO2": 4.52712
    }
  }, 
  {
    "city_name": "warszawa", 
    "pollution_types": {
      "CO": 827.0, 
      "NO2": 27.16333333333333, 
      "SO2": 1.8
    }
  }
]
```
The bigger the values of pollutions the worse.