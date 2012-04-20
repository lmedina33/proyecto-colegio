<?php 

session_start();
header("Cache-Control: no-store, no-cache, must-revalidate");

if(!isset($_SESSION["codigo"]) || empty($_SESSION["codigo"]) || !isset($_SESSION["nombre_usuario"]) || empty($_SESSION["nombre_usuario"]) || $_SESSION["modulo"]!="MODULO_ALUMNOS"){
	header("location: ../../LOGIN/index.php?logeo=A");
}


header ("Expires: Thu, 27 Mar 1980 23:59:00 GMT"); //la pagina expira en una fecha pasada
header ("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); //ultima actualizacion ahora cuando la cargamos
header ("Cache-Control: no-cache, must-revalidate"); //no guardar en CACHE
header ("Pragma: no-cache");

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
	<meta name="author" content="Dante Vidal Tueros, Analista Desarrollador"/>


	<script language="javascript" src="../../JS/LIBRERIAS/jquery1_6.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_interfaz_grafica.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_variables_globales.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_info_operacionales.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_info_verificacion.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_popup_aviso.js"></script>
	<script language="javascript" src="../../JS/FUNCIONES/funciones_info_fecha.js"></script>

	<script language="javascript" src="../../JS/MODULOS/MODULO_ALUMNOS/CURSOS/funciones_carga_pagina.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_ALUMNOS/CURSOS/funciones_click.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_ALUMNOS/CURSOS/funciones_post.js"></script>

	
	<script language="javascript" src="../../JS/MODULOS/MODULO_ALUMNOS/variables_globales.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_ALUMNOS/funciones_carga_pagina.js"></script>
	
	
	<link rel="stylesheet" type="text/css" href="../../CSS/general_tabla.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../../CSS/estilo_base.css" media="screen"/>  
	<link rel="stylesheet" type="text/css" href="../../CSS/MODULO_ALUMNOS/CURSOS/general.css" media="screen"> 
	<link rel="stylesheet" type="text/css" href="../../CSS/MODULO_ALUMNOS/CURSOS/transiciones_efectos.css" media="screen"> 
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
	<div id="cerrar_sesion" > <div id="imagen"> </div> <div class="texto">Cerrar sesion</div> </div>
	<div id="volver_atras" > <div id="imagen"> </div> <div class="texto">Volver al inicio</div> </div>
</div>



<div id="cuerpo-pagina">


	<div id="menu_vertical">
		<div id="titulo_menu">Mis Cursos</div>
			
			
					
	</div>
		
			<div id="contenido-opciones">
				<div class="opcion" id="opcion-notas" title="Seleccionado" ><div  class="texto_pestana">Notas</div></div>
				<div class="opcion" id="opcion-observaciones" ><div  class="texto_pestana">Observaciones</div></div>
			</div>
		<div id="contenido-pagina">
		
			<input type="hidden" id="codigo_curso_elegido" value=""/>
		<div id="contenido-notas-principal" class="contenido-principal alavista">
		
			<div id="titulo_notas">
				Reporte de notas
			</div>
			
			<div id="lista">
			<table border="1" cellpadding="0" cellspacing="0" id="cabecera_lista">
				<tr>
					<td width="14%">Categor&iacute;a</td>
					<td width="38%">Curso</td>
					<td width="7%">I</td>
					<td width="7%">II</td>
					<td width="7%">III</td>
					<td width="7%">IV</td>
					<td width="10%">Parcial</td>
					<td width="10%">Final</td>
				</tr>
			</table>
			
			<div id="contenido-lista">
			<table class="lista" border="1" cellpadding="0" cellspacing="0" ></table>
			</div>
			</div>
		
		</div>
		
		
		
		
		<div id="contenido-observaciones-principal" class="contenido-principal oculto">
			<div id="profesor">
			
			</div>
			
			
			<div id="observaciones">
					
				<div id="titulo">
					Observaciones
				</div>
				
			</div>
		</div>
		
		</div>
</div>
		




</body>
</html>