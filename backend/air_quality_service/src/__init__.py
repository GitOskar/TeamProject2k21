import config
import os
from flask import Flask

def create_app():
    app = Flask(__name__)
    enviroment_configuration = os.environ['CONFIGURATION_SETUP']
    print(f"obiekt: {enviroment_configuration}")
    app.config.from_object(enviroment_configuration)
    app.config['JSON_AS_ASCII'] = False
    with app.app_context():
        from .presentation import AirQualityController
        app.register_blueprint(AirQualityController.bp)
        return app