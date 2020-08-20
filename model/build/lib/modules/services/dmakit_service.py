import sys  
import pandas as pd
import os
import json

class dmakit_service(object):
    def __init__(self, pathResponse):
        self.pathResponse = pathResponse
        self.json_file = pathResponse+"dmakit_input.json"
    def dmakit(self):
        with open(self.json_file) as f:
            inputs = json.load(f)
        
        if (inputs['algorithm'] == 'AdaBoostRegressor'):
            print("si")
        else:
            print("no")

