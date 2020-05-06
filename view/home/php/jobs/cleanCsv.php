<?php
 
  #recibimos los parametros...
  $idUSer = $_REQUEST['user'];
  $idJob = $_REQUEST['job'];
  $opc = $_REQUEST['opc'];

  #creamos un directorio para almacenar los resultados
  $response ['job'] = $idJob; #declaracion de arreglo asociativo
  $response ['user'] = $idUSer;
  

  $nameDocFull1 ="/var/www/html/M2MutPro/jobs/$idUSer/$idJob/results/dirty.csv";
  
    
  $pathResults = "/var/www/html/M2MutPro/jobs/$idUSer/$idJob/results/";
  
  #hacemos la ejecucion del script para el algoritmo
  
  $option = 2;
  $command = "python3 /var/www/html/M2MutPro/model/bin/launcher.py $option $nameDocFull1 $pathResults $opc";
  #$command = "python3 /var/www/html/M2MutPro/model/bin/hola.py $nameJob $descJob $nameDocFull1 $pdb_code $pathResults";
  $response['command'] = $command;
  #$output = [];
  #exec($command, $output);
  exec($command);

  #$response['exec'] = $output[0];
  
  echo json_encode($response);

  #else{
  #$response['file'] = "ERROR";
  #echo json_encode($response);
  #}
  
?>
