<div id="contenido-alumnos-registros" class="contenido-registros alavista">
	<div class="contenido_titulo" >
		Registro de alumnos
	</div>
	<div id="contenido-cuerpo">
	
 	<div class="reglon">
		<div>C&oacute;digo de alumno:</div><input id="txt_codigo" type="text" value=""/>
	</div>
	
	
	<div class="reglon">
		<div>Padre/apoderado: 
		</div><select id="slc_padre">
		  </select>
	</div>
	
	<div class="reglon">
		<div>Nombres:</div><input id="txt_nombres" type="text" value=""/>
	</div>
	
	<div class="reglon">
		<div>Apellido Paterno:</div><input id="txt_apellido_p" type="text" value=""/>
	</div>
	
	<div class="reglon">
		<div>Apellido Materno: 
		</div><input id="txt_apellido_m" type="text" value=""/>
	</div>
	
	<div class="reglon">
		<div>Password:
		</div><input id="txt_password" type="text" value=""/>
	</div>
	
	<div class="reglon">
		<div>Nivel:
		</div><select id="slc_nivel">
			  <option value="I">Inicial</option>
			  <option value="P">Primaria</option>
			  <option value="S">Secundaria</option> 
		  </select>
	</div>
	
	<div class="reglon">
	
		<div>Grado:
		</div><select id="slc_grado">
				<option value="1">1</option><option value="2">2</option>
		  		</select>
	</div>
		 
	<div class="reglon">
	
		<div>Seccion: 
		</div>	<select id="slc_seccion">
					
		  		</select>
	</div>
	
		 
		 <input id="btn_aceptar" type="button" value="Guardar registro"/>
		
		
	</div>

</div>



<div id="contenido-consultar_alumnos-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" >
		Consulta de alumnos
	</div>
	<div id="contenido-cuerpo">
		
	<div class="reglon">
	
		<div class="campo">Nivel:</div>
		
		<div class="campo">Grado:</div>
		
		<div class="campo">Seccion: </div>
		
		
	</div>
	
	
	<div class="reglon">
	
		<div class="campo"><select id="slc_nivel">
			  <option value="I">Inicial</option>
			  <option value="P">Primaria</option>
			  <option value="S">Secundaria</option> 
		  </select></div>
		
		<div class="campo"><select id="slc_grado">
				<option value="1">1</option><option value="2">2</option>
		  		</select></div>
		
		<div class="campo"><select id="slc_seccion">
					
		  		</select></div>
	
	</div>
	
	
	
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="15%">Codigo</td>
				<td width="35%">Nombres y Apellidos</td>
				<td width="15%">Password</td>
				<td width="35%">Padre</td>
			</tr>
		</table>
		
		<div id="contenido-lista">
		<table class="lista"></table>
		</div>
		</div>
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		
		<div id="campos_modif"> 
		
		<div id="bloque-izq">
		<div class="reglon">
			Estado: <select id="slc_habilitado">
			
				  <option value="1">Habilitado</option>
				  <option value="0">No habilitado</option> 
			  		</select>
		</div>
		
		<div class="reglon">		
		C&oacute;digo de alumno: <input id="txt_codigo" type="text" value=""/>
		</div>
		
		<div class="reglon">
		Password: <input id="txt_password" type="text" value=""/>		
		</div>
		
		<div class="reglon">
			Padre/apoderado: 
			<select id="slc_padre">
			  </select>
		</div>
		
		<div class="reglon">		
		Nombres: <input id="txt_nombres" type="text" value=""/>
		</div>	
		
		<div class="reglon">	
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>	
		</div>
		
		<div class="reglon">	
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>	
		</div>
		
		<div class="reglon">
		
		Nivel: <select id="slc_nivel_modif">
			  <option value="I">Inicial</option>
			  <option value="P">Primaria</option>
			  <option value="S">Secundaria</option> 
		  </select>		
		</div>
		
		<div class="reglon">	
		Grado: <select id="slc_grado_modif">
				<option value="1">1</option><option value="2">2</option><option value="3">3</option>
		  		</select>	
		  		Seccion: <select id="slc_seccion_modif">
		  		</select>
		</div>
			
	<div class="reglon " >
	
		
		¿Repitente?  <select id="chk_repitencia" ><option value="si">Sí</option><option value="no">No</option></select>
		<div style="width:30px; float:right;height:15px;"></div>
					
		  	
	</div>
		
		
		
		
		
		
		</div>
		  		
	
		
		
		<div id="bloque-inf">
		
		
		<input id="btn_modificar" type="button" value="Modificar registro"/>
		
		<input class="alinear_derecha" id="btn_eliminar" type="button" value="Eliminar"/>
		
		
		</div>
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>

</div>

</div>





