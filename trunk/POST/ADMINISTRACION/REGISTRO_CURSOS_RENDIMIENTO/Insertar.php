<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->insertar_dao_cursos($_POST['grado'],$_POST['nivel'],$_POST['cursos']);

echo $respuesta;

?>