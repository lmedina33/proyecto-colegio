<div id="contenido-quienes_somos-pag_web" class="contenido-pag_web alavista">
	<div class="contenido-titulo" style="margin-top:4%;">
		¿Qui&eacute;nes somos?
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


<?php include("AREA_GESTION_CONTENIDO_WEB/pop_ups.php"); ?>