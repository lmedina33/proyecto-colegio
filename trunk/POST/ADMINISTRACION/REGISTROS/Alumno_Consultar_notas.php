<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_alumnos=new DAOCursos();

$respuesta=$gestion_alumnos->consultar_notas("CodAlum34");


echo $respuesta;


?>