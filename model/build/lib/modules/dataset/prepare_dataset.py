import pandas as pd
import os
import json

class prepare_dataset(object):

    def __init__(self, csv, path_download):
        self.dataset = pd.read_csv(csv)
        self.dataset_name = csv
        self.path_download = path_download
        
    def filter(self):
        dataset_errores = pd.read_csv(self.path_download+"errors.csv")
        print(dataset_errores)
        print(self.dataset)
        for index_errores, lista in dataset_errores.iterrows():
            for index_dataset, dato in self.dataset.iterrows():
                if (lista['cadena'] == dato['chain'] and lista['posi'] == (dato['pos'])):
                    if (lista['residuo_pdb'] != str("-")):
                        #el que tiene - no se cuenta
                        #tener cuidado con los index cuando se elimina
                        self.dataset.at[index_errores, "wt"] = lista['residuo_pdb']#index, columna = valor  
                        
                    if (lista['residuo_pdb'] == str("-")):
                        self.dataset = self.dataset.drop(index_dataset)
        self.dataset = self.dataset.reset_index(drop=True)

        print(self.dataset)
        #self.dataset.to_csv(self.path_download+"clean.csv",index = False)
    def ignore(self):
        dataset_errores = pd.read_csv(self.path_download+"errors.csv")
        print(dataset_errores)
        print(self.dataset)
        for index_errores, lista in dataset_errores.iterrows():
            for index_dataset, dato in self.dataset.iterrows():
                if (lista['cadena'] == dato['chain'] and lista['posi'] == (dato['pos'])):
                    if (lista['residuo_pdb'] != str("-")):
                        self.dataset = self.dataset.drop(index_dataset)
                        self.dataset = self.dataset.reset_index(drop=True)
                    if (lista['residuo_pdb'] == str("-")):
                        self.dataset = self.dataset.drop(index_dataset)
                        self.dataset = self.dataset.reset_index(drop=True)
        print(self.dataset)
        

    
            



        
                                       
        
                
                                

        
