import sys
import os
#sys.path.append(os.path.abspath('../profanities'))
from profanities.profanities import profanities_list
from profanities.profanities import colloquialism_list
from . import preprocessor
import string
import json
import requests

class EmailScore:
    degrees_dct={
        'mgr' :   [1,'mgr','magister','magistrze'],
        'inz' :   [1,'inz','inzynier', 'inzynierze'],
        'dr'  :   [2, 'dr', 'doktor','doktorze'],
        'rhab' :  [3, 'rhab', 'profesor', 'profesorze', 'rzehabilitowany'],
        'prof':   [4, 'prof', 'profesor', 'profesorze']
    }

    def __init__(self, first_name, last_name, subject, body):
        self.lc=len(subject.replace(" ", ""))+len(body.replace(" ", ""))
        if self.lc == 0:
            self.lc=1
        self.first_name=first_name
        self.last_name=last_name
        self.subject=subject
        self.body=body 

        
    def get_score(self):
        greeting_score=self.get_greeting_score(self.first_name, self.last_name, self.body.split('\n')[0])
        if greeting_score == None:
            return None
        subject_score=self.get_subject_score(self.subject)
        body_score=self.get_body_score(self.body)
        
        overall_score=greeting_score + subject_score[0] +body_score[0]
        if overall_score > 100:
            overall_score=100
        elif overall_score <0:
            overall_score=0

        return {
            'score' : int(overall_score),
            'profanity_count': subject_score[1]['profanity_count']+body_score[1]['profanity_count'],
            'colloquialism_count': subject_score[1]['colloquialism_count']+body_score[1]['colloquialism_count'],
        }

    def get_greeting_score(self,first_name, last_name,  first_line):
        greeting_score=0
        first_line=preprocessor.PreProcessor.pre_process(first_line)

        degree  =  self.get_degree(first_name, last_name)
        
        if degree == None:
            return None
        degree=preprocessor.PreProcessor.pre_process(degree)
        
        if degree.replace(" ", "") =='drhab': degree='rhab'
        
        degree_to_find = []
        tmp=False
        for key, val in EmailScore.degrees_dct.items():
            for d in val[1:]:
                if d in degree:
                    tmp=True
            if tmp:        
                degree_to_find.extend(val[1:])

        if len(degree_to_find) == 0:
            return 0
        degree_count=0
        first_line=first_line.replace(" ","")
       
        for deg in degree_to_find:
            degree_count+=first_line.count(deg)
        
        if degree_count != 0:
            greeting_score=0
        
        else :greeting_score=100
        
        if 'szanowny' in first_line or 'szanowna' in first_line:
            
            greeting_score-=30
        if 'witam' in first_line or 'witaj' in first_line:
            greeting_score+=40
            
        return greeting_score

    def get_subject_score(self, subject):
        subject_score=0
        profanities_count,profanieties_letter_count = self.count_profanities(subject)
        colloquialism_count,colloquialism_letter_count= self.count_colloquialism(subject)
        subject=preprocessor.PreProcessor.pre_process(subject)
        
        prof_score=((100*profanieties_letter_count)/(self.lc))*3
        
        coll_score=(100*colloquialism_letter_count)/(self.lc)

        subject_score+=prof_score+coll_score
        if len(subject.replace(" ", "")) ==0:
            subject_score=100

        return (subject_score, {'profanity_count':profanities_count, 'colloquialism_count':colloquialism_count})

    def get_body_score(self, body):

            profanities_count,profanieties_letter_count = self.count_profanities(body)
            colloquialism_count,colloquialism_letter_count= self.count_colloquialism(body)
        
            prof_score=((profanieties_letter_count*100)/(self.lc))*3
            coll_score=(colloquialism_letter_count*100)/(self.lc)

            return (prof_score+coll_score, {'profanity_count':profanities_count, 'colloquialism_count':colloquialism_count})
        
    def count_profanities(self, text):
        text=preprocessor.PreProcessor.pre_process(text)
        profanities_count=0
        profanieties_letter_count=0
        text_tmp=text.replace(" ", "")

        for profanity in profanities_list:
                    tmp = text_tmp.count(profanity)
                    if tmp!=0:
                        profanities_count+=tmp
                        profanieties_letter_count+=len(profanity)*tmp

        h_count=text_tmp.count('huj')
        ah_count=text_tmp.count('abstrahuj')
        profanities_count+=(h_count-ah_count)
        profanieties_letter_count+=(h_count-ah_count)*3
        profanities_count+= text.count('chuj')
        profanieties_letter_count+=text.count('chuj')*4
        return (profanities_count, profanieties_letter_count )

    def count_colloquialism(self, text):
        text=preprocessor.PreProcessor.pre_process(text)
        text_tmp=text.replace(" ", "")
        colloquialism_count=0
        colloquialism_letter_count=0

        for colloquialism in colloquialism_list:
            tmp=text_tmp.count(colloquialism)
            if tmp!=0:
                colloquialism_count += tmp
                colloquialism_letter_count+=tmp*len(colloquialism)
        return (colloquialism_count, colloquialism_letter_count)

    def get_degree(self, first_name, last_name):
        response=requests.get('http://moria.umcs.lublin.pl/api/teacher_list')
        dict_data=json.loads(response.text)
        valid_teachers=[]
        for dct in dict_data.get('result').get('array'):
            if dct['first_name'].lower() == first_name.lower() and dct['last_name'].lower() == last_name.lower():
                valid_teachers.append(dct)
        if len(valid_teachers) == 0:
            return None
        return valid_teachers[0]['degree']
        
