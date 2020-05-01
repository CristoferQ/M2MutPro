import json
from modules.dataset import check_dataset

class handler_dataset(object):
    def __init__(self, csv, pdb_code, pathResponse):
        print("1")
        self.csv = csv
        self.pdb_code = pdb_code
        self.pathResponse = pathResponse
    def check_dataset(self):
        print("ok")
        response = {}
        try:
            response.update({'exec':0}) #correcto
            checking = check_dataset.check_dataset(self.csv,self.pdb_code,self.pathResponse)
            checking.evaluateCsv() 
            response.update({'evaluateCsv':checking.response_read_csv})
            checking.evaluateNullData()
            checking.evaluatePdbDownload()
            response.update({'evaluatePdbDownload':checking.response_download_pdb})
            checking.evaluatePdb()
            response.update({'evaluatePdb':checking.response_read_pdb})
            checking.evaluateChains()
            response.update({'evaluateChains':checking.response_chains})
            checking.evaluateResidues()
        except:
            response.update({'exec':1}) #error

        with open(pathResponse+"summary_log.json", 'w') as fp:
            json.dump(response, fp)

