<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->profesor_cambiar_password("profe1","1234","12345");


echo $respuesta;


?>