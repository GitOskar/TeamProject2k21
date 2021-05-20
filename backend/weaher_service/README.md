# Weather data service

## This service gathers some data about weather in given city

## Usage:
### The service runs on port ```8097```
### Endpoint: ```GET``` http://127.0.0.1:8097/? ```cities```=<comma_separated_city_names>

<br>

* \<comma_separated_city_names\> should be a string of lowercased city names separated by commas
### Example get request:
### ```GET``` http://127.0.0.1:8097/?cities=lublin,warszawa,kraków

<br>

## Returned values
### Returned data consists of a list of json dictionaries per city requested, of which each has the following structure:
### __If data for requested city is  available__:
```json
  {
    "city_name":      <city_name>, 
    "cloud_coverage": <cloud_coverage>, 
    "rain":           <rain>, 
    "status":         200, 
    "temperature":    <temparature>, 
    "wind_speed":     <wind_speed>
  }
```
### Where:
* ```<city_name>```: lowercased name of the city (string)
* ```<cloud_coverage>```: percentage of cloud cover (integer)
* ```<rain>```: either "yes" if it is raining or "no" if it isn't raining (string)
* ```"status"```: should be ```200```, for the case where there is no data available for the city see below (integer)

* ```<temparature>```: temperature in degrees Celsius (float)

*  ```<wind_speed>```: wind speed in m/s (float)

### __If data for requested city is not  available__:
```json
  {
    "city_name": <city_name>, 
    "status": 404
  }
```

<br>

### Example request and response:
### ```GET``` http://127.0.0.1:8097/?cities=lublin,warszawa,siema,kraków

### Response:
```json
[
  {
    "city_name": "warszawa", 
    "cloud_coverage": 75, 
    "rain": "no", 
    "status": 200, 
    "temperature": 16.69, 
    "wind_speed": 1.34
  }, 
  {
    "city_name": "kraków", 
    "cloud_coverage": 40, 
    "rain": "no", 
    "status": 200, 
    "temperature": 15.97, 
    "wind_speed": 0.45
  }, 
  {
    "city_name": "lublin", 
    "cloud_coverage": 55, 
    "rain": "no", 
    "status": 200, 
    "temperature": 15.77, 
    "wind_speed": 6.38
  },  
  {
    "city_name": "siema", 
    "status": 404
  }
]
```

