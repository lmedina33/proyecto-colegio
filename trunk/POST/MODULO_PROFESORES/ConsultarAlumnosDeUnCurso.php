<?php
session_start();
require_once("../../DAO/MODULO_PROFESORES/DAOConsultasProfesor.php");

$gestion_profesor=new DAOConsultasProfesor();

$respuesta=$gestion_profesor->consultar_alumnos_curso_dicta($_POST['codigo_curso']);


echo $respuesta;


?>