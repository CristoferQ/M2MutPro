<?php
  
  include("../connectDatabase.php");
  include("../checkDatabase.php");

  $idUSer = $_REQUEST['user'];
  $idJob = $_REQUEST['job'];

  #recibimos los parametros...
    $response ['job'] = $idJob; #declaracion de arreglo asociativo
    $response ['user'] = $idUSer;
    $query = "select nameJob, descriptionJob, typeDataSet, pdbCode from job join dataSet on (dataSet.iddataSet=job.dataSet_iddataSet) where idjob=$idJob;";
    $resultado = mysqli_query($conexion, $query);
    
	if (!$resultado){
		$response['result'] = 'error';
	}else{
        $data = mysqli_fetch_assoc($resultado);
        $response ['nameJob'] = $data['nameJob'];
        $response ['descriptionJob'] = $data['descriptionJob'];
        $response ['typeDataSet'] = $data['typeDataSet'];
        $response ['pdbCode'] = $data['pdbCode'];
    }
    $archivo = "/var/www/html/M2MutPro/jobs/$idUSer/$idJob/results/SDM.csv";
    $command = "cat $archivo | wc -l";
    $output = [];
    exec($command, $output);
    $response ['numberOfExamples'] = $output[0]-1;
    echo json_encode($response);
	mysqli_free_result($resultado);
	mysqli_close($conexion);
?>
