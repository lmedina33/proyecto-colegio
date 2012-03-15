<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionContenidoWeb.php");

$gestion_contenido_web=new DAOGestionContenidoWeb();

$respuesta=$gestion_contenido_web->actualizar_quienes_somos($_POST['parrafos']);


echo $respuesta;


?>