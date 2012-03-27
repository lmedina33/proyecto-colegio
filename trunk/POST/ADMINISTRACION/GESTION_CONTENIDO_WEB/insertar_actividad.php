<?php

require_once("../../../DAO/ADMINISTRACION/DAOActividades.php");

$gestion_actividad=new DAOActividades();

$respuesta=$gestion_actividad->insertar_actividad($_POST['nivel'],$_POST['parrafos']);


echo $respuesta;


?>