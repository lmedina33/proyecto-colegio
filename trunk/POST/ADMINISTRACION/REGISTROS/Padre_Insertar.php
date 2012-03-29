<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionPadres.php");

$gestion_padres=new DAOGestionPadre();

$respuesta=$gestion_padres->admin_insertar_padre($_POST['dni'],$_POST['nombres'],$_POST['apellido_p'],$_POST['apellido_m'],$_POST['usuario'],$_POST['password']);


echo $respuesta;


?>