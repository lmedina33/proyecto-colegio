<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->cambiar_disponibilidad("06200198","no_disponible");


echo $respuesta;


?>