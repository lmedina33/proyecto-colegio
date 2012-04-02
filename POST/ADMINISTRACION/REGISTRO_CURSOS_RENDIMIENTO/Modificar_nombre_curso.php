<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->modificar_nombre_grado_cursos($_POST['grado'],$_POST['nivel'],$_POST['nombre_actual'],$_POST['nuevo_nombre']);


echo $respuesta;


?>