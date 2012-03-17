<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionPadres.php");

$gestion_padres=new DAOGestionPadre();

$respuesta=$gestion_padres->padre_modificar_password("padre1","1234","12345");


echo $respuesta;


?>