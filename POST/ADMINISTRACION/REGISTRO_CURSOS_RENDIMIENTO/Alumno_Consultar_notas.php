<?php
session_start();
require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_alumnos=new DAOCursos();

if($_POST['codigo_alumno']){
	$respuesta=$gestion_alumnos->consultar_notas($_POST['codigo_alumno']);
}else{
	$respuesta=$gestion_alumnos->consultar_notas($_SESSION['codigo']);
}
	


echo $respuesta;


?>