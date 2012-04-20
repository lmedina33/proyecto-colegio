<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->admin_modificar_profesor($_POST['dni_anterior'],$_POST['dni'],$_POST['nombres'],$_POST['apellido_p'],$_POST['apellido_m'],$_POST['usuario'],$_POST['password'],$_POST['disponible']);


echo $respuesta;


?>