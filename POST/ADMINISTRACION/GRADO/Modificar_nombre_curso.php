<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->modificar_nombre_grado_cursos("3","P","matematica","Análisis Matematico");


echo $respuesta;


?>