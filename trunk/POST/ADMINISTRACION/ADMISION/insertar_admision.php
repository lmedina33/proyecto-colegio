<?php

require_once("../../../DAO/ADMINISTRACION/DAOAdmision.php");

$gestion_admision=new DAOAdmision();

$respuesta=$gestion_admision->insertar_admision("S","parrafo1{parrafo2{parrafo3{parrafo4{");


echo $respuesta;


?>