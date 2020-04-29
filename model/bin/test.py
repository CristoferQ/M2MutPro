import sys
import json
from modules.utils import checks
class hola(object):
    nameJob = sys.argv[1]
    descJob = sys.argv[2]
    csv = sys.argv[3]
    pdb_code = sys.argv[4]
    pathResponse = sys.argv[5]
    print(nameJob)
    #print(descJob)
    #print(csv)
    #print(pdb_code)
    #print(pathResponse)
    #response = {}
    #response.append({'exec':0}) #correcto
    #checking = checks.checks(csv,pdb_code,pathResponse)
    #response.append({'exec':0}) #correcto
