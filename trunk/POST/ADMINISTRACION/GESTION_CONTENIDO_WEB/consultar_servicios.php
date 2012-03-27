<?php

require_once("../../../DAO/ADMINISTRACION/DAOServicios.php");

$gestion_servicios=new DAOServicios();

$respuesta=$gestion_servicios->consultar_servicios();


echo $respuesta;


?>