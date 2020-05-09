import pandas as pd
import os
import json

class statistics_dataset(object):
    def __init__(self, path_download):
        self.path_download = path_download
        self.residuesValids = ['ALA', 'LYS', 'ARG', 'HIS', 'PHE', 'THR', 'PRO', 'MET', 'GLY', 'ASN', 'ASP', 'GLN', 'GLU', 'SER', 'TYR', 'TRP', 'VAL', 'ILE', 'LEU', 'CYS']
        self.clean_dataset = pd.read_csv(self.path_download+"clean.csv")
        self.data = {}
    def count1(self):
        residuesValidsDic = {'VAL': 0, 'SER': 0}
        for element in self.clean_dataset['wt']: #elementos de la columna 
            for residue in residuesValidsDic: #residuos del diccionario
                if(element == residue):
                    residuesValidsDic.update({residue:residuesValidsDic.get(residue)+1})
        print(residuesValidsDic)
        
        self.data.update({"count1":residuesValidsDic})

    def count2(self):
        residuesValidsDic = {'VAL': 0, 'SER': 0}
        for element in self.clean_dataset['mt']:
            for residue in residuesValidsDic:
                if(element == residue):
                    residuesValidsDic.update({residue:residuesValidsDic.get(residue)+1})
        print(residuesValidsDic)
        
        self.data.update({"count2":residuesValidsDic})
        
    def count3(self):
        typesValidsDic = {'NonPolar': 0, 'Polar, uncharged': 0, 'Acidic': 0, 'Basic': 0}
        for element in self.clean_dataset['wt']:
                if(element == 'SER'):
                    typesValidsDic.update({'Polar, uncharged':typesValidsDic.get('Polar, uncharged')+1})
                elif(element == 'VAL'):
                    typesValidsDic.update({'NonPolar':typesValidsDic.get('NonPolar')+1})
        print(typesValidsDic)
        
        self.data.update({"count3":typesValidsDic})

    def count4(self):
        typesValidsDic = {'NonPolar': 0, 'Polar, uncharged': 0, 'Acidic': 0, 'Basic': 0}
        for element in self.clean_dataset['mt']:
                if(element == 'SER'):
                    typesValidsDic.update({'Polar, uncharged':typesValidsDic.get('Polar, uncharged')+1})
                elif(element == 'VAL'):
                    typesValidsDic.update({'NonPolar':typesValidsDic.get('NonPolar')+1})
        print(typesValidsDic)
        
        self.data.update({"count4":typesValidsDic})

    def counter(self):
        residuesValidsDic = {'VAL': 0, 'SER': 0}
        for element in self.clean_dataset['wt']: #elementos de la columna 
            for residue in residuesValidsDic: #residuos del diccionario
                if(element == residue):
                    residuesValidsDic.update({residue:residuesValidsDic.get(residue)+1})
        print(residuesValidsDic)
        keys = list(residuesValidsDic.keys())
        values = list(residuesValidsDic.values())
        self.data.update({"counter_x":keys})
        self.data.update({"counter_y":values})

    def json(self):
        with open(self.path_download+"statistics.json", 'w') as fp:
            json.dump(self.data, fp)