<?php

require_once("../../DAO/MODULO_PROFESORES/DAOGestionBlogProfesor.php");

$gestion_profesor=new DAOGestionBlogProfesor();

$respuesta=$gestion_profesor->profesor_registra_entrada("222","111","esteeselparrafoProfesor555555555555555555555555555555555555555");


echo $respuesta;


?>