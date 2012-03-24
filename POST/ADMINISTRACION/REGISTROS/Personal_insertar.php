<?php

require_once("../../../DAO/ADMINISTRACION/DAOPersonalAdministrativo.php");

$gestion_personal=new DAOPersonalAdministrativo();

$respuesta=$gestion_personal->admin_insertar_personal("dni1","nom1","apell_paterno1","materno1","limpieza");

echo $respuesta;


?>