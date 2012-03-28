<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_alumnos=new DAOCursos();

$respuesta=$gestion_alumnos->actualizar_nota("CodAlum34","cod_curso34",3,12.5);


echo $respuesta;


?>