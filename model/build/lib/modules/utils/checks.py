import pandas as pd
import urllib
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
        print(pdb_code)
        ruta = "http://files.rcsb.org/download/101M.pdb"+pdb_code+".pdb"
        print(ruta)
        archivo = pdb_code+".pdb"
        print(archivo)
        try:
            
            archivo_salida = pdb_code,".pdb"
            #download = urllib.request.urlretrieve('http://files.rcsb.org/download/101M.pdb', '101m.pdb')
            print("ok")
        except:
            print(error)