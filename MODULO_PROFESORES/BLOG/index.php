<?php 

session_start();
header("Cache-Control: no-store, no-cache, must-revalidate");

if(!isset($_SESSION["codigo"]) || empty($_SESSION["codigo"]) || !isset($_SESSION["nombre_usuario"]) || empty($_SESSION["nombre_usuario"]) || $_SESSION["modulo"]!="MODULO_PROFESORES"){
	header("location: ../LOGIN/index.php?logeo=PR");
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


	<script language="javascript" src="../../JS/LIBRERIAS/jquery1_6.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_interfaz_grafica.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_variables_globales.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_info_operacionales.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_info_verificacion.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_popup_aviso.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_info_fecha.js"></script>

	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/BLOG/funciones_click.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/BLOG/funciones_change.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/BLOG/funciones_post.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/variables_globales.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/funciones_carga_pagina.js"></script>
	
	
	
	<link rel="stylesheet" type="text/css" href="../../CSS/general_tabla.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../../CSS/estilo_base.css" media="screen"/>  
	<link rel="stylesheet" type="text/css" href="../../CSS/general_popup.css" media="screen"/>  
	<link rel="stylesheet" type="text/css" href="../../CSS/MODULO_PROFESORES/BLOG/general.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../../CSS/MODULO_PROFESORES/BLOG/transiciones_efectos.css" media="screen"/> 
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


	<div id="menu_vertical">
		<div id="titulo_menu">Mis Cursos</div>
				
					
	</div>
		
			<div id="contenido-opciones">
			
			</div>
		<div id="contenido-pagina">
			
			<input type="hidden" id="codigo_curso_elegido" value=""/>
			
			<div id="elegir_alumno">
					<select id="slc_alumno">
							
					</select>
			</div>
			
			
			<div id="blog">
					
				<div id="titulo">
					Blog
				</div>
				
			</div>
			
			<div id="nueva_entrada">
				
				<div class="texto">
					Escriba una nueva respuesta en su blog:
				</div>
				<div class="caja">
					<textarea rows="5" cols="40" id="txt_nueva_entrada"></textarea>
				</div>
				
				<div class="boton">
					<input id="btn_aceptar" value="Aceptar" type="button"/>
				</div>
			</div>
		</div>
</div>
		


<?php include("../../pop_ups.php"); ?>


</body>
</html>