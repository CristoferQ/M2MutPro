import sys
import json
from modules.dataset import handler_dataset

class launcher(object):

    nameJob = sys.argv[1]
    descJob = sys.argv[2]
    csv = sys.argv[3]
    pdb_code = sys.argv[4]
    pathResponse = sys.argv[5]
    option = int(sys.argv[6])
    
    h_dataset = handler_dataset.handler_dataset()

    if (option == 1):
        h_dataset.check_dataset(csv,pdb_code,pathResponse)
    elif (option == 2):
        h_dataset.prepare_dataset(csv,pathResponse)
    else:
        print("option else")