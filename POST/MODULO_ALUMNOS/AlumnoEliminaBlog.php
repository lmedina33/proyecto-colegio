<?php
session_start();
require_once("../../DAO/MODULO_ALUMNOS/DAOGestionBlogAlumno.php");

$gestion_alumnos=new DAOGestionBlogAlumnos();

$respuesta=$gestion_alumnos->alumno_elimina_entrada($_POST['codigo_curso'],$_SESSION["codigo"]);


echo $respuesta;


?>