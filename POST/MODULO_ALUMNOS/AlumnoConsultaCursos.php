<?php

require_once("../../DAO/MODULO_ALUMNOS/DAOAlumno.php");

$alumno=new DAOAlumno();

$respuesta=$alumno->get_cursos('CodAlumno4');
// en el parametro debe ir una variable de sesion  $_SESSION['codigo_alumno'] 

echo $respuesta;


?>