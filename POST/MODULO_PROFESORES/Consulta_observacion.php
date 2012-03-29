<?php

require_once("../../DAO/MODULO_PROFESORES/DAOGestionObservacion.php");

$gestion_observacion=new DAOGestionObservacion();

$respuesta=$gestion_observacion->consulta_observacion($_POST['codigo_curso'],$_POST['codigo_alumno']);


echo $respuesta;


?>