from modules.results import results

class handler_dataset(object):
    
    def exec_results(self, pathResponse):
        self.csv = csv
        self.pathResponse = pathResponse
        self.opc = opc
        preparing = prepare_dataset.prepare_dataset(self.csv,self.pathResponse)
        