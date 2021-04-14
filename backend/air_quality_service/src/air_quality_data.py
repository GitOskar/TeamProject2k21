from flask import Blueprint, jsonify, request
import json
import requests
import concurrent.futures
import typing

bp = Blueprint('air_quality_data', __name__, url_prefix='/air-quality')

from service.AirQualityService import AirQualityService
from service.ResponseParser import ResponseParser

@bp.route('/', methods=['GET'])
def AirQualityController():



    requested_city_names      = request.args.get("cities")
    requested_pollution_types = request.args.get("pollutions")

    if requested_city_names == None or requested_pollution_types == None:
        return 'Bad Request 400', 400

    requested_city_names      = [city_name for city_name in requested_city_names.split(',') if city_name]
    requested_pollution_types = [pollution_type for pollution_type in requested_pollution_types.split(',') if pollution_type]
    
    service = AirQualityService(requested_city_names, requested_pollution_types)

    
    if service.is_at_least_one_city_valid and service.is_at_least_one_pollution_valid:
        parser = ResponseParser()
        data=service.get_sensor_data_per_pollution_per_city()
        return jsonify(
            parser.get_return_format(data)
        )

    return 'Bad Request 400', 400



