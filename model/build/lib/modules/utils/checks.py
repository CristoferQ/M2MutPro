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
            if(len(csv["sepal.length"])!=0 and len(csv["sepal.width"])!=0):
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
        structure = parser.get_structure(pdb_name[1], pdb)#trabajamos con la proteina cuyo archivo es 1AQ2.pdb
        residuesFull = structure.get_residues()
        for model in structure:
            for chain in model:
                for residue in chain:
                    if residue.resname in residuesValids:
                        ListResidues.append(residue)
        #print(ListResidues)
    def evaluateChains(self):
        csv = pd.read_csv(self.csv)

        pdb = self.pdb
        residuesValids = ['ALA', 'LYS', 'ARG', 'HIS', 'PHE', 'THR', 'PRO', 'MET', 'GLY', 'ASN', 'ASP', 'GLN', 'GLU', 'SER', 'TYR', 'TRP', 'VAL', 'ILE', 'LEU', 'CYS']
        ListResidues = []
        pdb_name = os.path.split(pdb)


        cadenas_csv = list(set(csv['cadena']))
        print(cadenas_csv)
        cadenas_pdb = []
        parser = PDBParser()#creamos un parse de pdb
        structure = parser.get_structure(pdb_name[1], pdb)#trabajamos con la proteina cuyo archivo es 1AQ2.pdb
        residuesFull = structure.get_residues()

        for chain in structure.get_chains():
            cadenas_pdb.append(str(chain))
        print(cadenas_pdb)
