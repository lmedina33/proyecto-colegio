<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionContenidoWeb.php");

$gestion_contenido_web=new DAOGestionContenidoWeb();

$respuesta=$gestion_contenido_web->consultar_mision_vision();


echo $respuesta;


?>