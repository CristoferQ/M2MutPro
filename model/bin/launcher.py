import sys
#import os
#import json
import json

from modules.utils import checks

class Launcher(object):
    
    #def __init__(self):
        
    nameJob = sys.argv[1]
    descJob = sys.argv[2]
    csv = sys.argv[3]
    pdb_code = sys.argv[4]
    pathResponse = sys.argv[5]
    


    checking = checks.checks(csv,pdb_code,pathResponse)
    #checking.evaluateCsv() 
    #checking.evaluateNullData()
    #checking.evaluatePdbDownload() 
    checking.evaluatePdb()
    checking.evaluateChains()
    checking.evaluateResidues()
    checking.cambiar()

    #with open(pathResponse+"test.json", "w") as fp:
    #   json.dump(results, fp)