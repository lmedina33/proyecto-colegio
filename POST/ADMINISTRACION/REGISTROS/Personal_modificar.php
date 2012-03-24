<?php

require_once("../../../DAO/ADMINISTRACION/DAOPersonalAdministrativo.php");

$gestion_personal=new DAOPersonalAdministrativo();

$respuesta=$gestion_personal->admin_modificar_personal("dni1","dni_nuevo","nombre_nuevo","paterno_nuevo","materno_nuevo","limpieza_nuevo");


echo $respuesta;


?>