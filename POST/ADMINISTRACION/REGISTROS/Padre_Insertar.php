<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionPadres.php");

$gestion_padres=new DAOGestionPadre();

$respuesta=$gestion_padres->admin_insertar_padre("dni1","padre1","apellido_paterno1","apellido_materno1","padre1","1234");


echo $respuesta;


?>