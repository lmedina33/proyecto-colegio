<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_insertar_alumno("CodAlumno1","NomAlum1","AlumPaterno1","AlumMaterno1",1,"pass1","dniPadre1",3,"P","A");


echo $respuesta;


?>