<div id="contenido-registro_cursos-cursos_rendimiento" class="contenido-cursos_rendimiento alavista">
	<div class="contenido_titulo" style="margin-top:4%;">
		Registro de cursos
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
					
		  		</select>
		  		
		  		</select> <input id="btn_agregar_seccion" title="Agregar una nueva secci&oacute;n" type="button" value="+"/>	
		  				
		Cursos: <select id="slc_curso">
					
		  		</select> <input id="btn_agregar_curso" title="Agregar un nuevo curso" type="button" value="+"/>	<input id="btn_modificar_curso" title="Modificar nombre de curso" type="button" value="*"/>	
		
		Profesor: <input id="txt_profesor" type="text" readonly="readonly"/>   		
		  		<input id="btn_elegir_profesor" type="button" value="Elegir un profesor"/>	
		  		
		  		
		  		<input id="btn_aceptar" type="button" value="Guardar registro"/>
		  		
		
		Lista de cursos  Nivel - Grado
		
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="40%">Curso</td>
				<td width="10%">Secci&oacute;n</td>
				<td width="50%">Profesor</td>
			</tr>
		</table>
		
		<table border="1" class="lista"></table>
		</div>
		
	</div>

</div>

<div id="contenido-notas_alumnos-cursos_rendimiento" class="contenido-cursos_rendimiento alavista">
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


<?php include("AREA_CURSOS_RENDIMIENTO/pop_ups.php"); ?>