<div id="contenido-consultar_alumnos_no_dispo-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" >
		Consulta de alumnos no disponibles
	</div>
	<div id="contenido-cuerpo">
		

	
	
	
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="15%">Codigo</td>
				<td width="35%">Nombres y Apellidos</td>
				<td width="15%">Password</td>
				<td width="35%">Padre</td>
			</tr>
		</table>
		
		<div id="contenido-lista">
		<table class="lista"></table>
		</div>
		</div>
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		
		<div id="campos_modif"> 
		
		<div id="bloque-izq">
		<div class="reglon">
			Estado: <select id="slc_habilitado">
			
				  <option value="1">Habilitado</option>
				  <option value="0">No habilitado</option> 
			  		</select>
		</div>
		
		<div class="reglon">		
		C&oacute;digo de alumno: <input id="txt_codigo" type="text" value=""/>
		</div>
		
		<div class="reglon">
		Password: <input id="txt_password" type="text" value=""/>		
		</div>
		
		<div class="reglon">
			Padre/apoderado: 
			<select id="slc_padre">
			  </select>
		</div>
		
		<div class="reglon">		
		Nombres: <input id="txt_nombres" type="text" value=""/>
		</div>	
		<div class="reglon">	
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>	
		</div>
		
		<div class="reglon">	
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>	
		</div>
		
		<div class="reglon">
		
		Nivel: <select id="slc_nivel_modif">
			  <option value="I">Inicial</option>
			  <option value="P">Primaria</option>
			  <option value="S">Secundaria</option> 
		  </select>		
		</div>
		
		<div class="reglon">	
		Grado: <select id="slc_grado_modif">
				<option value="1">1</option><option value="2">2</option><option value="3">3</option>
		  		</select>	
		  		Seccion: <select id="slc_seccion_modif">
		  		</select>
		</div>
		
		
		
	<div class="reglon " >
	
		
	 ¿Repitente? <select id="chk_repitencia" ><option value="si">Sí</option><option value="no">No</option></select>
		<div style="width:30px; float:right;height:15px;"></div>
					
		  	
	</div>
		
		
		
		
		</div>
		
		
		<div id="bloque-inf">
		
		
		<input id="btn_modificar" type="button" value="Modificar registro"/>
		
		<input class="alinear_derecha" id="btn_eliminar" type="button" value="Eliminar"/>
		
		</div>
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>

</div>

</div>


<div id="contenido-padres-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" >
		Registro de Padres 
	</div>
	<div id="contenido-cuerpo">
	
		<div class="reglon">
			<div>DNI:</div><input id="txt_dni" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Nombres:</div><input id="txt_nombres" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Apellido Paterno: </div><input id="txt_apellido_p" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Apellido Materno:</div><input id="txt_apellido_m" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Usuario: </div><input id="txt_user" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Password: </div><input id="txt_password" type="text" value=""/>
		</div>
		 
		<input id="btn_aceptar" type="button" value="Guardar registro"/>
	</div>


</div>


<div id="contenido-consultar_padres-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" >
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
		
		<div id="contenido-lista">
		<table class="lista"></table>
		</div>
		</div>
		
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		<div id="campos_modif"> 
		
		<div id="bloque-izq" class="oculto">
			<div class="reglon">
			Estado: 
			<select id="slc_habilitado">
			
			  <option value="1">Habilitado</option>
				 <option value="0">No habilitado</option> 
			</select>
			</div>
			
			<div class="reglon">DNI: <input id="txt_codigo" type="text" value=""/></div>
			<div class="reglon">Nombres: <input id="txt_nombres" type="text" value=""/></div>
			<div class="reglon">Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/></div>
			<div class="reglon">	Usuario: <input id="txt_user" type="text" value=""/></div>
		</div>
		
		
		<div id="bloque-der" class="oculto">
		
			<div class="reglon"></div>
			<div class="reglon"></div>
			<div class="reglon"></div>
			<div class="reglon">Apellido Materno: <input id="txt_apellido_m" type="text" value=""/></div>
			<div class="reglon">
		Password: <input id="txt_password" type="text" value=""/></div>
		</div>
		
		
		<div id="bloque-inf" class="oculto">
		<input id="btn_modificar" type="button" value="Modificar registro"/>
		<input class="alinear_derecha" id="btn_eliminar" type="button" value="Eliminar"/>
		</div>
				  		
		</div>	
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>
</div>



<div id="contenido-profesores-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" >
		Registro de profesores
	</div>
	<div id="contenido-cuerpo">
	
		
		
		<div class="reglon">
			<div>DNI:</div><input id="txt_dni" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Nombres:</div><input id="txt_nombres" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Apellido Paterno: </div><input id="txt_apellido_p" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Apellido Materno:</div><input id="txt_apellido_m" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Usuario: </div><input id="txt_user" type="text" value=""/>
		</div>
		<div class="reglon">
			<div>Password: </div><input id="txt_password" type="text" value=""/>
		</div>
		 
		<input id="btn_aceptar" type="button" value="Guardar registro"/>
	</div>


</div>



<div id="contenido-consultar_profesores-registros" class="contenido-registros oculto">
	<div class="contenido_titulo" >
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
		
		<div id="contenido-lista">
		<table class="lista"></table>
		</div>
		</div>
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		<div id="campos_modif"> 
		
		<div id="bloque-izq" class="oculto">
			<div class="reglon">
			Estado: 
			<select id="slc_habilitado">
			
			  <option value="1">Habilitado</option>
				 <option value="0">No habilitado</option> 
			</select>
			</div>
			
			<div class="reglon">DNI: <input id="txt_codigo" type="text" value=""/></div>
			<div class="reglon">Nombres: <input id="txt_nombres" type="text" value=""/></div>
			<div class="reglon">Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/></div>
			<div class="reglon">	Usuario: <input id="txt_user" type="text" value=""/></div>
		</div>
		
		
		<div id="bloque-der" class="oculto">
		
			<div class="reglon"></div>
			<div class="reglon"></div>
			<div class="reglon"></div>
			<div class="reglon">Apellido Materno: <input id="txt_apellido_m" type="text" value=""/></div>
			<div class="reglon">
		Password: <input id="txt_password" type="text" value=""/></div>
		</div>
		
		
		<div id="bloque-inf" class="oculto">
		<input id="btn_modificar" type="button" value="Modificar registro"/>
		<input class="alinear_derecha" id="btn_eliminar" type="button" value="Eliminar"/>
		</div>
				  		
		</div>	
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>
</div>




<?php include("AREA_GESTION_CONTENIDO_WEB/pop_ups.php"); ?>