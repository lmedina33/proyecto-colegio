<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_insertar_alumno("CodAlumno4","NomAlum4","AlumPaterno4","AlumMaterno4",4,"pass4","dniPadre4",3,"P","A");


echo $respuesta;


?>