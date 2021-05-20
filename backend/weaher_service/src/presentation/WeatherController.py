from flask import Blueprint, jsonify, request
import json
import requests
import concurrent.futures
import typing
from service.WeatherService import WeatherService


bp = Blueprint('weaher_data', __name__, url_prefix='/')

@bp.route('/', methods=['GET'])
def AirQualityController():
    requested_city_names      = request.args.get("cities")

    if requested_city_names == None:
        return 'Bad Request 400', 400

    requested_city_names      = [city_name for city_name in requested_city_names.split(',') if city_name]
    
    
    service = WeatherService()

    data=service.gather_weather_data(requested_city_names)
    return jsonify(data)

    return 'Bad Request 400', 400
