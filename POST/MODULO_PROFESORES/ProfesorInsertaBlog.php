<?php

require_once("../../DAO/MODULO_PROFESORES/DAOGestionBlogProfesor.php");

$gestion_profesor=new DAOGestionBlogProfesor();

$respuesta=$gestion_profesor->profesor_registra_entrada("06200198","222222222","esteeselparrafoProfesor555555555555555555555555555555555555555");


echo $respuesta;


?>