import pandas as pd
import numpy as np
import os
import json

class results(object):
    def __init__(self, pathResponse):
        self.pathResponse = pathResponse
        self.sdm_dataset = pd.read_csv(self.pathResponse+"sdm.csv")
        self.data = {"responseGraph":{}, "responseStatistics":{}, "WT_DEPTH":{}, "MT_RSA":{}, "MT_DEPTH":{}, "Predicted_DDG":{}}
    def responseGraph(self):
        residuesValidsDic = {'NEUTRAL': 0, 'STABILIZING': 0, 'DESTABILIZING': 0}
        for element in self.sdm_dataset['Class']: #elementos de la columna 
            for residue in residuesValidsDic: #residuos del diccionario
                if(element == residue):
                    residuesValidsDic.update({residue:residuesValidsDic.get(residue)+1})
        keys = list(residuesValidsDic.keys())
        values = list(residuesValidsDic.values())
        self.data['responseGraph'].update({"counter_x":keys})
        self.data['responseGraph'].update({"counter_y":values})

    def WT_RSA(self):
        statistics = {'Minimum': 0, 'Maximum': 0, 'Mean': 0, 'Standard deviation': 0}
        attributes = ['WT_RSA','WT_DEPTH','MT_RSA','MT_DEPTH','Predicted_DDG']
        for element in attributes:
            statistics.update({'Minimum':np.min(self.sdm_dataset[element])})    
            statistics.update({'Maximum':np.max(self.sdm_dataset[element])})   
            statistics.update({'Mean':np.mean(self.sdm_dataset[element])})   
            statistics.update({'Standard deviation':np.std(self.sdm_dataset[element])})
            self.data['responseStatistics'].update({element:statistics})
            statistics = {'Minimum': 0, 'Maximum': 0, 'Mean': 0, 'Standard deviation': 0}
        print(self.data['responseStatistics'])

            
    def count5(self):
        count = list(self.clean_dataset['pos'])
        self.data['count5'].update({"counter_x":count})

    def count6(self):
        residuesValidsDic = {'ALA': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'LYS': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ARG': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'HIS': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'PHE': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'THR': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'PRO': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'MET': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'GLY': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ASN': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ASP': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'GLN': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'GLU': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'SER': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'TYR': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'TRP': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'VAL': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ILE': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'LEU': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'CYS': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}}        
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