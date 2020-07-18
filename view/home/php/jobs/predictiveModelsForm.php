<?php
  
  include("../connectDatabase.php");
  include("../checkDatabase.php");

  $idUSer = $_REQUEST['user'];
  $idJob = $_REQUEST['job'];
  $opc = $_REQUEST['opc'];

  #recibimos los parametros...
  $response ['job'] = $idJob; #declaracion de arreglo asociativo
  $response ['user'] = $idUSer;
  $response ['option'] = $option;

  $query = "update job set statusJob = 'Initialized' where idjob = $idJob";  
  $resultado = mysqli_query($conexion, $query);
  $requestData = verificar_resultado($resultado);
  $response ['queriesInsert'] = $requestData;
  

  echo json_encode($response);  
?>
