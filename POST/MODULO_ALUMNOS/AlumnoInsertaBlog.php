<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_registra_entrada("P4historiaA","CodAlumno4","otro parrafo");


echo $respuesta;


?>