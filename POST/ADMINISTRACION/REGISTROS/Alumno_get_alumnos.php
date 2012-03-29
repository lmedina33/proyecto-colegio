<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_get_alumnos($_POST['nivel'],$_POST['grado'],$_POST['seccion']);


echo $respuesta;


?>