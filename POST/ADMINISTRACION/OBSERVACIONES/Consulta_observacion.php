<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionObservacion.php");

$gestion_observacion=new DAOGestionObservacion();

$respuesta=$gestion_observacion->consulta_observacion("codcurso4","codalum4");


echo $respuesta;


?>