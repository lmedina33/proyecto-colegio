<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionProfesores.php");

$gestion_profesores=new DAOGestionProfesores();

$respuesta=$gestion_profesores->eliminar_profesor($_POST['codigo']);


echo $respuesta;


?>