import sys
import json
from modules.utils import checks
class launcher(object):
    #def __init__(self):
    nameJob = sys.argv[1]
    descJob = sys.argv[2]
    csv = sys.argv[3]
    pdb_code = sys.argv[4]
    pathResponse = sys.argv[5]
    response = {}


    try:    
        checking = checks.checks(csv,pdb_code,pathResponse)
        checking.evaluateCsv() 
        checking.evaluateNullData()
        checking.evaluatePdbDownload() 
        checking.evaluatePdb()
        #checking.evaluateChains()
        #checking.evaluateResidues()
        #checking.cambiar()
        response.update({'exec':0}) #correcto
        response.update({'evaluateCsv':checking.response})
        response.update({'evaluatePdbDownload':checking.response_download_pdb})
        response.update({'evaluatePdb':checking.response_read_pdb})
        #response.update({'evaluateChains':checking.response_chains})
        print("ok")
    except:
        response.update({'exec':1}) #error
        print("error")

    with open(pathResponse+"summary_log.json", 'w') as fp:
        json.dump(response, fp)

