import pandas as pd
import urllib
import os
from Bio.PDB.PDBParser import PDBParser

class checks(object):

    def __init__(self, csv, pdb_code, pdb):
        self.csv = csv
        self.pdb_code = pdb_code
        self.pdb = pdb
    def evaluateCsv(self):
        try:
            csv = pd.read_csv(self.csv)
            if(len(csv["chain"])!=0 and len(csv["wt"])!=0):
                print("ok")
        except:
            print("error")        
    #to remove null values in dataset
    def evaluateNullData(self):
        csv = pd.read_csv(self.csv)
        len1 = len(csv)
        csv2 = csv.dropna(how='any',axis=0)
        len2 = len(csv2)
        print("Datos nulos",len1-len2)
    def evaluatePdbDownload(self):
        pdb_code = self.pdb_code
        ruta = "http://files.rcsb.org/download/"+pdb_code+".pdb"
        archivo = pdb_code+".pdb"
        try:
            download = urllib.request.urlretrieve(ruta, "/home/ceql/Escritorio/"+archivo)
            print("ok")
        except:
            print("error")
    def evaluatePdb(self):
        pdb = self.pdb
        residuesValids = ['ALA', 'LYS', 'ARG', 'HIS', 'PHE', 'THR', 'PRO', 'MET', 'GLY', 'ASN', 'ASP', 'GLN', 'GLU', 'SER', 'TYR', 'TRP', 'VAL', 'ILE', 'LEU', 'CYS']
        ListResidues = []
        pdb_name = os.path.split(pdb)
        #print(pdb_name[1])
        parser = PDBParser()#creamos un parse de pdb
        structure = parser.get_structure(pdb_name[1], pdb)
        residuesFull = structure.get_residues()
        for model in structure:
            for chain in model:
                for residue in chain:
                    if residue.resname in residuesValids:
                        ListResidues.append(residue)
        #print(ListResidues)
    def evaluateChains(self):
        csv = pd.read_csv(self.csv)
        csv = csv.dropna(how='any',axis=0)
        pdb = self.pdb
        cadenas_csv = []
        cadenas_csv = list(set(csv['chain']))
        
        
        pdb_name = os.path.split(pdb)
        
        cadenas_pdb = []
        parser = PDBParser()#creamos un parse de pdb
        structure = parser.get_structure(pdb_name[1], pdb)#trabajamos con la proteina cuyo archivo es 1AQ2.pdb
        residuesFull = structure.get_residues()

        for chain in structure.get_chains():
            cadenas_pdb.append(chain.get_id())

        cadenas_encontradas = 0
        for i in cadenas_csv:
            if (i in cadenas_pdb):         
                cadenas_encontradas+=1
        if (cadenas_encontradas == len(cadenas_csv)):
            print("ok evaluate chain")
        else:
            print("error")
    def evaluateResidues(self):
        csv = pd.read_csv(self.csv)
        csv = csv.dropna(how='any',axis=0)
        pdb = self.pdb
        cadenas_csv = list(set(csv['chain']))
        residuos_csv = list(set(csv['wt']))
        pos_csv = list(set(csv['pos']))
        print(cadenas_csv)
        print(residuos_csv)
        print(pos_csv)
        pdb_name = os.path.split(pdb)
        
        
        
        parser = PDBParser()#creamos un parse de pdb
        structure = parser.get_structure(pdb_name[1], pdb)#trabajamos con la proteina cuyo archivo es 1AQ2.pdb
        model = structure[0]
        #for model in structure:
        #    print("a")
        for chain in model:
            for chain_csv in cadenas_csv:
                if (chain_csv == chain.get_id()):
                    #print("cadena igual")
                    for residue in chain:
                        #print(residue)
                        #print(residue.get_resname())
                        for residue_csv in residuos_csv:
                            #print(residue.get_id()[1])
                            if(residue_csv == residue.get_resname()):
                                #print("residuo igual")
                                for pos in pos_csv:
                                    if(pos == residue.get_id()[1]):
                                        print("pos igual")

                #for residue in chain:
                    #    if (residue.get_resname() == residuos_csv):
                    #        print("residuo igual")      

