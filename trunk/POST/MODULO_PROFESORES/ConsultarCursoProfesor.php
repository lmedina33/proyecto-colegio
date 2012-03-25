<?php

require_once("../../DAO/MODULO_PROFESORES/DAOConsultasProfesor.php");

$gestion_profesor=new DAOConsultasProfesor();

$respuesta=$gestion_profesor->consultar_curso_dicta("dni5");

//dni5 debe ser reemplazado por $_SESSION['codigo_profesor'] que es el dni
echo $respuesta;


?>