<?php
  
  include("../connectDatabase.php");
  include("../checkDatabase.php");

  $idUSer = $_REQUEST['user'];
  $idJob = $_REQUEST['job'];
  $opc = $_REQUEST['opc'];

  $p_AdaBoostRegressor_1 = $_REQUEST['p_AdaBoostRegressor_1'];
  $p_AdaBoostRegressor_2 = $_REQUEST['p_AdaBoostRegressor_2'];
  $p_BaggingRegressor_1 = $_REQUEST['p_BaggingRegressor_1'];

  #recibimos los parametros...
  $response ['job'] = $idJob; #declaracion de arreglo asociativo
  $response ['user'] = $idUSer;
  $response ['option'] = $option;

  $query = "update job set statusJob = 'Initialized' where idjob = $idJob";  
  $resultado = mysqli_query($conexion, $query);
  $requestData = verificar_resultado($resultado);
  $response ['queriesInsert'] = $requestData;



  if ($p_AdaBoostRegressor_1 != "" and $p_AdaBoostRegressor_1 != ""){
    $array = array('algorithm' => "AdaBoostRegressor",'N Estimators' => $p_AdaBoostRegressor_1,'Loss' => $p_AdaBoostRegressor_2);
  }
  

  $route = "/var/www/html/M2MutPro/jobs/$idUSer/$idJob/results/dmakit_input.json";
  $fp = fopen($route, 'w');
  fwrite($fp, json_encode($array, JSON_PRETTY_PRINT));   // here it will print the array pretty
  fclose($fp);
  

  echo json_encode($response);  
?>
