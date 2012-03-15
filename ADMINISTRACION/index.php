<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
	<meta name="author" content="Dante Vidal Tueros, Analista Desarrollador"/>


	<script language="javascript" src="../JS/LIBRERIAS/jquery1_6.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_interfaz_grafica.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_popup_aviso.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_variables_globales.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_info_operacionales.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_info_verificacion.js"></script>
	
	<script language="javascript" src="../JS/MODULOS/variables_globales.js"></script>
	
	<script language="javascript" src="../JS/MODULOS/ADMINISTRACION/funciones_carga_pagina.js"></script>
	<script language="javascript" src="../JS/MODULOS/ADMINISTRACION/funciones_click.js"></script>
	<script language="javascript" src="../JS/MODULOS/ADMINISTRACION/GESTION_CONTENIDO_WEB/funciones_post.js"></script>
	<script language="javascript" src="../JS/MODULOS/ADMINISTRACION/GESTION_CONTENIDO_WEB/funciones_click.js"></script>
	<script language="javascript" src="../JS/MODULOS/ADMINISTRACION/funciones_animacion_menu_acordeon.js"></script>
	
	<link rel="stylesheet" type="text/css" href="../CSS/general_popup.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../CSS/estilo_base.css" media="screen"/>  
	<link rel="stylesheet" type="text/css" href="../CSS/ADMINISTRACION/general.css" media="screen"/> 
	<link rel="stylesheet" type="text/css" href="../CSS/ADMINISTRACION/transiciones_efectos.css" media="screen"/> 
	<title>Untitled 3</title>
</head>

<body>

<div id="protector_transparente"></div>
<div id="div_back"></div>
<div id="div_back2"></div>



<div id="cabecera">

</div>



<div id="cuerpo">

		
		<div id="menu_vertical">
			<div id="opcion-pag_web" class="opcion"></div>
				<div id="submenu-pag_web"  class="submenu">
				
					
					<div id="quienes_somos-pag_web" class="subopcion" title="Seleccionado">
						<div class="texto_pestana">¿Quienes somos?</div>						
					</div>
					
					<div id="mision_vision-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Misi&oacute;n y Visi&oacute;n</div>
					</div>
					
					<div id="metodologia-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Metodolog&iacute;a</div>
					</div>
					
					<div id="planilla_docente_admin-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Plana docente y administrativa</div>
					</div>
					
					<div id="Servicios-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Metodolog&iacute;a</div>
					</div>
					
					<div id="Admisiones-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Metodolog&iacute;a</div>
					</div>
					
					<div id="Actividades-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Metodolog&iacute;a</div>
					</div>
					
					<div id="Albumes de fotos-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Metodolog&iacute;a</div>
					</div>
					
					<div id="Videos-pag_web" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Metodolog&iacute;a</div>
					</div>
				</div>
				
			<div id="opcion-registros"  class="opcion"></div>			
				<div id="submenu-registros"  class="submenu">
				
						
					<div id="alumnos-registros" class="subopcion" title="Seleccionado">
						<div class="texto_pestana">Registrar Alumnos</div>						
					</div>
						
					<div id="consultar_alumnos-registros" class="subopcion" title="Seleccionado">
						<div class="texto_pestana">Consultar Alumnos</div>						
					</div>
					
					<div id="padres-registros" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Registrar Padres</div>
					</div>
					
					<div id="consultar_padres-registros" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Consultar Padres</div>
					</div>
					
					<div id="profesores-registros" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Registrar Profesores</div>
					</div>
					
					<div id="consultar_profesores-registros" class="subopcion" title="Click para seleccionar">
						<div class="texto_pestana">Consultar Profesores</div>
					</div>
					
				</div>
				
			<div id="3"  class="opcion"></div>
				<div id="submenu_3"  class="submenu">
				
					<div id="subopcion_1" class="subopcion" title="Click para seleccionar"></div>
					<div id="subopcion_2" class="subopcion" title="Click para seleccionar"></div>
					<div id="subopcion_3" class="subopcion" title="Click para seleccionar"></div>
					
				</div>
				
			<div class="sub_opcion"></div>
			<div class="opcion"></div>
		</div>

		<div id="contenido">
			
			
			<div id="area_pag_web" class="area oculto">
							
				<?php include("AREA_GESTION_CONTENIDO_WEB/contenido.php"); ?>
			</div>	
			
			<div id="area_registros" class="area oculto">
							
				<?php include("AREA_REGISTROS/contenido.php"); ?>
			</div>	
			
			<!-- 
			<div id="contenido_sobra_derecha"></div>
			<div id="contenido_sombra_inferior"></div>
			<div id="contenido_sombra_inferior_derecha"></div>-->
		</div>
		
</div>


<div id="pie_pagina">

</div>

	<?php include("../pop_ups.php"); ?>

</body>
</html>