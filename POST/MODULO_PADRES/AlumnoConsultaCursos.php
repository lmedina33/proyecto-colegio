<?php
session_start();
require_once("../../DAO/MODULO_PADRES/DAOConsultaDelPadre.php");

$alumno=new DAOConsultaDelPadre();

$respuesta=$alumno->get_cursos($_POST["codigo_alumno"],$_SESSION['codigo']);
// en el parametro debe ir una variable de sesion  $_SESSION['codigo_alumno'] 

echo $respuesta;


?>