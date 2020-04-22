import pandas as pd
import urllib
import os
from Bio.PDB.PDBParser import PDBParser

class checks(object):

    def __init__(self, csv, pdb_code, path_download):
        self.dataset = pd.read_csv (csv)
        self.pdb_code = pdb_code
        self.response = 0
        self.path_download = path_download
        self.response_download_pdb = 0
        self.response_read_pdb = 0
        self.response_chains = 0
    def evaluateCsv(self):
        try:
            for key in self.dataset.keys():
                if(len(self.dataset[key])==0):
                    self.response = 1
                    break
        except:
            self.response = 1        
    #to remove null values in dataset
    def evaluateNullData(self):
        len1 = len(self.dataset)
        self.dataset = self.dataset.dropna(how='any',axis=0)
        len2 = len(self.dataset)
        self.dif = len1-len2

    def evaluatePdbDownload(self):
        ruta = "http://files.rcsb.org/download/"+self.pdb_code+".pdb"
        archivo = self.pdb_code+".pdb"
        try:
            download = urllib.request.urlretrieve(ruta,self.path_download+archivo)
            self.response_download_pdb = 0 #correcto
        except:
            self.response_download_pdb = 1 

    def evaluatePdb(self):
        residuesValids = ['ALA', 'LYS', 'ARG', 'HIS', 'PHE', 'THR', 'PRO', 'MET', 'GLY', 'ASN', 'ASP', 'GLN', 'GLU', 'SER', 'TYR', 'TRP', 'VAL', 'ILE', 'LEU', 'CYS']
        ListResidues = []
        #pdb_name = os.path.split(self.pdb)
        #print(pdb_name[1])
        try:
            parser = PDBParser()#creamos un parse de pdb
            structure = parser.get_structure(self.pdb_code, self.path_download+self.pdb_code+".pdb")
            residuesFull = structure.get_residues()
            for model in structure:
                for chain in model:
                    for residue in chain:
                        if residue.resname in residuesValids:
                            ListResidues.append(residue)
            if len(ListResidues)>0:
                self.response_read_pdb = 0 #correcto
            else:
                self.response_download_pdb = 1
        except:
            self.response_download_pdb = 1
            #print(ListResidues)

    def evaluateChains(self):
        #csv = pd.read_csv(self.csv)
        #csv = csv.dropna(how='any',axis=0)

        #pdb = self.pdb

        
        cadenas_csv = list(set(self.dataset['chain']))
        
        
        #pdb_name = os.path.split(pdb)
        
        cadenas_pdb = []
        parser = PDBParser()#creamos un parse de pdb
        structure = parser.get_structure(self.pdb_code, self.path_download+self.pdb_code+".pdb")
        residuesFull = structure.get_residues()

        for chain in structure.get_chains():
            cadenas_pdb.append(chain.get_id())

        cadenas_encontradas = 0
        for i in cadenas_csv:
            if (i in cadenas_pdb):         
                cadenas_encontradas+=1
        if (cadenas_encontradas == len(cadenas_csv)):
            self.response_chains = 0 #correcto
        else:
            self.response_chains = 1
    def evaluateResidues(self):
        #csv = pd.read_csv(self.csv)
        #csv = csv.dropna(how='any',axis=0)
        #pdb = self.pdb
        cadenas_csv = list(set(self.dataset['chain']))
        residuos_csv = list(set(self.dataset['wt']))
        pos_csv = list(set(self.dataset['pos']))
        #pdb_name = os.path.split(pdb)
        
        
        
        parser = PDBParser()#creamos un parse de pdb
        structure = parser.get_structure(self.pdb_code, self.path_download+self.pdb_code+".pdb")
        model = structure[0]
    
        self.lista_de_errores = pd.DataFrame(columns=["cadena","pos","residuo_csv","residuo_pdb"])

        for chain in model:
            for chain_csv in cadenas_csv:
                for residue in chain:
                    for residue_csv in residuos_csv:
                        for pos in pos_csv:
                            if (chain_csv == chain.get_id() and pos == residue.get_id()[1]):
                                if (residue_csv == residue.get_resname()):
                                    print("ok")
                                else:
                                    self.lista_de_errores.append({"cadena":chain.get_id(), "pos":residue.get_id()[1], "residuo_csv":residue_csv, "residuo_pdb":residue.get_resname()}, ignore_index=True)
        self.lista_de_errores.to_csv(self.path_download+"errors.csv",index = False)
                
                                

        
