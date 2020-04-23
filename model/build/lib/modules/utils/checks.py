import pandas as pd
import urllib
import os
from Bio.PDB.PDBParser import PDBParser

class checks(object):

    def __init__(self, csv, pdb_code, path_download):
        self.dataset = pd.read_csv(csv)
        self.pdb_code = pdb_code
        self.path_download = path_download
        self.response = 0
        self.response_download_pdb = 0
        self.response_read_pdb = 0
        self.response_chains = 0
    def evaluateCsv(self):
        try:
            for key in self.dataset.keys():
                if(len(self.dataset[key])==0):
                    self.response = 1 #error
                    break
        except:
            self.response = 1 #error
    
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

    def evaluateChains(self):
        cadenas_csv = list(set(self.dataset['chain']))
        
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
        #cadenas_csv = list(set(self.dataset['chain']))
        #residuos_csv = list(set(self.dataset['wt']))
        #pos_csv = list(set(self.dataset['pos']))
        
        parser = PDBParser()#creamos un parse de pdb
        structure = parser.get_structure(self.pdb_code, self.path_download+self.pdb_code+".pdb")
        model = structure[0]
    
        self.lista_de_errores = pd.DataFrame(columns=["cadena","pos","residuo_csv","residuo_pdb"])
        residuos_pdb = []
        for chain in model:
            for residue in chain:
                            
                #print(chain.get_id()) #la cadena del pdb
                #print(residue.get_id()[1]) #pos del pdb
                #print(residue.get_resname()) #residuo del pdb
                data = "%s-%s-%s"%(str(chain.get_id()),str(residue.get_id()[1]),str(residue.get_resname()))
                residuos_pdb.append(data)
        
        residuos_csv = []
        for i in range(len(self.dataset)):
            data_csv = data = "%s-%s-%s"%(str(self.dataset["chain"][i]),str(self.dataset["pos"][i]),str(self.dataset["wt"][i]))
            residuos_csv.append(data_csv)  

        for residuo in residuos_csv:
            if (residuo not in residuos_pdb):
                respuesta = self.comparar(residuo, residuos_pdb)
                if (respuesta == -1):
                    residuo_lista = residuo.split("-")
                    self.lista_de_errores = self.lista_de_errores.append({"cadena":residuo_lista[0], "pos":residuo_lista[1], "residuo_csv":residuo_lista[2], "residuo_pdb":"-"}, ignore_index=True)
                else:
                    residuo_lista = residuo.split("-")
                    residuo_pdb = respuesta[0].split("-")
                    self.lista_de_errores = self.lista_de_errores.append({"cadena":residuo_lista[0], "pos":residuo_lista[1], "residuo_csv":residuo_lista[2], "residuo_pdb":residuo_pdb[2]}, ignore_index=True)

        self.lista_de_errores.to_csv(self.path_download+"errors.csv",index = False)


    def comparar(self, residuo_csv, lista_residuo_pdb):
        data1 = residuo_csv.split("-")
        candidato_cadena = []
        candidato_pos = []
        for resi in lista_residuo_pdb:
            if (data1[0] == resi.split("-")[0]):
                candidato_cadena.append(resi)
        if (len(candidato_cadena) == 0):
            return -1
        else:
            for resi in candidato_cadena:
                if (data1[1] == resi.split("-")[1]):
                    candidato_pos.append(resi)
            if (len(candidato_pos) == 0):
                return -1
            else:
                return candidato_pos

        
                                       
        
                
                                

        
