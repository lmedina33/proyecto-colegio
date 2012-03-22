<?php

require_once("../../../DAO/ADMINISTRACION/DAOActividades.php");

$gestion_actividad=new DAOActividades();

$respuesta=$gestion_actividad->insertar_actividad("S","titulo1{titulo2{titulo3{","parrafo1{parrafo2{parrafo3{");


echo $respuesta;


?>