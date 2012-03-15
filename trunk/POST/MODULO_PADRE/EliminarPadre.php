<?php

require_once("../../DAO/MODULO_PADRE/DAOGestionPadres.php");

$gestion_padres=new DAOGestionPadre();

$respuesta=$gestion_padres->eliminar_padre("dni1");


echo $respuesta;


?>