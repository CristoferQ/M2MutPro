from modules.services import sdm_service

class handler_dataset(object):
    
    def prepare_dataset(self, csv, pathResponse,opc):
        self.csv = csv
        self.pathResponse = pathResponse
        self.opc = opc
        preparing = prepare_dataset.prepare_dataset(self.csv,self.pathResponse)
        if (opc == 0):
            preparing.ignore()
        elif (opc == 1):
            preparing.filter()
    def statistics_dataset(self, pathResponse):
        self.pathResponse = pathResponse
        statistics = statistics_dataset.statistics_dataset(self.pathResponse)
        statistics.count1()
        statistics.count2()
        statistics.count3()
        statistics.count4()
        statistics.count5()
        statistics.count6()
        statistics.json()
        