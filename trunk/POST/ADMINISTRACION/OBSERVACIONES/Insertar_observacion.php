<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionObservacion.php");

$gestion_observacion=new DAOGestionObservacion();

$respuesta=$gestion_observacion->registrar_observacion("codcurso4","codalum4","observacion4");


echo $respuesta;


?>