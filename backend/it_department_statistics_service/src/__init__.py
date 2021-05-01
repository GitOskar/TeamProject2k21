import config
import os
from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    enviroment_configuration = os.environ['CONFIGURATION_SETUP']
    print(f"obiekt: {enviroment_configuration}")
    app.config.from_object(enviroment_configuration)
    app.config['JSON_AS_ASCII'] = False
    with app.app_context():
        from .presentation import UMCSitDepartmentStatisticsController
        app.register_blueprint(UMCSitDepartmentStatisticsController.bp)
        return app