<?php

require_once("../../DAO/MODULO_PROFESOR/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->eliminar_profesor("dni1");


echo $respuesta;


?>