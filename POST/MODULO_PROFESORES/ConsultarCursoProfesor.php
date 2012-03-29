<?php
session_start();
require_once("../../DAO/MODULO_PROFESORES/DAOConsultasProfesor.php");

$gestion_profesor=new DAOConsultasProfesor();

$respuesta=$gestion_profesor->consultar_curso_dicta($_SESSION["codigo"]);

//dni5 debe ser reemplazado por $_SESSION['codigo_profesor'] que es el dni
echo $respuesta;


?>