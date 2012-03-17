<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->cambiar_disponibilidad("dni1","no_disponible");


echo $respuesta;


?>