<?php
 
  #recibimos los parametros...
  $idUSer = $_REQUEST['user'];
  $idJob = $_REQUEST['job'];
  $opc = $_REQUEST['opc'];

  #creamos un directorio para almacenar los resultados
  $response ['job'] = $idJob; #declaracion de arreglo asociativo
  $response ['user'] = $idUSer;
    
  $pathResults = "/var/www/html/M2MutPro/jobs/$idUSer/$idJob/results/";
  
  #hacemos la ejecucion del script para el algoritmo
  
  $option = 3;
  $command = "python3 /var/www/html/M2MutPro/model/bin/launcher.py $option $pathResults $opc";
  
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
