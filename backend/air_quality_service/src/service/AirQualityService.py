import json
import requests
import concurrent.futures
import typing



class AirQualityService:
    
    VALID_POLLUTION_TYPES=['SO2', 'NO2', 'PM10', 'PM2.5', 'CO', 'C6H6', 'O3']
    def __init__(self, city_names, pollution_types):
        self.URL_ALL_STATION_IDS    = "http://api.gios.gov.pl/pjp-api/rest/station/findAll"
        self.URL_SINGLE_SENSOR_ID   = "http://api.gios.gov.pl/pjp-api/rest/station/sensors/{}"
        self.URL_SINGLE_SENSOR_DATA = "http://api.gios.gov.pl/pjp-api/rest/data/getData/{}"

        self.is_at_least_one_pollution_valid=False
        self.is_at_least_one_city_valid=False

        self.city_names = city_names
        self.pollution_types= pollution_types

        
        self.check_valid_pollution_types()
        self.check_valid_city_names()

    def get_sensor_data_per_pollution_per_city(self):
        station_ids=self.get_station_ids()
        sensor_ids=self.get_sensor_ids(station_ids)
        sensor_values=self.get_sensors_data(sensor_ids)
        sensor_average_values=self.calculate_average_values(sensor_values)
        return sensor_average_values

    def check_valid_pollution_types(self):
        requested_pollution_types = [pollution_type for pollution_type in self.pollution_types if pollution_type in self.VALID_POLLUTION_TYPES]
        if len(requested_pollution_types) != 0:
            self.is_at_least_one_pollution_valid=True
            self.pollution_types=requested_pollution_types


    def check_valid_city_names(self):
        station_ids=self.get_station_ids()
        existing_cities= [e for e, v in station_ids.items() if len(v) != 0]
        if len(existing_cities) != 0:
            self.is_at_least_one_city_valid=True
            self.city_names=existing_cities


    def get_station_ids(self) -> typing.Dict[str, int]:
        station_ids_per_city={}

        for city in self.city_names:
            station_ids_per_city[city]=[]

        response=requests.get(self.URL_ALL_STATION_IDS)
        data = json.loads(response.text)

        for el in data:
            for city in self.city_names:
                if city in el['city']['name'].lower().strip() and len(station_ids_per_city[city]) < 4:
                    station_ids_per_city[city].append(el['id'])
                    break
        return station_ids_per_city

    def get_single_sensor_id(self, info : typing.Tuple[int, str, typing.Dict]) -> typing.Dict:
        station_id          = info[0]
        city_name           = info[1]
        sensor_ids_per_city = info[2]

        response=requests.get(self.URL_SINGLE_SENSOR_ID.format(station_id))
        data=json.loads(response.text)
        for sensor_data in data:
            for pollution in self.pollution_types:
                if pollution == sensor_data.get("param").get("paramCode"):
                    sensor_ids_per_city[city_name][pollution].append(sensor_data.get("id"))
                    break
            

    def get_sensor_ids(self, station_ids_per_city : typing.Dict) -> typing.Dict:
        sensor_ids_per_city={}
        for city in self.city_names:
            _={}
            for pollution in self.pollution_types:
                _[pollution]=[]
            sensor_ids_per_city[city]=_

        tmp_list=[]
        for key, val in station_ids_per_city.items():
            for i in val:
                tmp_list.append((i,key, sensor_ids_per_city))

        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(self.get_single_sensor_id, tmp_list)
        return sensor_ids_per_city




    def get_most_recent_nonnull_sensor_data(self, sensor_data_list : typing.List) -> float:
        
        for data_val in sensor_data_list:
            val = data_val.get("value")
            if str(val).strip().lower() != "null" and str(val).strip().lower() != "none" : 
                return val
        return "null"

    def get_single_sensor_data(self, info : typing.Tuple[int, str, typing.Dict]):
        sensor_id = info[0]
        city = info[1]
        sensor_values_per_city= info[2]
        response=requests.get(self.URL_SINGLE_SENSOR_DATA.format(sensor_id))
        data=json.loads(response.text)

        sensor_data=self.get_most_recent_nonnull_sensor_data(data.get("values"))

        if str(sensor_data).strip() != "null":
            sensor_values_per_city[city][data.get("key")].append(sensor_data)

        

    def get_sensors_data(self, sensors_ids_per_city : typing.Dict) -> typing.Dict:
        sensor_values_per_city={}
        for city in self.city_names:
            _={}
            for pollution in self.pollution_types:
                _[pollution]=[]
            sensor_values_per_city[city]=_

        tmp_list=[]
        for key, val in sensors_ids_per_city.items():
            for poll_type, ids in val.items():
                    for i in ids:
                        tmp_list.append((i, key, sensor_values_per_city))

        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(self.get_single_sensor_data, tmp_list)

        return sensor_values_per_city
        
        
    def calculate_average_values(self, sensor_values_per_city : typing.Dict) -> typing.Dict:
        tmp={}
        for city in self.city_names:
            _={}
            for pollution in self.pollution_types:
                _[pollution]=[]
            tmp[city]=_

        for city, pollutions in sensor_values_per_city.items():
            for pollution, values in pollutions.items():
                s=0
                for val in values:
                    s+=float(val)
                if len(values) != 0:
                    s=s/len(values)
                else:
                    s="null"
                tmp[city][pollution]=s
        return tmp

