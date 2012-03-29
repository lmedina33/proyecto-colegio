<?php
session_start();
require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_consulta_entrada_por_fecha("06200198","222222222","2012-03-17");


echo $respuesta;


?>