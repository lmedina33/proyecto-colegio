<?php
session_start();
require_once("../../DAO/MODULO_PADRES/DAOConsultaDelPadre.php");

$gestion_alumnos=new DAOConsultaDelPadre();




	$respuesta=$gestion_alumnos->consultar_notas($_POST['codigo_alumno'],$_SESSION['codigo']);

	


echo $respuesta;


?>