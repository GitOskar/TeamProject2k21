
from flask import Blueprint, jsonify, request
import json
import requests
import sys
import os#sys.path.append(os.path.abspath('../service'))

from service.EmailScoreService import EmailScore
from service.ResponseParser import EmailScoreResponseParser

bp = Blueprint('email_score', __name__, url_prefix='/')

@bp.route('/', methods=['GET'])
def AirQualityController():
    first_name      = request.args.get("first_name")
    last_name       = request.args.get("last_name")
    subject         = request.args.get('subject')
    body            = request.args.get('email_body')
    s               = EmailScore(first_name,last_name,subject,body)
    p               = EmailScoreResponseParser(s.get_score())

    
    return jsonify(
        p.get_parsed_response()
    )