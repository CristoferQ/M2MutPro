<?php

	$server = "localhost";
	$user = "root";
	$password = "1234reWQ!";//poner tu propia contraseña, si tienes una.
	$bd = "mydb";

	$conexion = mysqli_connect($server, $user, $password, $bd);
	if (!$conexion){
		die('Error de Conexión: ' . mysqli_connect_errno());

	}
?>