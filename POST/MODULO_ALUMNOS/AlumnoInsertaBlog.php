<?php
session_start();
require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_registra_entrada($_POST['codigo_curso'],$_SESSION["codigo"],$_POST['nueva_entrada']);

//$_SESSION['codigo_alumno']
echo $respuesta;


?>