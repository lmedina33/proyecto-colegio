<?php

require_once("../../../DAO/ADMINISTRACION/DAOMetodologias.php");

$gestion_metodologia=new DAOMetodologia();

$respuesta=$gestion_metodologia->insertar_metodologia("S","matematica{A{70440138{");


echo $respuesta;


?>