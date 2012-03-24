<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_consulta_entrada("222","111");


echo $respuesta;


?>