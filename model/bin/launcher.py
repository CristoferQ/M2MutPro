#import pandas as pd
import sys
#import graphviz as gp
#import pylab



#import os
#import json

from modules.utils import checkDataSet

class BinaryTree(object):
    def __init__(self):
        self.top = None

    # Llamada para dividir grupo de forma recursiva
    def split(self, dataSet, pathResponse):
        
        
#inputs from command line
dataset = pd.read_csv(sys.argv[1])
type_scaler = int(sys.argv[2])
pathResponse = sys.argv[3]
threshold = float(sys.argv[4])
significancia = float(sys.argv[5])

checkElement = checkDataSet.checkDataSet(dataset)
checkElement.evaluateNullData()
