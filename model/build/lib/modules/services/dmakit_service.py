import sys  
import pandas as pd
import os
import json
from modulesProject.supervised_learning_predicction import execModelPrediction

class dmakit_service(object):
    def __init__(self, pathResponse):
        #self.pathResponse = pathResponse
        self.json_file = pathResponse+"dmakit_input.json"

    def dmakit(self):
        #with open(self.json_file) as f:
        #    inputs = json.load(f)
        
        #if (inputs['algorithm'] == 'AdaBoostRegressor'):
        print("ok")
        nombre = "hola-como-estas"
        print(nombre.split("-"))
        execProcess = execModelPrediction.execAlgorithm(pd.read_csv('/var/www/html/M2MutPro/jobs/1/1595288162/results/clean.csv'), 1, 1, '/var/www/html/M2MutPro/jobs/1/1593238659', 'AdaBoostRegressor', ['linear','1'], 'pos', 2)
        execProcess.execAlgorithmByOptions()