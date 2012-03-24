<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionObservacion.php");

$gestion_observacion=new DAOGestionObservacion();

$respuesta=$gestion_observacion->eliminar_observacion(2);


echo $respuesta;


?>