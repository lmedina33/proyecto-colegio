<?php

require_once("../../DAO/PORTAL/DAOGaleriaFotos.php");

$galeria=new DAOGaleriaFotos();

$respuesta=$galeria->consultar_fotos($_POST['tipo_consulta']);


echo $respuesta;


?>