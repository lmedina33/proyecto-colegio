<?php
session_start();
require_once("../../DAO/MODULO_PROFESORES/DAOGestionBlogProfesor.php");

$gestion_profesor=new DAOGestionBlogProfesor();

$respuesta=$gestion_profesor->profesor_elimina_entrada($_POST['codigo_curso'],$_POST["codigo_alumno"]);


echo $respuesta;


?>