<?php

require_once("../../../DAO/ADMINISTRACION/DAOGestionAlumnos.php");

$gestion_alumnos=new DAOGestionAlumnos();

$respuesta=$gestion_alumnos->admin_modificar_alumno($_POST['codigo_anterior'],$_POST['codigo'],$_POST['nombres'],$_POST['apellido_p'],$_POST['apellido_m'],$_POST['edad'],$_POST['password'],$_POST['id_padre'],$_POST['grado'],$_POST['nivel'],$_POST['seccion'],$_POST['disponible'],$_POST['repitencia']);


echo $respuesta;


?>