

class ResponseParser:
    def get_return_format(self,sensor_average_values):
        tmp=[]
        for city_names, pollutions in sensor_average_values.items():
            _={}
            _['city_name']=city_names
            _['pollution_types']=pollutions
            tmp.append(_)
        return tmp