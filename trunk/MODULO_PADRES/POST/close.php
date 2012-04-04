<?php
session_start();

//ELIMINANDO LAS VARIABLES DE SESSION
//-----------------------------------------------------------


unset($_SESSION["usuario"],$_SESSION["modulo"],$_SESSION["dni_usuario"],$_SESSION["nombre_usuario"]);
//-----------------------------------------------------------

session_destroy();

?>