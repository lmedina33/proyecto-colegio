<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->obtener_cursos_grado($_POST['grado'],$_POST['nivel']);


echo $respuesta;


?>