<div id="contenido-registro_cursos-cursos_rendimiento" class="contenido-cursos_rendimiento alavista">
	<div class="contenido_titulo" >
		Registro de cursos
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
					
		  		</select><input id="btn_agregar_seccion" title="Agregar una nueva secci&oacute;n" type="button" value="+" />	</div>
	
	</div>
		  
	
	<div class="reglon">
	Seleccione un curso:
	<select id="slc_curso">
	
		</select> <input id="btn_agregar_curso" title="Agregar un nuevo curso" type="button" value="+"/><input id="btn_modificar_curso" title="Modificar nombre de curso" type="button" value="*"/>	
	</div>
	
		 
	<div class="reglon">
	Profesor: <input id="txt_profesor" type="text" readonly="readonly"/>   		
		  		<input id="btn_elegir_profesor" type="button" value="Elegir un profesor"/>	
		  		
	</div> 			
		
		
	<!--<input id="btn_aceptar" type="button" value="Guardar registro"/> -->
		  		
		<div id="titulo_lista" class="subtitulo">Lista de cursos  Nivel - Grado</div>
		
		
	
		<div id="lista">
		<table id="cabecera_lista">
			<tr>
				<td width="40%">Curso</td>
				<td width="10%">Secci&oacute;n</td>
				<td width="50%">Profesor</td>
			</tr>
		</table>
		
		<div id="contenido-lista">
		<table class="lista" border="1"></table>
		</div>
		</div>
	</div>

</div>

<div id="contenido-notas_alumnos-cursos_rendimiento" class="contenido-cursos_rendimiento oculto">
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
					
		  		</select>	</div>
	
	</div>
		  
	
	<div class="reglon">
		Seleccione un curso: <select id="slc_curso">
	
		</select> 
	</div>
	
	<div class="reglon">
	Seleccione un bimestre:
		<select id="slc_bimestre">
			<option value="1">Primero</option>
			<option value="2">Segundo</option>
			<option value="3">Tercero</option>
			<option value="4">Cuarto</option>
		</select> 
	</div>
	
	<div class="reglon">
	Alumno: 
		<select id="slc_alumno">
		</select>
	Nota: <input id="txt_nota" type="text" size="9"/>	 <input id="btn_insertar_nota" title="Guardar la nota" type="button" value="Guardar" />
	</div>
	
	<div id="titulo_lista" class="subtitulo">Reporte de Notas</div>
	
	
		<div id="lista">
		<table border="1" cellpadding="0" cellspacing="0" id="cabecera_lista">
			<tr>
				<td width="7%">&Aacute;rea</td>
				<td width="45%">Curso</td>
				<td width="7%">I</td>
				<td width="7%">II</td>
				<td width="7%">III</td>
				<td width="7%">IV</td>
				<td width="10%">Parcial</td>
				<td width="10%">Final</td>
			</tr>
		</table>
		
		<div id="contenido-lista">
		<table class="lista" border="1"></table>
		</div>
		</div>
	</div>

</div>


<?php include("AREA_CURSOS_RENDIMIENTO/pop_ups.php"); ?>