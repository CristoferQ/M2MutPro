import json
from modules.dataset import check_dataset
from modules.dataset import prepare_dataset
from modules.dataset import statistics_dataset

class handler_dataset(object):
    
    def check_dataset(self, csv, pdb_code, pathResponse):
        self.csv = csv
        self.pdb_code = pdb_code
        self.pathResponse = pathResponse

        response = {}
        try:
            response.update({'exec':0}) #correcto
            checking = check_dataset.check_dataset(self.csv,self.pdb_code,self.pathResponse)
            checking.evaluateCsv() 
            response.update({'evaluateCsv':checking.response_read_csv})
            checking.evaluateNullData()
            response.update({'evaluateNullData':checking.responde_null_data})
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
    def prepare_dataset(self, csv, pathResponse,opc):
        self.csv = csv
        self.pathResponse = pathResponse
        self.opc = opc
        preparing = prepare_dataset.prepare_dataset(self.csv,self.pathResponse)
        if (opc == 0):
            preparing.ignore()
        elif (opc == 1):
            preparing.filter()
    def statistics_dataset(self, pathResponse, opc):
        self.pathResponse = pathResponse
        self.opc = opc
        statistics = statistics_dataset.statistics_dataset(self.pathResponse, self.opc)
        statistics.count1()
        statistics.count2()
        statistics.count3()
        statistics.count4()
        statistics.count5()
        statistics.count6()
        statistics.count7()
        statistics.json()
        