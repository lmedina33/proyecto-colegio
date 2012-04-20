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
					
		  		</select><input id="btn_agregar_seccion" title="Agregar una nueva secci&oacute;n" type="button" value="+" />
				  
				  	</div>
	<input id="btn_eliminar_seccion" title="Agregar una nueva secci&oacute;n" type="button" value="Eliminar la &uacute;ltima secci&oacute;n" />
	</div>
		  
	
	<div class="reglon">
	Seleccione un curso:
	<select id="slc_curso">
	
		</select> <input id="btn_agregar_curso" title="Agregar un nuevo curso" type="button" value="+"/><input id="btn_modificar_curso" title="Modificar nombre de curso" type="button" value="*"/>	<input id="btn_eliminar_curso" title="Eliminar curso" type="button" value="-"/>	
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

</div>




<div id="contenido-asistencia-cursos_rendimiento" class="contenido-cursos_rendimiento oculto">
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
	Alumno: 
		<select id="slc_alumno">
		</select>
	
	</div>
	
		
	
	<div id="titulo_lista" class="subtitulo">Registrar inasistencia o tardanza</div>
	
	
	<div class="reglon">
	D&iacute;a:
	<select id="slc_dia">
		</select>
		
	Mes:
	<select id="slc_mes">
			<option value="1">Enero</option><option value="2">Febrero</option>
			<option value="3">Marzo</option><option value="4">Abril</option><option value="5">Mayo</option>
			<option value="6">Junio</option><option value="7">Julio</option><option value="8">Agosto</option>
			<option value="9">Septiembre</option><option value="10">Octubre</option><option value="11">Noviembre</option>
			<option value="12">Diciembre</option>
							
		</select>
		
	Anio:
	<input id="txt_anio" value="2012" size="6" type="text" readonly=""/>
	</div>
	
	
	
	<div class="reglon">
	Hora:
	<select id="slc_hora">
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
		<option value="10">10</option>
		<option value="11">11</option>
		<option value="12">12</option>
	</select>
		
	Minutos:
	<select id="slc_minutos">
							<option value="0">0</option><option value="1">1</option><option value="2">2</option>
							<option value="3">3</option><option value="4">4</option><option value="5">5</option>
							<option value="6">6</option><option value="7">7</option><option value="8">8</option>
							<option value="9">9</option><option value="10">10</option><option value="11">11</option>
							<option value="12">12</option><option value="13">13</option><option value="14">14</option>
							<option value="15">15</option><option value="16">16</option><option value="17">17</option>
							<option value="18">18</option><option value="19">19</option><option value="20">20</option>
							<option value="21">21</option><option value="22">22</option><option value="23">23</option>
							<option value="24">24</option><option value="25">25</option><option value="26">26</option>
							<option value="27">27</option><option value="28">28</option><option value="29">29</option>
							<option value="30">30</option><option value="31">31</option><option value="32">32</option>
							<option value="33">33</option><option value="34">34</option><option value="35">35</option>
							<option value="36">36</option><option value="37">37</option><option value="38">38</option>
							<option value="39">39</option><option value="40">40</option><option value="41">41</option>
							<option value="42">42</option><option value="43">43</option><option value="44">44</option>
							<option value="45">45</option><option value="46">46</option><option value="47">47</option>
							<option value="48">48</option><option value="49">49</option><option value="50">50</option>
							<option value="51">51</option><option value="52">52</option><option value="53">53</option>
							<option value="54">54</option><option value="55">55</option><option value="56">56</option>
							<option value="57">57</option><option value="58">58</option><option value="59">59</option>
		</select>
	</div>
	
	
	
	<div class="reglon">
	
	Tardanza o inasistencia:
	
	<select id="slc_t_o_i">
	<option value="T">Tardanza</option>
	<option value="I">Inasistencia</option>
		</select>
		
	</div>
	
	<div class="reglon">
	
	<input type="button" id="btn_registrar" value="Registrar" />
		
	</div>
	
	<div id="titulo_lista" class="subtitulo">Reporte de Tardanzas o Inasistencias</div>
	
	
		<div id="lista">
		<table border="1" cellpadding="0" cellspacing="0" id="cabecera_lista">
			<tr>
				<td width="35%">Mes</td>
				<td width="20%">D&iacute;a</td>
				<td width="20%">Hora</td>
				<td width="25%">Tipo</td>
			</tr>
		</table>
		
		<div id="contenido-lista">
		<table class="lista" border="1" cellpadding="0" cellspacing="0" ></table>
		</div>
		</div>
		
		<input id="btn_eliminar" style="margin-top:40px;margin-left:20px;" value="Eliminar registro" type="button"/>
	</div>

</div>


<?php include("AREA_CURSOS_RENDIMIENTO/pop_ups.php"); ?>