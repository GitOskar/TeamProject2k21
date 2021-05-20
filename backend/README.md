# Backend RESTful APIs

## Documentation

### API Gateway

API Gateway is running on port 8080,

### Scholarship Revaluation

API is running on port: 8090 \
API is avaiable on /scholarship-revaluation endpoint. 

### Recognize Email Threat

API is running on port: xxxx \
API is avaiable on /xxx endpoint. 

### Run

#### Java

"gradlew bootRun" to run project from api-gateway directory

#### Python

# How to run any python service

### 1. Be sure to have `python3` installed
---
### 2. Create python virtual enviroment. Virtual enviroment is just a folder with python modules. You can place virtual enviroment inside of  the project direcory but in that case make sure to add it to the .gitignore. You can place it also anywhere you want it dosen't matter. In order to create virtual enviroment, navigate to directory in which you want the virtual enviroment to be created and then run following command: 
> ```python -m venv env```

<br>
This will create virtual enviroment called 'env'

---
### 3. Run python from virtual enviroment:
> ``` .\env\Scripts\activate```

<br>

The prompt should change now to something like ```(env)```

## The following files ```requirements.txt``` and ```run.py``` will be referenced in relation to project direcotry

---
### 4. Run command
> ```(env) pip intall -r \backend\air_quality_service\requirements.txt```

This will install modules you need

---
### 5. Now you should be able to run any service by running script called ```run.py``` which should be present in every service dictionary:
> ```(env) python \backend\service_dictionary\run.py```

Service will run on port specified in service documentation

---

### 6. To stop service press ```ctrl+c```. To deactivate virtual enviroment run ```deactivate```
# ```YOU NEED ONLY ONE VIRTUAL ENVIROMENT```, you can use a single virtual enviroment to run multiple services
