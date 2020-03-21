import argparse
from Bio.PDB.PDBParser import PDBParser

parser = argparse.ArgumentParser()
parser.add_argument("-c", "--code", help="Nombre de archivo pdb a procesar")
parser.add_argument("-i", "--input", help="Nombre de archivo pdb a procesar")
parser.add_argument("-p", "--pdb", help="Nombre de archivo pdb a procesar")
parser.add_argument("-r", "--result", help="Lugar para almacenar resultados")

args = parser.parse_args()

parser = PDBParser()#creamos un parse de pdb
structure = parser.get_structure(args.code, args.input+"/"+args.pdb)
residuesFull = structure.get_residues()
print(residuesFull)