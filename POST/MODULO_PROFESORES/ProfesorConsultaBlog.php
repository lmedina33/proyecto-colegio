<?php

require_once("../../DAO/MODULO_PROFESORES/DAOGestionBlogProfesor.php");

$gestion_profesor=new DAOGestionBlogProfesor();

$respuesta=$gestion_profesor->profesor_consulta_entrada($_POST['codigo_curso'],$_POST['codigo_alumno']);  //CodAlumno4


echo $respuesta;


?>