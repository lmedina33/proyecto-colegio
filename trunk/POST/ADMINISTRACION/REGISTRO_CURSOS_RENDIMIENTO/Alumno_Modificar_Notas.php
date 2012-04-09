<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_alumnos=new DAOCursos();

$respuesta=$gestion_alumnos->actualizar_nota($_POST['codigo_alumno'],$_POST['codigo_curso'],$_POST['bimestre'],$_POST['nota']);


echo $respuesta;


?>