<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_insertar_alumno("06200198","Daniel","Viguria","Berrocal",22,"88917092");


echo $respuesta;


?>