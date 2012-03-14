<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->eliminar_alumno("06200198");


echo $respuesta;


?>