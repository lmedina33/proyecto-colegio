<div id="contenido-quienes_somos-pag_web" class="contenido-pag_web alavista">
	<div class="contenido-titulo" style="margin-top:4%;">
		�Qui&eacute;nes somos?
	</div>
	<div id="contenido-cuerpo">
		
		<textarea id="txt_quienes_somos" cols="40" rows="10"></textarea>
		
		<input type="button" id="btn_aceptar" value="guardar"/>
	</div>

</div>



<div id="contenido-mision_vision-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Mision y vision
	</div>
	<div id="contenido-cuerpo">
		<textarea id="txt_mision_vision" cols="40" rows="10"></textarea>
		
		<input type="button" id="btn_aceptar" value="guardar"/>
	</div>


</div>


<div id="contenido-metodologia-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Metodolog&iacute;a
	</div>
	<div id="contenido-cuerpo">
		<select id="nivel_academico">
			<option value="I">Inicial</option>
			<option value="P">Primaria</option>
			<option value="S">Secundaria</option>
		</select>
		
		<textarea id="txt_metodologia" cols="40" rows="10"   ></textarea>
		
		<input type="button" id="btn_aceptar" value="guardar"/>
	</div>


</div>


<div id="contenido-actividades-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Actividades
	</div>
	<div id="contenido-cuerpo">
		<select id="nivel_academico">
			<option value="I">Inicial</option>
			<option value="P">Primaria</option>
			<option value="S">Secundaria</option>
		</select>
		
		<textarea id="txt_actividades" cols="40" rows="10"   ></textarea>
		
		<input type="button" id="btn_aceptar" value="guardar"/>
	</div>


</div>



<div id="contenido-admision-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Admisi&oacute;
	</div>
	<div id="contenido-cuerpo">
		<select id="nivel_academico">
			<option value="I">Inicial</option>
			<option value="P">Primaria</option>
			<option value="S">Secundaria</option>
		</select>
		
		<textarea id="txt_admision" cols="40" rows="10"   ></textarea>
		
		<input type="button" id="btn_aceptar" value="guardar"/>
	</div>


</div>



<div id="contenido-servicios-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Servicios
	</div>
	<div id="contenido-cuerpo">
		
		Titulo
		<input type="text" id="txt_titulo"/>
		
		Servicio
		<textarea id="txt_servicio" cols="40" rows="10"   ></textarea>
		
		<input type="button" id="btn_agregar" value="Agregar"/>
		
		<div id="servicios_agregados">
		
		</div>
		<input type="button" id="btn_borrar_ultimo" value="Borrar &uacute;ltimo agregado"/>
		<input type="button" id="btn_guardar" value="Guardar todo"/>
	</div>


</div>


<div id="contenido-planilla_docente_admin-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Registro de Administrativos
	</div>
	<div id="contenido-cuerpo">
		DNI: <input id="txt_dni" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Cargo: <select id="slc_nivel">
			  <option value="Director">Director</option>
			  <option value="Sub-director">Sub-director</option>
			  <option value="Secretaria">Secretaria</option> 
		  </select>
  		
		<input id="btn_guardar" type="button" value="Guardar registro"/>
        
	</div>

</div>

<div id="contenido-consultar_admin-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" style="margin-top:4%;">
		Consulta de Administrativos
	</div>
	
	<div id="contenido-cuerpo">		  		
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="15%">DNI</td>
				<td width="50%">Nombres y Apellidos</td>
				<td width="18%">Cargo</td>
			</tr>
		</table>
		
		<table class="lista"></table>
		</div>
		
		<!--ESTA AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
		<!--Habilitado: 
		<select id="slc_habilitado">
		
		  <option value="disponible">Habilitado</option>
			 <option value="no_disponible">No habilitado</option> 
		</select> -->
		  		
		  		
		DNI: <input id="txt_dni" type="text" value=""/>
		Nombres: <input id="txt_nombres" type="text" value=""/>
		Apellido Paterno: <input id="txt_apellido_p" type="text" value=""/>
		Apellido Materno: <input id="txt_apellido_m" type="text" value=""/>
		Cargo: <select id="slc_nivel">
			  <option value="Director">Director</option>
			  <option value="Sub-director">Sub-director</option>
			  <option value="Secretaria">Secretaria</option> 
		  </select>
				  		
		<input id="btn_aceptar" type="button" value="Modificar registro"/>
		  		
		  		
		<!--FIN AREA ES PARA LA MODIFICACION DE LOS DATOS DE UN ALUMNO SELECCIONADO-->
	</div>
</div>


<div id="contenido-subida_fotos-pag_web" class="contenido-pag_web oculto">
	<div class="contenido_titulo" >
		Subida de fotos
	</div>
	
	<div id="contenido-cuerpo">		  		
		
		<div id="caja_superior">
		Seleccione un nivel:
		<select id="slc_nivel">
			<option value="INICIAL">Inicial</option>
			<option value="PRIMARIA">Primaria</option>
			<option value="SECUNDARIA">Secundaria</option>
		</select>
		</div>
		
		
		<input id="upload_button" type="button" value="Seleccionar Foto" />	
		
		
		<div id="lista_fotos" style="">
			<div id="casilla_foto">
				<input type="radio" name="seleccionar_foto" class="seleccionar_foto" value="S" />
				<div id="foto"></div>
			</div>
		
		</div>   
		
		<div id="eliminar_foto" >Eliminar la foto seleccionada </div>	
		
	</div>
</div>

<?php include("AREA_GESTION_CONTENIDO_WEB/pop_ups.php"); ?>