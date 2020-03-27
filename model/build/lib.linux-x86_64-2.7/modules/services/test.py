import sys 

from Bio import SeqIO 

from Bio.Blast import NCBIWWW 

  

idsData = [] 

seqData = [] 

  

for record in SeqIO.parse(sys.argv[1], "fasta"): 

     

    #record.seq -> es tu secuencia XD con eso estas listo... ojo... es la secuencia residuos PDB 

    result_handle = NCBIWWW.qblast("blastp", "nr", record.seq, format_type="Text") 

    with open(record.id, "w") as out_handle: 

        out_handle.write(result_handle.read()) 

    result_handle.close() 

    break 