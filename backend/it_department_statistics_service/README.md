# DEPARTMENT STATISTICS SERVICE
## This service allows you to compare IT department to the rest of UMCS in terms of some statistics
## Service runs on port ```8096```

<br>
<br>

# How to use service:
## Service runs at port ```8096```
>## ```GET``` http://127.0.0.1:8096/?type=```<type>```
## Where:
 - ```<type>``` can have one of two values:
    - ```it```  : which will give statistical data on IT department
    - ```rest``` : which will give statistical data on every department but IT

## Example usage
>## ```GET``` http://127.0.0.1:8096/?type=it

## Response:
```json
{
  "degrees_percentage": {
    "dr_percentage": 41, 
    "drhab_percentage": 16, 
    "mgr_percentage": 36, 
    "prof_percentage": 7
  }, 
  "female_percentage": 48, 
  "male_percentage": 52, 
  "type": "rest"
}
```

## Where:
- ```"dr_percentage": 41 ``` means that 41% of people who work at IT department have degree of 'dr'