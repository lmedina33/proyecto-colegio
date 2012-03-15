<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionContenidoWeb.php");

$gestion_contenido_web=new DAOGestionContenidoWeb();

$respuesta=$gestion_contenido_web->actualizar_mision_vision($_POST['parrafos']);


echo $respuesta;


?>