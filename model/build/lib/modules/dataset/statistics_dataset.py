import pandas as pd
import os
import json

class statistics_dataset(object):
    def __init__(self, path_download):
        self.path_download = path_download
        self.clean_dataset = pd.read_csv(self.path_download+"clean.csv")
        self.data = {"count1":{}, "count2":{}, "count3":{}, "count4":{}, "count5":{}, "count6":{}, "count7":{}, "count8":{}}
    def count1(self):
        residuesValidsDic = {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}
        for element in self.clean_dataset['wt']: #elementos de la columna 
            for residue in residuesValidsDic: #residuos del diccionario
                if(element == residue):
                    residuesValidsDic.update({residue:residuesValidsDic.get(residue)+1})
        keys = list(residuesValidsDic.keys())
        values = list(residuesValidsDic.values())
        self.data['count1'].update({"counter_x":keys})
        self.data['count1'].update({"counter_y":values})

    def count2(self):
        residuesValidsDic = {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}
        for element in self.clean_dataset['mt']:
            for residue in residuesValidsDic:
                if(element == residue):
                    residuesValidsDic.update({residue:residuesValidsDic.get(residue)+1})
        keys = list(residuesValidsDic.keys())
        values = list(residuesValidsDic.values())
        self.data['count2'].update({"counter_x":keys})
        self.data['count2'].update({"counter_y":values})

    def count3(self):
        typesValidsDic = {'NonPolar': 0, 'Polar, uncharged': 0, 'Acidic': 0, 'Basic': 0}
        for element in self.clean_dataset['wt']:
                if(element == 'ALA' or element == 'VAL' or element == 'LEU' or element == 'GLY' or element == 'ILE'or element == 'MET' or element == 'TRP' or element == 'PHE' or element == 'PRO'):
                    typesValidsDic.update({'NonPolar':typesValidsDic.get('NonPolar')+1})
                elif(element == 'SER' or element == 'CYS' or element == 'ASN' or element == 'GLN' or element == 'THR'or element == 'TYR'):
                    typesValidsDic.update({'Polar, uncharged':typesValidsDic.get('Polar, uncharged')+1})
                elif(element == 'ASP' or element == 'GLU'):
                    typesValidsDic.update({'Acidic':typesValidsDic.get('Acidic')+1})
                elif(element == 'LYS' or element == 'ARG' or element == 'HIS'):
                    typesValidsDic.update({'Basic':typesValidsDic.get('Basic')+1})
        keys = list(typesValidsDic.keys())
        values = list(typesValidsDic.values())
        self.data['count3'].update({"counter_x":keys})
        self.data['count3'].update({"counter_y":values})

        
    def count4(self):
        typesValidsDic = {'NonPolar': 0, 'Polar, uncharged': 0, 'Acidic': 0, 'Basic': 0}
        for element in self.clean_dataset['mt']:
                if(element == 'ALA' or element == 'VAL' or element == 'LEU' or element == 'GLY' or element == 'ILE'or element == 'MET' or element == 'TRP' or element == 'PHE' or element == 'PRO'):
                    typesValidsDic.update({'NonPolar':typesValidsDic.get('NonPolar')+1})
                elif(element == 'SER' or element == 'CYS' or element == 'ASN' or element == 'GLN' or element == 'THR'or element == 'TYR'):
                    typesValidsDic.update({'Polar, uncharged':typesValidsDic.get('Polar, uncharged')+1})
                elif(element == 'ASP' or element == 'GLU'):
                    typesValidsDic.update({'Acidic':typesValidsDic.get('Acidic')+1})
                elif(element == 'LYS' or element == 'ARG' or element == 'HIS'):
                    typesValidsDic.update({'Basic':typesValidsDic.get('Basic')+1})
        keys = list(typesValidsDic.keys())
        values = list(typesValidsDic.values())
        self.data['count4'].update({"counter_x":keys})
        self.data['count4'].update({"counter_y":values})

    def count5(self):
        count = list(self.clean_dataset['pos'])
        self.data['count5'].update({"counter_x":count})

    def count6(self):
        residuesValidsDic = {'ALA': {}, 'LYS': {}, 'ARG': {}, 'HIS': {}, 'PHE': {}, 'THR': {}, 'PRO': {}, 'MET': {}, 'GLY': {}, 'ASN': {}, 'ASP': {}, 'GLN': {}, 'GLU': {}, 'SER': {}, 'TYR': {}, 'TRP': {}, 'VAL': {}, 'ILE': {}, 'LEU': {}, 'CYS': {}}        
        for index, fila in self.clean_dataset.iterrows():
            if(residuesValidsDic[fila['wt']].get(fila['mt']) == None):
                residuesValidsDic[fila['wt']].update({fila['mt']:1})
            else:
                residuesValidsDic[fila['wt']].update({fila['mt']:residuesValidsDic[fila['wt']].get(fila['mt'])+1})
        print(residuesValidsDic)
        
        

    def json(self):
        with open(self.path_download+"statistics.json", 'w') as fp:
            json.dump(self.data, fp)