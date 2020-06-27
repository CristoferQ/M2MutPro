<?php
  
  include("../readDocument.php");
  include("../connectDatabase.php");
  include("../checkDatabase.php");

  $idUSer = "1";
 
  #recibimos los parametros...
  $pdb_code = $_REQUEST['pdb_code'];
  $nameJob = $_REQUEST['nameJob'];
  $descJob = $_REQUEST['descJob'];
  $option = $_REQUEST['option'];

  #creamos un directorio para almacenar los resultados
  $idJob = time();#sera el id del job...
  $response ['job'] = $idJob; #declaracion de arreglo asociativo
  $response ['user'] = $idUSer;
  $response ['option'] = $option;
  
  #obtenemos el nombre del archivo de entrada...
  $pathData = "/var/www/html/M2MutPro/jobs/tmp/".$idUSer."_documentQueue1.txt";
  $nameDocument = readDocument($pathData);
  $response ['nameFile'] = $nameDocument;
  $pathActual = "/var/www/html/M2MutPro/jobs/tmp/$nameDocument";

  if(file_exists($pathActual)){
    #movemos el archivo... creamos directorio
  $path = "/var/www/html/M2MutPro/jobs/".$idUSer."/$idJob/";

  if (!file_exists($path)) {
      mkdir($path, 0777, true);
  }

  #movemos el archivo...
  #hacemos la insercion a la base de datos...
  
  $query2 = "insert into dataSet values ($idJob, '$nameDocument', $option, NOW(), NOW())";
  $query = "insert into job values ($idJob, '$nameJob', '$descJob', 'Created', NOW(), NOW(), $idUSer, '$idJob')";
  $resultado2 = mysqli_query($conexion, $query2);
  $requestData2 = verificar_resultado($resultado2);
  $response ['queriesInsert2'] = $requestData2;
  


  $resultado = mysqli_query($conexion, $query);
  $requestData = verificar_resultado($resultado);
  $response ['queriesInsert1'] = $requestData;

  


  //movemos el archivo al path de la licitacion...
  
  $command = "mv $pathActual $path";
  exec($command);


  $nameDocFull1 ="/var/www/html/M2MutPro/jobs/$idUSer/$idJob/$nameDocument";
  
  #Manejo de errores = no funcionan archivos que tengan un espacio
  
  $command = "mkdir ".$path."results/";
  exec($command);
  $pathResults = $path."results/";

  #hacemos la ejecucion del script para el algoritmo
  $option = 1;
  $command = "python3 /var/www/html/M2MutPro/model/bin/launcher.py $option $nameJob $descJob $nameDocFull1 $pdb_code $pathResults";
  #$command = "python3 /var/www/html/M2MutPro/model/bin/hola.py $nameJob $descJob $nameDocFull1 $pdb_code $pathResults";
  $response['command'] = $command;
  #$output = [];
  #exec($command, $output);
  exec($command);

  #$response['exec'] = $output[0];
  
  echo json_encode($response);

  }else{
  $response['file'] = "ERROR";
  echo json_encode($response);
  }
  
?>
