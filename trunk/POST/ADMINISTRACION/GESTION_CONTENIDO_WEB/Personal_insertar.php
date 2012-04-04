<?php

require_once("../../../DAO/ADMINISTRACION/DAOPersonalAdministrativo.php");

$gestion_personal=new DAOPersonalAdministrativo();

$respuesta=$gestion_personal->admin_insertar_personal($_POST['dni'],$_POST['nombres'],$_POST['apellido_p'],$_POST['apellido_m'],$_POST['cargo']);

echo $respuesta;


?>