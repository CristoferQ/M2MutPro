import pandas as pd
import os
from Bio.PDB.PDBParser import PDBParser
import json

class prepare_dataset(object):

    def __init__(self, csv, pdb_code, path_download):
        self.dataset = pd.read_csv(csv)
        self.dataset_name = csv
        self.pdb_code = pdb_code
        self.path_download = path_download
        
    def cambiar(self):
        for index, lista in lista_de_errores.iterrows():
            for index, dato in self.dataset.iterrows():
                if (lista['cadena'] == dato['chain'] and lista['posi'] == str(dato['pos'])):
                    if (lista['residuo_pdb'] != str("-")):
                        #el que tiene - no se cuenta
                        #tener cuidado con los index cuando se elimina
                        self.dataset.at[index, "wt"] = lista['residuo_pdb']#index, columna = valor  
        self.dataset.to_csv(self.path_download+"clean.csv",index = False)
        
    
            



        
                                       
        
                
                                

        
