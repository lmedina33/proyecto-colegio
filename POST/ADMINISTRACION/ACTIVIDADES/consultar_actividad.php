<?php

require_once("../../../DAO/ADMINISTRACION/DAOActividades.php");

$gestion_actividad=new DAOActividades();

$respuesta=$gestion_actividad->consultar_actividad("S");


echo $respuesta;


?>