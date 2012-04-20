<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_grado=new DAOGestionAlumnos();

$respuesta=$gestion_grado->alumnos_insertar_asistencia($_POST['codigo_alumno'],$_POST['fecha'],$_POST['hora'],$_POST['tipo']);


echo $respuesta;


?>