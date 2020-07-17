<?php
  
  include("../connectDatabase.php");
  include("../checkDatabase.php");

  $idUSer = $_REQUEST['user'];
  $idJob = $_REQUEST['job'];

  #recibimos los parametros...
    $response ['job'] = $idJob; #declaracion de arreglo asociativo
    $response ['user'] = $idUSer;
    $query = "select * from job join dataSet on (dataSet.iddataSet=job.dataSet_iddataSet) where idjob=$idJob;";
    $resultado = mysqli_query($conexion, $query);
    
	if (!$resultado){
		die("Error");
	}else{

		while($data = mysqli_fetch_assoc($resultado)){
			$arreglo["data"][] = $data;
		}
		echo json_encode($arreglo);
	}

	mysqli_free_result($resultado);
	mysqli_close($conexion);
?>
