<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->cambiar_profesor("3","P","arte","A","nuevo_id_mejorado");


echo $respuesta;


?>