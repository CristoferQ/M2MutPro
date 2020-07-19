import pandas as pd
import numpy as np
import os
import json

class results(object):
    def __init__(self, pathResponse):
        self.pathResponse = pathResponse
        self.sdm_dataset = pd.read_csv(self.pathResponse+"sdm.csv")
        self.data = {"responseGraph":{}, "responseStatistics":{}, "continuousAttributes":{}, "categoricalAttributes":{}}
    
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
        attributes = ['WT_RSA','WT_DEPTH','MT_RSA','MT_DEPTH','Predicted_DDG']
        for index, fila in self.clean_dataset.iterrows():
            residuesValidsDic[fila['wt']].update({fila['mt']:residuesValidsDic[fila['wt']].get(fila['mt'])+1})
        keys = list(residuesValidsDic.keys())
        values = []
        for i in residuesValidsDic:
            values.append(list(residuesValidsDic[i].values()))
        
        self.data['count6'].update({"counter_x":keys})
        self.data['count6'].update({"counter_y":values})
        
    def json(self):
        with open(self.pathResponse+"results.json", 'w') as fp:
            json.dump(self.data, fp)