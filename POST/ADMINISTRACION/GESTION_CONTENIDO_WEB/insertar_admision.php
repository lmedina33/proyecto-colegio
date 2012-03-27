<?php

require_once("../../../DAO/ADMINISTRACION/DAOAdmision.php");

$gestion_admision=new DAOAdmision();

$respuesta=$gestion_admision->insertar_admision($_POST['nivel'],$_POST['parrafos']);


echo $respuesta;


?>