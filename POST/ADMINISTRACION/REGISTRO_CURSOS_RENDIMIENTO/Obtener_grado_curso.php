<?php
session_start();
require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

if($_POST['grado'] && $_POST['nivel'] ){

	$respuesta=$gestion_grado->obtener_cursos_grado($_POST['grado'],$_POST['nivel']);	
}else{
	
	$respuesta=$gestion_grado->obtener_cursos_grado($_SESSION["grado"],$_SESSION["nivel"]);
}


echo $respuesta;


?>