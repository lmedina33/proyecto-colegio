<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$consulta=new DAOCursos();

$respuesta=$consulta->get_secciones($_POST['nivel'],$_POST['grado']);


echo $respuesta;


?>