<?php

require_once("../../DAO/MODULO_PROFESORES/DAOConsultasProfesor.php");

$gestion_profesor=new DAOConsultasProfesor();

$respuesta=$gestion_profesor->consultar_curso_dicta("profe1");


echo $respuesta;


?>