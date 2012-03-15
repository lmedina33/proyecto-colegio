<?php

require_once("../../DAO/MODULO_PROFESOR/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->profesor_modificar_usuario("profe1","profe11","1234","12345");


echo $respuesta;


?>