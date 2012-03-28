<?php

require_once("../../../DAO/ADMINISTRACION/DAOCursos.php");

$gestion_grado=new DAOCursos();

$respuesta=$gestion_grado->insertar_dao_cursos("4","P","Algebra{A{70440138{Algebra{B{56548935{Religion{A{12345678{Religion{B{12345678{Ingles{A{325688{Ingles{B{1113258{","H");


echo $respuesta;


?>