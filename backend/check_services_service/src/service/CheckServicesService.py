import requests
import threading
import concurrent.futures
import pprint

class CheckServicesService:
    services={
        'umcs-air-quality' : 'http://127.0.0.1:8091/?cities=lublin&pollutions=PM10',
        'email-score-service':'http://127.0.0.1:8095?first_name=Bogdan&last_name=Księżopolski&subject=Siema&email_body=Szanowny',
        'teacher-statistics':"http://127.0.0.1:8096/?type=it",
        'moria-parser':'http://localhost:9121/it-institute',
        'scholarship-revaluation':'http://localhost:8090/?scholarship=SOCJALNE&level=FIRST&currency=USD',
        'weather-data':'http://127.0.0.1:8097/?cities=lublin'
    }

    def __init__(self):
        self.service_dictionary={}
        self.service_dictionary_lock=threading.Lock()
        for key, val in CheckServicesService.services.items():
            self.service_dictionary[key]=None

    def set_service_dicionary(self, name, val):
        self.service_dictionary_lock.acquire()
        self.service_dictionary[name]=val
        self.service_dictionary_lock.release()

    def check_service(self, name_address_tuple):
        name=name_address_tuple[0]
        addr=name_address_tuple[1]
        try:
            r=requests.get(addr, timeout=2)
            self.set_service_dicionary(name,'UP')
        except:
            self.set_service_dicionary(name,'DOWN')

    def check(self):
        tmp_list=[(key,val) for key,val in CheckServicesService.services.items()]
        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(self.check_service, tmp_list)
        return self.service_dictionary


