<?php

require_once("../../../DAO/ADMINISTRACION/DAOMetodologias.php");

$gestion_metodologia=new DAOMetodologia();

$respuesta=$gestion_metodologia->insertar_metodologia($_POST['nivel'],$_POST['parrafos']);


echo $respuesta;


?>