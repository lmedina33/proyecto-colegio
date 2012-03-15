<?php

require_once("../../DAO/MODULO_PROFESOR/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->admin_modificar_profesor("dni1","dni5","profe5","ap_paterno5","ap_materno_5","profe5","1234");


echo $respuesta;


?>