<?php

require_once("../../DAO/MODULO_PROFESORES/DAOGestionObservacion.php");

$gestion_observacion=new DAOGestionObservacion();

$respuesta=$gestion_observacion->registrar_observacion($_POST['codigo_curso'],$_POST['codigo_alumno'],$_POST['nueva_entrada']);


echo $respuesta;


?>