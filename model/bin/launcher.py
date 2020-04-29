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
        response.update({'exec':0}) #correcto
        checking = checks.checks(csv,pdb_code,pathResponse)
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
        #checking.cambiar()    
    except:
        response.update({'exec':1}) #error

    with open(pathResponse+"summary_log.json", 'w') as fp:
        json.dump(response, fp)

