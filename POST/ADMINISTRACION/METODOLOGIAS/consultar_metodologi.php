<?php

require_once("../../../DAO/ADMINISTRACION/DAOMetodologias.php");

$gestion_metodologia=new DAOMetodologia();

$respuesta=$gestion_metodologia->consultar_metodologia("S");


echo $respuesta;


?>