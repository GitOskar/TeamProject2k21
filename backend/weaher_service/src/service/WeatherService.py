import requests
import json
import pprint
import concurrent.futures

class WeatherService:

    api_key="cca52d4f59d548b4b199aa725db8aaa4"
    def __init__(self):
        self.city_name=None
        self.city_infos=[]

    def gather_weather_data(self, city_names):
        self.city_infos=[]
        self.city_names=city_names

        with concurrent.futures.ThreadPoolExecutor() as executor:
            executor.map(self.__get_city_weather_data, self.city_names)
        #pprint.pprint(self.city_infos)
        return self.city_infos
        
        
    def __get_city_weather_data(self, city_name):
        url=f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&units=metric&appid={WeatherService.api_key}"
        r= requests.get(url)
        data=json.loads(r.text)
        data['city_name']=city_name.lower()
        self.__parse_data(data)

    def __parse_data(self, data):
        city_name=data['city_name']
        code=int(data['cod'])
        if code != 200:
            self.city_infos.append({
                'status'    : code,
                'city_name' : city_name
            })
        else:
            cloud_percentage=int(data['clouds']['all'])
            temp_c=float(data['main']['temp'])
            wind_speed=float(data['wind']['speed'])
            is_raining=data.get('rain')
            rain='no'
            if is_raining != None:
                rain='yes'
            tmp={
                'status'    : 200,
                'city_name' : city_name,
                'temperature' : temp_c,
                'cloud_coverage' : cloud_percentage,
                'wind_speed' : wind_speed,
                'rain' : rain
            }
            self.city_infos.append(tmp)
    def get_data(self):
        pass

s = WeatherService()
s.gather_weather_data(["warszawa", 'kraków', 'lublin','new york'])
