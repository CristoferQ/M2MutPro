import sys
import json
from modules.dataset import handler_dataset
from modules.results import handler_results

class launcher(object):

    option = int(sys.argv[1])
    
    
    if (option == 1):#check_dataset
        h_dataset = handler_dataset.handler_dataset()
        nameJob = sys.argv[2]
        descJob = sys.argv[3]
        csv = sys.argv[4]
        pdb_code = sys.argv[5]
        pathResponse = sys.argv[6]
        
        h_dataset.check_dataset(csv,pdb_code,pathResponse)
    elif (option == 2):#prepare_dataset
        h_dataset = handler_dataset.handler_dataset()
        csv = sys.argv[2]
        pathResponse = sys.argv[3]
        opc = int(sys.argv[4])
        h_dataset.prepare_dataset(csv,pathResponse,opc)
    elif (option == 3):#statistics_dataset
        h_dataset = handler_dataset.handler_dataset()
        pathResponse = sys.argv[2]
        h_dataset.statistics_dataset(pathResponse)
    elif (option == 4):#results
        h_results = handler_results.handler_results()
        pathResponse = sys.argv[2]
        h_results.exec_results(pathResponse)
    else:
        print("option else")