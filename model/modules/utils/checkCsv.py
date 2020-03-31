import pandas as pd

class checkDataSet(object):

    def __init__(self, dataset):
        self.dataset = dataset

    #to remove null values in dataset
    def evaluateNullData(self):

        self.dataset = self.dataset.dropna(how='any',axis=0)
    #to check values if there are string o characters in dataset
    def evaluateTypeData(self):

        response = 0
        for i in range(len(self.dataset)):
            for key in self.dataset.keys():
                try:
                    data = float(self.dataset[key][i])
                except:
                    response = 1
                    break
                    pass
            if response == 1:
                break

        return response