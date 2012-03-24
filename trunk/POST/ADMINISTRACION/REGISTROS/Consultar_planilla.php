<?php

require_once("../../../DAO/ADMINISTRACION/DAOPersonalAdministrativo.php");

$gestion_personal=new DAOPersonalAdministrativo();

$respuesta=$gestion_personal->consultar_planilla();

echo $respuesta;


?>