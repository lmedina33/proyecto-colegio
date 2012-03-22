<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_modificar_alumno("CodAlumno4","CodAlumModifi1","NomAlumModi1","AlumPaternoModi1","AlumMaternoModi1",11,"PassModi1","DniPadreModi",5,"S","B");


echo $respuesta;


?>