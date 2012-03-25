<?php

require_once("../../DAO/MODULO_PROFESORES/DAOGestionBlogProfesor.php");

$gestion_profesor=new DAOGestionBlogProfesor();

$respuesta=$gestion_profesor->profesor_registra_entrada("P4historiaA","CodAlumno4","Mi respuesta para el alumno.");


echo $respuesta;


?>