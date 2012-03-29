<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->admin_insertar_profesor($_POST['dni'],$_POST['nombres'],$_POST['apellido_p'],$_POST['apellido_m'],$_POST['usuario'],$_POST['password']);


echo $respuesta;


?>