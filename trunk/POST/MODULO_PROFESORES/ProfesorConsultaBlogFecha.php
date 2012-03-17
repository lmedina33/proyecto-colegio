<?php

require_once("../../DAO/MODULO_PROFESORES/DAOGestionBlogProfesor.php");

$gestion_profesor=new DAOGestionBlogProfesor();

$respuesta=$gestion_profesor->profesor_consulta_entrada_por_fecha("06200198","222222222","2012-03-17");


echo $respuesta;


?>