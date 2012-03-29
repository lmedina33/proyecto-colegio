<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionPadres.php");

$gestion_padre=new DAOGestionPadre();

$respuesta=$gestion_padre->admin_get_padres();


echo $respuesta;


?>