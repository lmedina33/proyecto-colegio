<?php

require_once("../../../DAO/ADMINISTRACION/DAOAdmision.php");

$gestion_admision=new DAOAdmision();

$respuesta=$gestion_admision->consultar_admision($_POST['nivel']);


echo $respuesta;


?>