<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_get_alumnos_no_dispo();


echo $respuesta;


?>