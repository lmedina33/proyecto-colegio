<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
	<meta name="author" content="Dante Vidal Tueros, Analista Desarrollador"/>


	<script language="javascript" src="../JS/LIBRERIAS/jquery1_6.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_interfaz_grafica.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_variables_globales.js"></script>
	
	<script language="javascript" src="../JS/MODULOS/PORTAL/funciones_animacion_catalogo.js"></script>
	<script language="javascript" src="../JS/MODULOS/PORTAL/funciones_animacion_menu_principal.js"></script>
	<script language="javascript" src="../JS/MODULOS/PORTAL/funciones_animacion_album_fotos.js"></script>
	<script language="javascript" src="../JS/MODULOS/PORTAL/funciones_click.js"></script>
	<script language="javascript" src="../JS/MODULOS/PORTAL/funciones_post.js"></script>
	<script language="javascript" src="../JS/MODULOS/PORTAL/funciones_carga_pagina.js"></script>
	
	
	<link rel="stylesheet" type="text/css" href="../CSS/general_tabla.css" media="screen"> 
	<link rel="stylesheet" type="text/css" href="../CSS/estilo_base.css" media="screen">  
	<link rel="stylesheet" type="text/css" href="../CSS/PORTAL/general.css" media="screen"> 
	<link rel="stylesheet" type="text/css" href="../CSS/PORTAL/galeria_fotos.css" media="screen"> 
	<link rel="stylesheet" type="text/css" href="../CSS/PORTAL/cara1.css" media="screen"> 
	<link rel="stylesheet" type="text/css" href="../CSS/PORTAL/transiciones_efectos.css" media="screen"> 
	<title>Untitled 3</title>
</head>

<body>

<div id="protector_transparente"></div>
<div id="protector_marco_foto"></div>

<div id="div_back"></div>
<div id="div_back2"></div>
<div id="div_back3"></div>

<div id="marco_foto_mostrada">
	<div id="boton_cerrar" title="Pulse aquí para cerrar la foto">
	
	</div>
	<img src="" width="200"  width="200" />
	
</div>
<div id="galeria_fotos">
<?php include("GALERIA_FOTOS/contenido.php"); ?>
</div>




<div id="cabecera">

</div>



<div id="cuerpo">

		
		<div id="contenedor_menu">
			<div id="menu_vertical">
				<div id="1-quienes_somos" title="Seleccionada" class="opcion">¿Qui&eacute;nes Somos?</div>
				
				<div id="2-mision_vision" title="Click para seleccionar" class="opcion">Misi&oacute;n y Visi&oacute;n</div>
				
				<div id="3-plana_docente_administrativa" title="Click para seleccionar" class="opcion">Plana docente y administrativa</div>
				
				<div id="4-servicios" title="Click para seleccionar" class="opcion">Servicios</div>
			</div>

		</div>
		
		<div id="catalogo">
			
			<div id="opciones_vertical_izq">
				<div id="opcion_inicial" class="opcion_vertical-catalogo"></div>
				<div id="opcion_primaria" class="opcion_vertical-catalogo"></div>
			
				
				<div id="cerrar_catalogo"></div>
				
			</div>
			
			
			<div id="contenido">
			
				<div id="cara_4">
					<div id="contenido-secundaria" class="area area-secundaria oculto">
						<?php include("SECUNDARIA/contenido_derecha.php"); ?>
					</div>
				</div>
				
				<div id="cara_3">
						
					<div id="contenido-primaria" class="area area-primaria oculto">
						<?php include("PRIMARIA/contenido_derecha.php"); ?>
					</div>
					
					<div id="contenido-secundaria" class="area area-secundaria oculto">
						<?php include("SECUNDARIA/contenido_izquierda.php"); ?>
					</div>
				</div>
				<div id="cara_2">
					
					<div id="contenido-inicial" class="area area-inicial oculto">
						<?php include("INICIAL/contenido_derecha.php"); ?>
					</div>
					
					<div id="contenido-primaria" class="area area-primaria oculto">
						<?php include("PRIMARIA/contenido_izquierda.php"); ?>
					</div>
				</div>
				<div id="cara_1">
				
					<div id="contenido-cara_1" class="area area-principal alavista">
						<?php include("CARA_1/contenido.php"); ?>
					</div>
					
					<div id="contenido-inicial" class="area area-inicial oculto">
						<?php include("INICIAL/contenido_izquierda.php"); ?>
					</div>
				</div>
				
				
				
				<div id="sub_menu_inferior"> 
					<div id="opcion-admision" class="opcion" title="Click para seleccionar">Admisiones</div>
					<div id="opcion-album"  class="opcion" title="Click para seleccionar">Album de fotos</div> 
				</div>
				
			</div>
			
			<div id="opciones_vertical">
				<div id="opcion_inicial" class="opcion_vertical-catalogo"></div>
				<div id="opcion_primaria" class="opcion_vertical-catalogo"></div>
				<div id="opcion_secundaria" class="opcion_vertical-catalogo"></div>
			</div>
		</div>
</div>


<div id="pie_pagina">

</div>



</body>
</html>