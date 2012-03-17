<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->admin_insertar_profesor("dni1","profe1","apellido_paterno1","apellido_materno1","profe1","1234");


echo $respuesta;


?>