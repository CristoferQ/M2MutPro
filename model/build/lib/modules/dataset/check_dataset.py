import pandas as pd
import urllib
import os
from Bio.PDB.PDBParser import PDBParser
import json

class check_dataset(object):
    def __init__(self, csv, pdb_code, path_download):
        self.dataset = pd.read_csv(csv)
        self.dataset_name = csv
        self.pdb_code = pdb_code
        self.path_download = path_download
        self.response_read_csv = 0
        self.response_download_pdb = 0
        self.response_read_pdb = 0
        self.response_chains = 0
        self.responde_null_data = 0
    def evaluateCsv(self): #evalua si el csv no esta vacio
        try:
            for key in self.dataset.keys():
                if(len(self.dataset[key])==0):
                    self.response_read_csv = 1 #error
                    break
        except:
            self.response_read_csv = 1 #error
    
    def evaluateNullData(self): #evalua los datos nulos del csv
        len1 = len(self.dataset)
        self.dataset = self.dataset.dropna(how='any',axis=0)
        len2 = len(self.dataset)
        dif = len1-len2
        self.responde_null_data = dif
        #self.dataset.to_csv(self.dataset_name,index = False)
        self.dataset.to_csv(self.path_download+"dirty.csv",index = False)

    def evaluatePdbDownload(self): #evalua si se pudo descargar el pdb o no
        ruta = "http://files.rcsb.org/download/"+self.pdb_code+".pdb"
        archivo = self.pdb_code+".pdb"
        try:
            download = urllib.request.urlretrieve(ruta,self.path_download+archivo)
            self.response_download_pdb = 0 #correcto
        except:
            self.response_download_pdb = 1 

    def evaluatePdb(self): #evalua si en el pdb existen residuos
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
                self.response_read_pdb = 1
        except:
            self.response_read_pdb = 1

    def evaluateChains(self):#evalua si las cadenas en el csv existen en el pdb
        cadenas_csv = list(set(self.dataset['chain']))
        
        cadenas_pdb = []
        parser = PDBParser()
        structure = parser.get_structure(self.pdb_code, self.path_download+self.pdb_code+".pdb")
        residuesFull = structure.get_residues()
        try:
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
        except:
            self.response_read_pdb = 1
    def evaluateResidues(self): #evalua si la informacion del csv (cad, pos, wt_csv, wt_pdb) es correcta
        data_to_matrix = []#ademas se crea una lista para posteriormente crear un json
        parser = PDBParser()
        structure = parser.get_structure(self.pdb_code, self.path_download+self.pdb_code+".pdb")
        model = structure[0]
    
        self.lista_de_errores = pd.DataFrame(columns=["cadena","posi","residuo_csv","residuo_pdb"])
        residuos_pdb = []
        for chain in model:
            for residue in chain:
                data = "%s-%s-%s"%(str(chain.get_id()),str(residue.get_id()[1]),str(residue.get_resname()))
                residuos_pdb.append(data)
        
        residuos_csv = []
        for i in range(len(self.dataset)):
            data_csv = "%s-%s-%s"%(str(self.dataset["chain"][i]),str(self.dataset["pos"][i]),str(self.dataset["wt"][i]))
            residuos_csv.append(data_csv)  

        for residuo in residuos_csv:
            if (residuo not in residuos_pdb):
                respuesta = self.compare(residuo, residuos_pdb) #se llama a metodo compare
                row = []#se crea la row para ingresar a data_to_matrix
                if (respuesta == -1):
                    residuo_lista = residuo.split("-")
                    row = [residuo_lista[0],residuo_lista[1], residuo_lista[2],"-"]
                    self.lista_de_errores = self.lista_de_errores.append({"cadena":residuo_lista[0], "posi":residuo_lista[1], "residuo_csv":residuo_lista[2], "residuo_pdb":"-"}, ignore_index=True)
                else:
                    residuo_lista = residuo.split("-")
                    residuo_pdb = respuesta[0].split("-")
                    self.lista_de_errores = self.lista_de_errores.append({"cadena":residuo_lista[0], "posi":residuo_lista[1], "residuo_csv":residuo_lista[2], "residuo_pdb":residuo_pdb[2]}, ignore_index=True)
                    row = [residuo_lista[0],residuo_lista[1], residuo_lista[2],residuo_pdb[2]]
                data_to_matrix.append(row)
        self.lista_de_errores.to_csv(self.path_download+"errors.csv",index = False)

        #procesa la data a un json
        data_json = {"data":data_to_matrix}
        with open(self.path_download+"error.json", 'w') as fp:
            json.dump(data_json, fp)


    def compare(self, residuo_csv, lista_residuo_pdb):
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
        
            



        
                                       
        
                
                                

        
