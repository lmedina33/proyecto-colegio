<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionPadres.php");

$gestion_padres=new DAOGestionPadre();

$respuesta=$gestion_padres->admin_modificar_padre("dni1","dni5","padre5","ap_paterno5","ap_materno_5","padre5","1234");


echo $respuesta;


?>