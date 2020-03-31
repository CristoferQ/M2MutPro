import pandas as pd
import sys
#import graphviz as gp
#import pylab



#import os
#import json

from modules.utils import checkCsv
from modules.utils import checkPdb

class Launcher(object):
    #def __init__(self):
    
    nameJob = sys.argv[1]
    descJob = sys.argv[2]
    pathResponse = sys.argv[5]
    
    csv = pd.read_csv(sys.argv[3])
    pdb = sys.argv[4]
    
    
    #print(nameJob)
    #print(descJob)
    #print(csv)
    #print(pdb)
    #print(pathResponse)
    checkCsv = checkCsv.checkCsv(csv)
    checkCsv.evaluateNullData()
    
    
    
