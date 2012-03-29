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

	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/OBSERVACIONES/funciones_click.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/OBSERVACIONES/funciones_change.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/OBSERVACIONES/funciones_post.js"></script>
	
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/variables_globales.js"></script>
	<script language="javascript" src="../../JS/MODULOS/MODULO_PROFESORES/funciones_carga_pagina.js"></script>
	
	<link rel="stylesheet" type="text/css" href="../../CSS/general_tabla.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../../CSS/estilo_base.css" media="screen"/>  
	<link rel="stylesheet" type="text/css" href="../../CSS/general_popup.css" media="screen"/>  
	<link rel="stylesheet" type="text/css" href="../../CSS/MODULO_PROFESORES/OBSERVACIONES/general.css" media="screen"> 
	<link rel="stylesheet" type="text/css" href="../../CSS/MODULO_PROFESORES/OBSERVACIONES/transiciones_efectos.css" media="screen"> 
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
				<div class="opcion" id="opcion-observaciones" title="Seleccionado" ><div  class="texto_pestana">Observaciones</div></div>
			</div>
		<div id="contenido-pagina">
			
			<input type="hidden" id="codigo_curso_elegido" value=""/>
			<div id="elegir_alumno">
					
				<div class="linea">
						<select id="slc_alumno">
							<option id="0">Seleccione a un alumno</option>
						</select>
				</div>
			</div>
			
			
			<div id="observaciones">
					
				<div id="titulo">
					Observaciones
				</div>
				
			</div>
			
			<div id="nueva_observacion">
				
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