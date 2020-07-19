import pandas as pd
import os
import json

class prepare_dataset(object):

    def __init__(self, csv, path_download):
        self.dataset = pd.read_csv(csv)
        self.dataset_name = csv
        self.path_download = path_download
        
    def filter(self):
        print(self.dataset)
        dataset_errores = pd.read_csv(self.path_download+"errors.csv")
        for index_errores, lista in dataset_errores.iterrows():
            for index_dataset, dato in self.dataset.iterrows():
                if (lista['residuo_csv'] == dato['wt'] and lista['posi'] == (dato['pos'])):
                    if (lista['residuo_pdb'] == str("-")):
                        self.dataset = self.dataset.drop(index_dataset)
                        self.dataset = self.dataset.reset_index(drop=True)

        for index_errores, lista in dataset_errores.iterrows():
            for index_dataset, dato in self.dataset.iterrows():
                if (lista['residuo_csv'] == dato['wt'] and lista['posi'] == (dato['pos'])):
                    if (lista['residuo_pdb'] != str("-")):
                        self.dataset.loc[self.dataset['wt'] == dato['wt'], ['wt']] = lista['residuo_pdb']
        self.dataset.to_csv(self.path_download+"clean.csv",index = False)
    def ignore(self):
        dataset_errores = pd.read_csv(self.path_download+"errors.csv")
        for index_errores, lista in dataset_errores.iterrows():
            for index_dataset, dato in self.dataset.iterrows():
                if (lista['residuo_csv'] == dato['wt'] and lista['posi'] == (dato['pos'])):
                        self.dataset = self.dataset.drop(index_dataset)
                        self.dataset = self.dataset.reset_index(drop=True)
        
        self.dataset.to_csv(self.path_download+"clean.csv",index = False)

    
            



        
                                       
        
                
                                

        
