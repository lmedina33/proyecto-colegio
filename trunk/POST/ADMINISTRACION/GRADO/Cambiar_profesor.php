<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->cambiar_profesor("3","P","lenguaje","nuevo_ID_profesor");


echo $respuesta;


?>