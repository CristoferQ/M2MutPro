from read_pdb import *
import sys 
from Bio import SeqIO 
from Bio.Blast import NCBIWWW 
from Bio import SeqIO




PDB = processPDB("2ocj", "/home/cquiroz/Escritorio/M2MutPro/", "2ocj.pdb", "/home/cquiroz/Escritorio/M2MutPro/")
PDB.getAllResiduesPDB()
print(PDB.ListResidues)
archivo = open("/home/cquiroz/Escritorio/M2MutPro/test.txt","w")

archivo.close()


with open("/home/cquiroz/Escritorio/M2MutPro/", "rU") as input_handle:
    with open("cor6_6.fasta", "w") as output_handle:
        sequences = SeqIO.parse(input_handle, "genbank")
        count = SeqIO.write(sequences, output_handle, "fasta")

print("Converted %i records" % count)

#result_handle = NCBIWWW.qblast("blastp", "nr", "LCLYTHIGRNIYYGSYLYSETWNTGIMLLLITMATAFMGYVLPWGQMSFWGATVITNLFSAIPYIGTNLVEWIWGGFSVDKATLNRFFAFHFILPFTMVALAGVHLTFLHETGSNNPLGLTSDSDKIPFHPYYTIKDFLGLLILILLLLLLALLSPDMLGDPDNHMPADPLNTPLHIKPEWYFLFAYAILRSVPNKLGGVLALFLSIVILGLMPFLHTSKHRSMMLRPLSQALFWTLTMDLLTLTWIGSQPVEYPYTIIGQMASILYFSIILAFLPIAGXIENY", format_type="Text") 
#print(result_handle.read())