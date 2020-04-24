<?php
  
  include("../readDocument.php");

  #recibimos los parametros...
  $pdb_code = $_REQUEST['pdb_code'];
  $nameJob = $_REQUEST['nameJob'];
  $descJob = $_REQUEST['descJob'];

  #creamos un directorio para almacenar los resultados
  $idJob = time();#sera el id del job...
  $response ['job'] = $idJob;

  $pathRespone = "/var/www/html/M2MutPro/jobs/";
  #obtenemos el nombre del archivo de entrada...
  $pathData = "/var/www/html/M2MutPro/jobs/tmp/1_documentQueue1.txt";
  $nameDocument = readDocument($pathData);
  $response ['nameFile'] = $nameDocument;
  $pathActual = "/var/www/html/M2MutPro/jobs/tmp/$nameDocument";

  if(file_exists($pathActual)){
    #movemos el archivo... creamos directorio
  $path = "/var/www/html/M2MutPro/jobs/$idJob";

  if (!file_exists($path)) {
      mkdir($path, 0777, true);
  }

  #movemos el archivo...
  //movemos el archivo al path de la licitacion...
  

  $pathMove = "/var/www/html/M2MutPro/jobs/$idJob/";

  
  $command = "mv $pathActual $pathMove";
  $nameDocFull1 ="/var/www/html/M2MutPro/jobs/$idJob/$nameDocument";
  exec($command);
  

  
#Manejo de errores = no funcionan archivos que tengan un espacio

  $command = "mkdir ".$pathMove."results/";
  exec($command);
  $pathResults = $pathMove."results/";

  #hacemos la ejecucion del script para el algoritmo
  $command = "python /var/www/html/M2MutPro/model/bin/launcher.py $nameJob $descJob $nameDocFull1 $nameDocFull2 $pathResults";
  $output = [];
  exec($command, $output);

  $response['exec'] = $output[0];

  echo json_encode($response);

  }else{
  $response['file'] = "ERROR";

  echo json_encode($response);
  }
  
?>
