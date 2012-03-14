<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_modificar_alumno("06200198","06200489","Dante","Vidal","Tueros",23,"8000000");


echo $respuesta;


?>