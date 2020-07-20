import pandas as pd
import os
import json

class statistics_dataset(object):
    def __init__(self, path_download, opc):
        self.path_download = path_download
        self.clean_dataset = pd.read_csv(self.path_download+"clean.csv")
        self.data = {"count1":{}, "count2":{}, "count3":{}, "count4":{}, "count5":{}, "count6":{}, "count7":{}}
        self.opc = opc
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
        residuesValidsDic = {'ALA': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'LYS': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ARG': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'HIS': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'PHE': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'THR': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'PRO': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'MET': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'GLY': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ASN': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ASP': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'GLN': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'GLU': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'SER': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'TYR': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'TRP': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'VAL': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'ILE': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'LEU': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}, 'CYS': {'ALA': 0, 'LYS': 0, 'ARG': 0, 'HIS': 0, 'PHE': 0, 'THR': 0, 'PRO': 0, 'MET': 0, 'GLY': 0, 'ASN': 0, 'ASP': 0, 'GLN': 0, 'GLU': 0, 'SER': 0, 'TYR': 0, 'TRP': 0, 'VAL': 0, 'ILE': 0, 'LEU': 0, 'CYS': 0}}        
        for index, fila in self.clean_dataset.iterrows():
            residuesValidsDic[fila['wt']].update({fila['mt']:residuesValidsDic[fila['wt']].get(fila['mt'])+1})
        keys = list(residuesValidsDic.keys())
        values = []
        for i in residuesValidsDic:
            values.append(list(residuesValidsDic[i].values()))
        
        self.data['count6'].update({"counter_x":keys})
        self.data['count6'].update({"counter_y":values})

    def count7(self):
        if (self.opc == 0): #prediccion - continuo
            count = list(self.clean_dataset['response'])
            self.data['count7'].update({"counter_x":count})
        else: #clasificacion - categorico
            values = list(self.clean_dataset['response'].value_counts().keys())
            counts = self.clean_dataset['response'].value_counts().tolist()
            self.data['count7'].update({"counter_x":values})
            self.data['count7'].update({"counter_y":counts})


        
    def json(self):
        with open(self.path_download+"statistics.json", 'w') as fp:
            json.dump(self.data, fp)