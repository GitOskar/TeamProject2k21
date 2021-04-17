# How to run air_quality_comparator srevice

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
### 5. Now you should be able to run service by running following command:
> ```(env) python \backend\air_quality_service\run.py```

Service will run on port ```8091```

---

### 6. To stop service press ```ctrl+c```. To deactivate virtual enviroment run ```deactivate```

