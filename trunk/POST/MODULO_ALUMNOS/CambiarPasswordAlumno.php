<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->alumno_modificar_password("06200489","8000000","1111111");


echo $respuesta;


?>