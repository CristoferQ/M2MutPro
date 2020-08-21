<?php
  
  include("../connectDatabase.php");
  include("../checkDatabase.php");

  $idUSer = $_REQUEST['user'];
  $idJob = $_REQUEST['job'];
  $opc = $_REQUEST['opc'];
  
  $p_AdaBoostRegressor_1 = $_REQUEST['p_AdaBoostRegressor_1'];
  $p_AdaBoostRegressor_2 = $_REQUEST['p_AdaBoostRegressor_2'];
  $p_BaggingRegressor_1 = $_REQUEST['p_BaggingRegressor_1'];
  $p_BaggingRegressor_2 = $_REQUEST['p_BaggingRegressor_2'];
  $p_DecisionTree_1 = $_REQUEST['p_DecisionTree_1'];
  $p_DecisionTree_2 = $_REQUEST['p_DecisionTree_2'];
  $p_GradientBoostingRegressor_1 = $_REQUEST['p_GradientBoostingRegressor_1'];
  $p_GradientBoostingRegressor_2 = $_REQUEST['p_GradientBoostingRegressor_2'];
  $p_GradientBoostingRegressor_3 = $_REQUEST['p_GradientBoostingRegressor_3'];
  $p_GradientBoostingRegressor_4 = $_REQUEST['p_GradientBoostingRegressor_4'];
  $p_GradientBoostingRegressor_5 = $_REQUEST['p_GradientBoostingRegressor_5'];
  $p_KNeighborsRegressor_1 = $_REQUEST['p_KNeighborsRegressor_1'];
  $p_KNeighborsRegressor_2 = $_REQUEST['p_KNeighborsRegressor_2'];
  $p_KNeighborsRegressor_3 = $_REQUEST['p_KNeighborsRegressor_3'];
  $p_KNeighborsRegressor_4 = $_REQUEST['p_KNeighborsRegressor_4'];
  $p_MLPRegressor_1 = $_REQUEST['p_MLPRegressor_1'];
  $p_MLPRegressor_2 = $_REQUEST['p_MLPRegressor_2'];
  $p_MLPRegressor_3 = $_REQUEST['p_MLPRegressor_3'];
  $p_MLPRegressor_4 = $_REQUEST['p_MLPRegressor_4'];
  $p_MLPRegressor_5 = $_REQUEST['p_MLPRegressor_5'];
  $p_MLPRegressor_6 = $_REQUEST['p_MLPRegressor_6'];
  $p_MLPRegressor_7 = $_REQUEST['p_MLPRegressor_7'];
  $p_MLPRegressor_8 = $_REQUEST['p_MLPRegressor_8'];
  $p_MLPRegressor_9 = $_REQUEST['p_MLPRegressor_9'];
  $p_NuSVR_1 = $_REQUEST['p_NuSVR_1'];
  $p_NuSVR_2 = $_REQUEST['p_NuSVR_2'];
  $p_NuSVR_3 = $_REQUEST['p_NuSVR_3'];
  $p_NuSVR_4 = $_REQUEST['p_NuSVR_4'];
  $p_RandomForestRegressor_1 = $_REQUEST['p_RandomForestRegressor_1'];
  $p_RandomForestRegressor_2 = $_REQUEST['p_RandomForestRegressor_2'];
  $p_RandomForestRegressor_3 = $_REQUEST['p_RandomForestRegressor_3'];
  $p_RandomForestRegressor_4 = $_REQUEST['p_RandomForestRegressor_4'];
  $p_RandomForestRegressor_5 = $_REQUEST['p_RandomForestRegressor_5'];
  $p_SVR_1 = $_REQUEST['p_SVR_1'];
  $p_SVR_2 = $_REQUEST['p_SVR_2'];
  $p_SVR_3 = $_REQUEST['p_SVR_3'];
  $c_AdaBoostClassifier_1 = $_REQUEST['c_AdaBoostClassifier_1'];
  $c_AdaBoostClassifier_2 = $_REQUEST['c_AdaBoostClassifier_2'];
  $c_BaggingClassifier_1 = $_REQUEST['c_BaggingClassifier_1'];
  $c_BaggingClassifier_2 = $_REQUEST['c_BaggingClassifier_2'];
  $c_DecisionTree_1 = $_REQUEST['c_DecisionTree_1'];
  $c_DecisionTree_2 = $_REQUEST['c_DecisionTree_2'];
  $c_GradientBoostingClassifier_1 = $_REQUEST['c_GradientBoostingClassifier_1'];
  $c_GradientBoostingClassifier_2 = $_REQUEST['c_GradientBoostingClassifier_2'];
  $c_GradientBoostingClassifier_3 = $_REQUEST['c_GradientBoostingClassifier_3'];
  $c_GradientBoostingClassifier_4 = $_REQUEST['c_GradientBoostingClassifier_4'];
  $c_KNeighborsClassifier_1 = $_REQUEST['c_KNeighborsClassifier_1'];
  $c_KNeighborsClassifier_2 = $_REQUEST['c_KNeighborsClassifier_2'];
  $c_KNeighborsClassifier_3 = $_REQUEST['c_KNeighborsClassifier_3'];
  $c_KNeighborsClassifier_4 = $_REQUEST['c_KNeighborsClassifier_4'];
  $c_MLPClassifier_1 = $_REQUEST['c_MLPClassifier_1'];
  $c_MLPClassifier_2 = $_REQUEST['c_MLPClassifier_2'];
  $c_MLPClassifier_3 = $_REQUEST['c_MLPClassifier_3'];
  $c_MLPClassifier_4 = $_REQUEST['c_MLPClassifier_4'];
  $c_MLPClassifier_5 = $_REQUEST['c_MLPClassifier_5'];
  $c_MLPClassifier_6 = $_REQUEST['c_MLPClassifier_6'];
  $c_MLPClassifier_7 = $_REQUEST['c_MLPClassifier_7'];
  $c_MLPClassifier_8 = $_REQUEST['c_MLPClassifier_8'];
  $c_MLPClassifier_9 = $_REQUEST['c_MLPClassifier_9'];
  $c_NuSVC_1 = $_REQUEST['c_NuSVC_1'];
  $c_NuSVC_2 = $_REQUEST['c_NuSVC_2'];
  $c_NuSVC_3 = $_REQUEST['c_NuSVC_3'];
  $c_NuSVC_4 = $_REQUEST['c_NuSVC_4'];
  $c_RandomForestClassifier_1 = $_REQUEST['c_RandomForestClassifier_1'];
  $c_RandomForestClassifier_2 = $_REQUEST['c_RandomForestClassifier_2'];
  $c_RandomForestClassifier_3 = $_REQUEST['c_RandomForestClassifier_3'];
  $c_RandomForestClassifier_4 = $_REQUEST['c_RandomForestClassifier_4'];
  $c_RandomForestClassifier_5 = $_REQUEST['c_RandomForestClassifier_5'];
  $c_SVC_1 = $_REQUEST['c_SVC_1'];
  $c_SVC_2 = $_REQUEST['c_SVC_2'];
  $c_SVC_3 = $_REQUEST['c_SVC_3'];
  $c_SVC_4 = $_REQUEST['c_SVC_4'];

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
