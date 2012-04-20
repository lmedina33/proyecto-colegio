<?php
session_start();
require_once("../../DAO/MODULO_PADRES/DAOConsultaDelPadre.php");

$gestion_hijo=new DAOConsultaDelPadre();

$respuesta=$gestion_hijo->padres_consultan_hijos($_SESSION['codigo']);


echo $respuesta;


?>