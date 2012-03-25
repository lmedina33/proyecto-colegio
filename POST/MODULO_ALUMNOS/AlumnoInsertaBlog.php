<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_registra_entrada($_POST['codigo_curso'],"CodAlumno4",$_POST['nueva_entrada']);

//$_SESSION['codigo_alumno']
echo $respuesta;


?>