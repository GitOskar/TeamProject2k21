
import sys, os

run_directory_path=os.path.dirname(__file__)
sys.path.append(f'{run_directory_path}/src')


import src
app = src.create_app()

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=8097)