import sys
#import os
#import json

from modules.utils import checks

class Launcher(object):
    
    #def __init__(self):
        
    nameJob = sys.argv[1]
    descJob = sys.argv[2]
    csv = sys.argv[3]
    pdb_code = sys.argv[4]
    pdb = sys.argv[5]
    pathResponse = sys.argv[6]
    
    #print(nameJob)
    #print(descJob)
    print(csv)
    print(pdb_code)
    print(pdb)
    #print(pathResponse)

    checking = checks.checks(csv,pdb_code,pdb)
    checking.evaluateCsv()
    checking.evaluateNullData()
    checking.evaluatePdbDownload()
    
    
    
