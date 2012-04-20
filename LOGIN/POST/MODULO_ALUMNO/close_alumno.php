<?php
session_start();

//ELIMINANDO LAS VARIABLES DE SESSION
//-----------------------------------------------------------


unset($_SESSION["codigo"],$_SESSION["modulo"],$_SESSION["nombre_usuario"],$_SESSION["nivel"],$_SESSION["grado"],$_SESSION["seccion"]);
//-----------------------------------------------------------

session_destroy();

?>