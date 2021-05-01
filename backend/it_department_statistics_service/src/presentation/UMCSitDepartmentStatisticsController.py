
from flask import Blueprint, jsonify, request
import json
import requests
import sys
import os#sys.path.append(os.path.abspath('../service'))

from service.statistics import UMCSitDepartmentStatistics


bp = Blueprint('email_score', __name__, url_prefix='/')

@bp.route('/', methods=['GET'])
def UMCSitDepartmentStatisticsController():
    type      = request.args.get("type")

    if type != 'it' and type != 'rest':
        return 'Bad Request 400', 400
    
    s=UMCSitDepartmentStatistics(type)
    return jsonify(
        s.get_statistics()
    )