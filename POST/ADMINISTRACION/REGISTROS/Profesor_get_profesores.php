<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionProfesores.php");

$gestion_profesor=new DAOGestionProfesores();

$respuesta=$gestion_profesor->admin_get_profesores();


echo $respuesta;


?>