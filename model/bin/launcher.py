import sys
import json
from modules.dataset import handler_dataset

class launcher(object):

    option = int(sys.argv[1])
    
    
    h_dataset = handler_dataset.handler_dataset()

    if (option == 1):
        nameJob = sys.argv[2]
        descJob = sys.argv[3]
        csv = sys.argv[4]
        pdb_code = sys.argv[5]
        pathResponse = sys.argv[6]
        
        h_dataset.check_dataset(csv,pdb_code,pathResponse)
    elif (option == 2):
        csv = sys.argv[2]
        pathResponse = sys.argv[3]
        opc = int(sys.argv[4])
        h_dataset.prepare_dataset(csv,pathResponse,opc)
    else:
        print("option else")