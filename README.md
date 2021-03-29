# World Wide UMCS 

### team project 2021

>## Contributors:
* [GitOskar](https://github.com/GitOskar)
* [kfkowal](https://github.com/kfkowal)
<br>
<br>

>## Introduction:
"World Wide UMCS" is a microservice app centered aroud UMCS. \
This app gather various data ( there are no rules here, basically any information can be used ) and tries to present it in some relation to UMCS. \
For example, we collect data on air quality in Poland, then we compare air qality in UMCS to other universities.
<br>
<br>

>## Architecture used:
### The app consists of 
* API gateway, which is a tool that sits between a client and a collection of backend services
* Microservices. With microservices, applications are broken down into their smallest components, independent from each other. Microservices are all separated and work together to accomplish some tasks
<br>
<br>

>## Technologies used:

#### back-end:

* Java with:
    * Spring-boot and Spring modules
    * Lombok
    * MapStruct
    * Hibernate (If database will be needed)
    * JUnit
    * Mockito
* Python with:
    * aniso8601
    * click
    * Flask
    * Flask-RESTful
    * itsdangerous
    * Jinja2
    * MarkupSafe
    * pytz
    * six
    * Werkzeug
#### front-end:
* angular