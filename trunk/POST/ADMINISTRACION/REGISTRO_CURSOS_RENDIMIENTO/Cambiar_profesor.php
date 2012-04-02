<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->cambiar_profesor($_POST['grado'],$_POST['nivel'],$_POST['nombre_curso'],$_POST['seccion'],$_POST['id_profesor']);


echo $respuesta;


?>