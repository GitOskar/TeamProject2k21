import os 
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), '.env')


if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

class Config:
    SECRET_KEY="hNL5FO3jfbIxKj3jH4rzzw"

class DevelopmentConfig(Config):
    ENV   = "development"
    DEBUG = True

class ProductionConfig(Config):
    pass