<?php

require_once("../../../DAO/ADMINISTRACION/DAOServicios.php");

$gestion_servicios=new DAOServicios();

$respuesta=$gestion_servicios->insertar_servicios($_POST['titulos'],$_POST['parrafos']);


echo $respuesta;


?>