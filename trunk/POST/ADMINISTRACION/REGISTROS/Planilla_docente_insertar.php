<?php

require_once("../../../DAO/ADMINISTRACION/DAOPersonalAdministrativo.php");

$gestion_personal=new DAOPersonalAdministrativo();

$respuesta=$gestion_personal->registrar_personal_docente_planilla("dni1","S");

echo $respuesta;


?>