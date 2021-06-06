from flask import Blueprint, jsonify, request
import json
import requests
import concurrent.futures
import typing
from service.CheckServicesService import CheckServicesService


bp = Blueprint('weaher_data', __name__, url_prefix='/')

@bp.route('/', methods=['GET'])
def CheckServicesServiceController():  
    
    service = CheckServicesService()

    data=service.check()
    return jsonify(data)

