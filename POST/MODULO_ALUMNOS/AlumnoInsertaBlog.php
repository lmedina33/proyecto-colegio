<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_registra_entrada("06200198","222222222","esteeselparrafo555555555555555555555555555555555555555");


echo $respuesta;


?>