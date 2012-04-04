<?php 

session_start();
header("Cache-Control: no-store, no-cache, must-revalidate");

if(!isset($_SESSION["codigo"]) || empty($_SESSION["codigo"]) || !isset($_SESSION["nombre_usuario"]) || empty($_SESSION["nombre_usuario"]) || $_SESSION["modulo"]!="MODULO_PADRES"){
	header("location: ../login/index.php?logeo=A");
}


header ("Expires: Thu, 27 Mar 1980 23:59:00 GMT"); //la pagina expira en una fecha pasada
header ("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); //ultima actualizacion ahora cuando la cargamos
header ("Cache-Control: no-cache, must-revalidate"); //no guardar en CACHE
header ("Pragma: no-cache");

?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
	<meta name="author" content="Dante Vidal Tueros, Analista Desarrollador"/>


	<script language="javascript" src="../JS/LIBRERIAS/jquery1_6.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_interfaz_grafica.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_variables_globales.js"></script>
	
	<script language="javascript" src="../JS/MODULOS/MODULO_PADRES/funciones_click.js"></script>
	<script language="javascript" src="../JS/MODULOS/MODULO_PADRES/funciones_post.js"></script>
	<script language="javascript" src="../JS/MODULOS/MODULO_PADRES/funciones_carga_pagina.js"></script>
	
	
	<link rel="stylesheet" type="text/css" href="../CSS/general_tabla.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../CSS/estilo_base.css" media="screen"/>  
	<link rel="stylesheet" type="text/css" href="../CSS/MODULO_PADRES/general.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../CSS/MODULO_PADRES/transiciones_efectos.css" media="screen"/> 
	<title>Untitled 3</title>
</head>

<body>

<div id="protector_transparente"></div>
<div id="div_back"></div>
<div id="div_back2"></div>
<div id="div_back3"></div>



<div id="cabecera-pagina">
	
	<div id="logotipo">
	
	</div>
</div>



<div id="cuerpo-pagina">

	<div id="btn_cursos" class="boton_area">
	
	</div>
	
	<div  id="btn_blog" class="boton_area">
	
	</div>
		
</div>


<div id="pie-pagina">

</div>



</body>
</html>