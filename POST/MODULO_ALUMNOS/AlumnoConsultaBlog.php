<?php
session_start();
require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_consulta_entrada($_POST['codigo_curso'],$_SESSION["codigo"]);
////////Debe ir el id de sesion del alumno  $_SESSION['codigo_alumno']

echo $respuesta;


?>