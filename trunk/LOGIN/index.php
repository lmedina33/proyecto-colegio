<?php 

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=7" />
<title>LOGIN</title>
<link rel="stylesheet" type="text/css" href="../CSS/estilo_base.css" media="screen"/> 
<link rel="stylesheet" type="text/css" href="../CSS/general_popup.css" media="screen"/> 
<link rel="stylesheet" type="text/css" href="CSS/estilo_base.css" media="screen"> 

	<script language="javascript" src="../JS/LIBRERIAS/jquery1_6.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_popup_aviso.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_info_verificacion.js"></script>
	<script language="javascript" src="../JS/FUNCIONES/funciones_variables_globales.js"></script>
<script language="javascript" src="JS/funciones_login.js"></script>



<script language="javascript" src="JS/funciones_fmsg.js"></script>

</head>

<body>




<div id="div_back"></div>
<div id="div_back2"></div>
<table class="ancho_pantalla" align="center" cellpadding="0" cellspacing="0" border="0">
	<tbody>
		<tr> 
		<td>
			<div id="cabecera">
				<div id="logo"></div>
			</div>

		</td>
		</tr>
	</tbody>
</table >



<table class="ancho_pantalla" align="center" cellpadding="0" cellspacing="0" border="0">
	<tbody>
		<tr>
			<td>
			
			
			
			
			<div id="escritorio" >
			
				<input id="quien_logea" type="hidden" value="<?php echo $_GET['logeo']; ?>"/>
				<table width="65%" align="center" cellpadding="0" cellspacing="60" border="0">
						
					<tr>
					<td width="100%">
					<div id="login">
					
					<div id="titulo">
					
						IDENTIF&Iacute;QUESE
					
					</div>	
					
					<div id="cuerpo">
					
					<div id="imagen_login"><img src="IMAGENES/candado.jpg" width="129" height="129"/></div>
					
					<div id="form">
						<table width="100%" align="center">
							<tr>
								<td width="35%">Usuario</td>
								<td width="65%"> <input type="text" size="15" id="username"/></td>
							</tr>
							
							<tr>
								<td width="35%">Contrase&ntilde;a</td>
								<td width="65%"> <input type="password" size="15" id="password"/></td>
							</tr>
						</table>
						
						<table width="100%" align="center">
							<tr>
							<td width="100%">&nbsp;</td>
							</tr>
							<tr>
							<td width="100%">&nbsp;</td>
							</tr>
							<tr>
								<td width="100%" class="alinear_centro"><input type="button" size="10" value="Ingresar" id="boton_ingresar"/></td>
							
							</tr>
							
						
						</table>
					</div>
					
					</div>
					
					
					</div>
					
					</td>
					</tr>
					
			
					
				</table>

			
		
			
			 
			
			</div>
			
			</td>
		</tr>
	
	</tbody>
</table>

<?php include("../pop_ups.php"); ?>

</body>

</html>