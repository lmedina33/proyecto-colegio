<?php

require_once("../../DAO/MODULO_PADRE/DAOGestionPadres.php");

$gestion_padres=new DAOGestionPadre();

$respuesta=$gestion_padres->cambiar_disponibilidad("dni1","no_disponible");


echo $respuesta;


?>