<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_grado=new DAOGestionAlumnos();

$respuesta=$gestion_grado->alumnos_get_asistencias($_POST['codigo_alumno']);


echo $respuesta;


?>