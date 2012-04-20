<?php
session_start();
require_once("../../DAO/MODULO_PADRES/DAOConsultaDelPadre.php");

$gestion_observacion=new DAOConsultaDelPadre();

$respuesta=$gestion_observacion->consulta_observacion($_POST['codigo_curso'],$_POST['codigo_alumno'],$_SESSION['codigo']);


echo $respuesta;


?>