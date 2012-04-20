<?php
session_start();
require_once("../../DAO/MODULO_PADRES/DAOConsultaDelPadre.php");

$gestion_grado=new DAOConsultaDelPadre();


	$respuesta=$gestion_grado->obtener_cursos_grado($_POST['codigo_alumno'],$_SESSION['codigo']);	



echo $respuesta;


?>