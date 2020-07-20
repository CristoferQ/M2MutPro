import pandas as pd
import numpy as np
import os
import json

class results(object):
    def __init__(self, pathResponse):
        self.pathResponse = pathResponse
        self.sdm_dataset = pd.read_csv(self.pathResponse+"sdm.csv")
        self.data = {"responseGraph":{}, "responseStatistics":{}, "continuousAttributes":{}, "categoricalAttributes":{'WT_SSE':{},'WT_SS':{},'WT_SN':{},'WT_SO':{},'MT_SSE':{},'MT_SS':{},'MT_SN':{},'MT_SO':{},'Class':{}}}
    
    def responseStatistics(self):
        statistics = {'Minimum': 0, 'Maximum': 0, 'Mean': 0, 'Standard deviation': 0}
        attributes = ['WT_RSA','WT_DEPTH','MT_RSA','MT_DEPTH','Predicted_DDG']
        for element in attributes:
            statistics.update({'Minimum':np.min(self.sdm_dataset[element])})    
            statistics.update({'Maximum':np.max(self.sdm_dataset[element])})   
            statistics.update({'Mean':np.mean(self.sdm_dataset[element])})   
            statistics.update({'Standard deviation':np.std(self.sdm_dataset[element])})
            self.data['responseStatistics'].update({element:statistics})
            statistics = {'Minimum': 0, 'Maximum': 0, 'Mean': 0, 'Standard deviation': 0}
        #print(self.data['responseStatistics'])
               
    def continuousAttributes(self):#histograma
        attributes = ['WT_RSA','WT_DEPTH','MT_RSA','MT_DEPTH','Predicted_DDG']
        for element in attributes:
                self.data['continuousAttributes'].update({element:list(self.sdm_dataset[element])})
        #print(self.data['continuousAttributes'])

    def categoricalAttributes (self):#pie
        attributes = ['WT_SSE','WT_SS','WT_SN','WT_SO','MT_SSE','MT_SS','MT_SN','MT_SO','Class']
        for element in attributes:
            values = list(self.sdm_dataset[element].value_counts().keys())
            counts = self.sdm_dataset[element].value_counts().tolist()
            k = 0
            for i in values:
                self.data['categoricalAttributes'][element].update({i:counts[k]})
                k = k+1                
            
        #print(self.data['categoricalAttributes'])
        
    def json(self):
        with open(self.pathResponse+"results.json", 'w') as fp:
            json.dump(self.data, fp)