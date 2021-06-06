# Check Services service
## This service tells you current status of every other service

## Usage:
### The service runs on port ```8098```
### Endpoint: ```GET``` http://127.0.0.1:8098

<br>


## Returned values
### Returned data consists of json dictionary where ```keys``` are service names and ```values``` are current states of these services
### State can have on of the two following values:
- ```"UP"```, meaning service is working
- ```"DOWN"```, meaning service is not currently working


### Example request and response:
### ```GET``` http://127.0.0.1:8098

### Response:
```json
{
  "email-score-service": "UP", 
  "moria-parser": "DOWN", 
  "scholarship-revaluation": "DOWN", 
  "teacher-statistics": "DOWN", 
  "umcs-air-quality": "DOWN", 
  "weather-data": "UP"
}
```

