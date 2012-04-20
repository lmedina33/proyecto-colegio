<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_insertar_alumno($_POST['codigo'],$_POST['nombres'],$_POST['apellido_p'],$_POST['apellido_m'],$_POST['password'],$_POST['grado'],$_POST['nivel'],$_POST['seccion'],$_POST['id_padre']);


echo $respuesta;


?>