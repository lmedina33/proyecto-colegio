<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->insertar_dao_cursos("4","P","matematica{A{70440138{matematica{B{56548935{lenguaje{A{12345678{lenguaje{B{12345678{arte{A{325688{arte{B{1113258{");


echo $respuesta;


?>