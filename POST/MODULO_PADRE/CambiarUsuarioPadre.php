<?php

require_once("../../DAO/MODULO_PADRE/DAOGestionPadres.php");

$gestion_padres=new DAOGestionPadre();

$respuesta=$gestion_padres->padre_modificar_usuario("padre1","padre11","1234","12345");


echo $respuesta;


?>