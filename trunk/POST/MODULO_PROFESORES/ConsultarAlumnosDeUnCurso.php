<?php

require_once("../../DAO/MODULO_PROFESORES/DAOConsultasProfesor.php");

$gestion_profesor=new DAOConsultasProfesor();

$respuesta=$gestion_profesor->consultar_alumnos_curso_dicta("S5AlgebraA");


echo $respuesta;


?>