# EMAIL SCORE SERVICE
## This service tells how annoyed the teacher will be if they receive the given email. 
## It also provides information on how many profanities and how many colloquialisms are in the text.
## The level of irritation of the teacher is represented by the score, which is a whole number from 0 to 100
> ## The score of ```0``` means that  the teacher would not be annoyed at all
> ## The score of ```100``` means that the teacher would be extremely annoyed if he got this email
## So the more the worse
<br>
<br>

## How to use the service:
>### ```GET``` 127.0.0.1:8095?first_name=```<first_name>```&last_name=```<last_name>```&subject=```<subject>```&email_body=```<email_body>```
## The service runs on port ```8095```
## Description of URL parameters:
 - ```<first_name>``` is the first name of the teacher you want to send email to. 
The first letter must be capitalized
 - ```<last_name>```  is the last name of the teacher you want to send email to. 
The first letter must be capitalized
- ```<subject>```     is the subject of the email
- ```<email_body>```  is the body of the email. Service will look for greeting in the first line of email body. By greeting I mean e.g "Szanowny Panie profesorze"
### To denote ```newline``` in URL parameter use ```%0A```
## Response:
## Response has always the following json format:
```json
{
    "colloquialism_count": <colloquialism_count> ,
    "profanity_count": <profanity_count>,
    "score": <score>,
    "status": <status>
}
```
## where:
 - ```<colloquialism_count>``` is a whole number of colloquialisms found in email, e.g "siema"
 - ```<profanity_count>``` is a whole number of profanities found in email, e.g "h*j"
 - ```<score>``` is overall score of the email (explained above)
 - ```<status>``` is either ```200``` or ```404``` where ```200``` means that specified teacher exists. ```404``` means that there is no teacher that has given first name and last name. In case when status is ```404``` all other fields of the reponse have value of ```NULL```
<br>

## Example usage:
>### ```GET``` http://127.0.0.1:8095?first_name=Bogdan&last_name=Księżopolski&subject=Siema&email_body=Szanowny Panie  profesorze witam, %0A nie wstawiles mi oceny ziomek, czaisz?

## Response
```json
{
    "colloquialism_count": 3,
    "profanity_count": 0,
    "score": 62,
    "status": 200
}
```
## Exampl usage 2
>### ```GET``` http://127.0.0.1:8095?first_name=aaaa&last_name=bbbbf&subject=Siema &email_body=Szanown Panie profesorze  witam, %0A nie wstawiles mi oceny ziomek, czaisz?

## Response 2
```json
{
    "colloquialism_count": "NULL",
    "profanity_count": "NULL",
    "score": "NULL",
    "status": 404
}
```
