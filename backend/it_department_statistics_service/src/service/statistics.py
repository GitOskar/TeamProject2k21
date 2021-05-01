import requests
import json
import math

class UMCSitDepartmentStatistics:
    def __init__(self, what):
        self.data_it=json.loads(requests.get('http://localhost:9121/it-institute').text)
        self.data_rest=json.loads(requests.get('http://localhost:9121/no-it-institute').text)
        self.statistics={}
        self.what=what
        self.__set_gender_statistics( what)
        self.__set_degrees_statistics(what)


    def get_statistics(self):
        self.__set_gender_statistics( self.what)
        self.__set_degrees_statistics(self.what)
        type=None

        if self.what == 'it': type='it-institute'
        else: type='rest'
        self.statistics['type'] = type
        return self.statistics

    def __set_gender_statistics(self, what):
        male_count=0
        female_count=0
        person_count=0
        data=None
        if what == 'it':
            data=self.data_it
        else:
            data=self.data_rest

        for teacher in data:
            first_name=teacher['first_name'].replace(' ','')
            if first_name:
                person_count += 1
                if first_name[-1] == 'a':
                    female_count+=1
                else:
                    male_count+=1

        self.statistics['male_percentage']=math.ceil(male_count*100/person_count)
        self.statistics['female_percentage']=math.floor(female_count*100/person_count)
        
        

    def __set_degrees_statistics(self, what):
        data=None
        if what == 'it':
            data=self.data_it
        else:
            data=self.data_rest

        degrees={
            'mgr' : 0,
            'dr' :0,
            'dr hab.' : 0,
            'prof' : 0
        }

        person_count=0
        for teacher in data:
            degree=teacher['degree'].replace(' ', '')
            if 'mgr' in degree:
                degrees['mgr'] += 1
                person_count += 1
                continue
            if 'prof' in degree:
                degrees['prof'] += 1
                person_count += 1
                continue
            if 'drhab.' in degree:
                degrees['dr hab.'] += 1
                person_count += 1
                continue
            if 'dr' in degree:
                degrees['dr'] +=1
                person_count += 1

        degrees_percentage={
            'mgr_percentage':math.floor(degrees['mgr'] * 100 / person_count),
            'dr_percentage': math.floor(degrees['dr'] * 100 / person_count),
            'drhab_percentage':math.ceil( degrees['dr hab.'] * 100 / person_count),
            'prof_percentage': math.ceil(degrees['prof'] * 100 / person_count)
        }
        self.statistics['degrees_percentage']=degrees_percentage



        
    

