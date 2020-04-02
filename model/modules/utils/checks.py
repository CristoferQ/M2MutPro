import pandas as pd

class checks(object):

    def __init__(self, csv, pdb_code, pdb):
        self.csv = csv
        self.pdb_code = pdb_code
        self.pdb = pdb
    def evaluateCsv(self):
        try:
            csv = pd.read_csv(self.csv, usecols = ["sepal.width","petal.length","petal.width","variety"])
            print(csv)
            print("ok")
        except:
            print("error")        
    #to remove null values in dataset
    #def evaluateNullData(self):
       #self.dataset = self.dataset.dropna(how='any',axis=0)
    #to check values if there are string o characters in dataset
    