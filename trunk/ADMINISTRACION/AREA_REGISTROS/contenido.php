<div id="contenido-alumnos-registros" class="contenido-registros alavista">
	<div class="contenido_titulo" style="margin-top:4%;">
		Registro de alumnos
	</div>
	<div id="contenido-cuerpo">
		C&oacute;digo de alumno: <input id="txt_codigo" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Password: <input id="txt_password" type="text" value=""/>
		Nivel: <select id="slc_nivel">
			  <option value="I">Inicial</option>
			  <option value="P">Primaria</option>
			  <option value="S">Secundaria</option> 
		  </select>
		
		Grado: <select id="slc_grado">
				<option value="1">1</option><option value="2">2</option><option value="3">3</option>
		  		</select>
		Seccion: <select id="slc_seccion">
					<option value="A">A</option><option value="B">B</option>
		  		</select>
		  		
		  		<input id="btn_aceptar" type="button" value="Guardar registro"/>
	</div>

</div>

<div id="contenido-consultar_alumnos-registros" class="contenido-registros alavista">
	<div class="contenido_titulo" style="margin-top:4%;">
		Consulta de alumnos
	</div>
	<div id="contenido-cuerpo">
		Nivel: <select id="slc_nivel">
			  <option value="I">Inicial</option>
			  <option value="P">Primaria</option>
			  <option value="S">Secundaria</option> 
		  </select>
		
		Grado: <select id="slc_grado">
				<option value="1">1</option><option value="2">2</option><option value="3">3</option>
		  		</select>
		Seccion: <select id="slc_seccion">
		<option value="A">A</option><option value="B">B</option>
		  		</select>
		  		
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="10%">Codigo</td>
				<td width="40%">Nombres y Apellidos</td>
				<td width="10%">Password</td>
				<td width="40%">Padre</td>
			</tr>
		</table>
		
		<table class="lista"></table>
		</div>
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		Habilitado: <select id="slc_habilitado">
		
			  <option value="disponible">Habilitado</option>
			  <option value="no_disponible">No habilitado</option> 
		  		</select>
		  		
		  		
		C&oacute;digo de alumno: <input id="txt_codigo" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Password: <input id="txt_password" type="text" value=""/>
		Nivel: <select id="slc_nivel">
			  <option value="I">Inicial</option>
			  <option value="P">Primaria</option>
			  <option value="S">Secundaria</option> 
		  </select>
		
		Grado: <select id="slc_grado">
		  		</select>
		Seccion: <select id="slc_seccion">
		  		</select>
		  		
		<input id="btn_aceptar" type="button" value="Modificar registro"/>
		  		
		  		
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>

</div>



<div id="contenido-padres-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Registro de Padres 
	</div>
	<div id="contenido-cuerpo">
		DNI: <input id="txt_dni" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Usuario: <input id="txt_user" type="text" value=""/>
		Password: <input id="txt_password" type="text" value=""/>
		
		<input id="btn_aceptar" type="button" value="Guardar registro"/>
	</div>


</div>


<div id="contenido-consultar_padres-registros" class="contenido-registros alavista">
	<div class="contenido_titulo" style="margin-top:4%;">
		Consulta de Padres
	</div>
	
	<div id="contenido-cuerpo">		  		
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="15%">DNI</td>
				<td width="50%">Nombres y Apellidos</td>
				<td width="18%">Usuario</td>
				<td width="17%">Password</td>
			</tr>
		</table>
		
		<table class="lista"></table>
		</div>
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		Habilitado: 
		<select id="slc_habilitado">
		
		  <option value="disponible">Habilitado</option>
			 <option value="no_disponible">No habilitado</option> 
		</select>
		  		
		  		
		DNI: <input id="txt_codigo" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Usuario: <input id="txt_password" type="text" value=""/>
		Password: <input id="txt_password" type="text" value=""/>
				  		
		<input id="btn_aceptar" type="button" value="Modificar registro"/>
		  		
		  		
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>
</div>



<div id="contenido-profesores-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Registro de profesores
	</div>
	<div id="contenido-cuerpo">
		DNI: <input id="txt_dni" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Usuario: <input id="txt_user" type="text" value=""/>
		Password: <input id="txt_password" type="text" value=""/>
		
		<input id="btn_aceptar" type="button" value="Guardar registro"/>
	</div>


</div>



<div id="contenido-consultar_profesores-registros" class="contenido-registros alavista">
	<div class="contenido_titulo" style="margin-top:4%;">
		Consulta de Profesores
	</div>
	
	<div id="contenido-cuerpo">		  		
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="15%">DNI</td>
				<td width="50%">Nombres y Apellidos</td>
				<td width="18%">Usuario</td>
				<td width="17%">Password</td>
			</tr>
		</table>
		
		<table class="lista"></table>
		</div>
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		Habilitado: 
		<select id="slc_habilitado">
		
		  <option value="disponible">Habilitado</option>
			 <option value="no_disponible">No habilitado</option> 
		</select>
		  		
		  		
		DNI: <input id="txt_codigo" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Usuario: <input id="txt_password" type="text" value=""/>
		Password: <input id="txt_password" type="text" value=""/>
				  		
		<input id="btn_aceptar" type="button" value="Modificar registro"/>
		  		
		  		
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>
</div>

<?php include("AREA_GESTION_CONTENIDO_WEB/pop_ups.php"); ?>