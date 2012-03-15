
<div id="cargando" class="pop_up_general">

<div id="titulo_popup" class="seccion_popup">
<table>
<tr><td>Espere un momento por favor...</td></tr>
</table>

</div>

<div id="cuerpo_popup" class="seccion_popup">
<table class="mtop40" width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
<tbody>

	<tr>
	<td width="37%"></td>
	<td width="30%" class="alinear_centro">
	<div id="pantalla_cargando"></div>
	</td>
	<td width="30%"></td>
	</tr>
	
</tbody>
</table>

</div>

</div>





<div id="popup_aviso" class="pop_up_general">

<div id="titulo_popup" class="seccion_popup">
<table>
<tr><td id="titulo_aviso"></td></tr>
</table>

</div>

<div id="cuerpo_popup" class="seccion_popup">



	<table width="100%" class="mtop20" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td id="texto_aviso" width="100%" class="alinear_centro">
				
				</td>
			</tr>
		</tbody>
	</table>

</div>

<div id="pie_popup" class="seccion_popup">
	<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td width="30%">
				
				&nbsp;
				
				</td>
				<td width="40%" class="alinear_centro">
				<input value="Aceptar" type="button" id="popup_aviso_aceptar" title="Aceptar" onclick="fun_cerrar_aviso()"/>
				</td>
				
				
				<td width="30%">
				
				&nbsp;
				</td>
			</tr>
		</tbody>
	</table>
</div>
</div>






<div id="popup_aviso2" class="pop_up_general">

<div id="titulo_popup" class="seccion_popup">
<table>
<tr><td id="titulo_aviso"></td></tr>
</table>

</div>

<div id="cuerpo_popup" class="seccion_popup">



	<table width="100%" class="mtop20" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td id="texto_aviso" width="100%" class="alinear_centro">
				
				</td>
			</tr>
		</tbody>
	</table>

</div>

<div id="pie_popup" class="seccion_popup">
	<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td width="30%">
				
				&nbsp;
				
				</td>
				<td width="40%" class="alinear_centro">
				<input value="Aceptar" type="button" id="popup_aviso_aceptar" title="Aceptar" onclick="fun_cerrar_sobreaviso()"/>
				</td>
				
				
				<td width="30%">
				
				&nbsp;
				</td>
			</tr>
		</tbody>
	</table>
</div>
</div>






<div id="popup_aviso3" class="pop_up_general">

<div id="titulo_popup" class="seccion_popup">
<table>
<tr><td id="titulo_aviso"></td></tr>
</table>

</div>

<div id="cuerpo_popup" class="seccion_popup">



	<table width="100%" class="mtop20" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td id="texto_aviso" width="100%" class="alinear_centro">
				
				</td>
			</tr>
		</tbody>
	</table>

</div>

<div id="pie_popup" class="seccion_popup">
	<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td width="30%">
				
				&nbsp;
				
				</td>
				<td width="40%" class="alinear_centro">
				<input value="Aceptar" type="button" id="popup_aviso_aceptar" title="Aceptar" onclick="fun_cerrar_sobreaviso2()"/>
				</td>
				
				
				<td width="30%">
				
				&nbsp;
				</td>
			</tr>
		</tbody>
	</table>
</div>
</div>




<div id="popup_pregunta" class="pop_up_general">

<div id="titulo_popup" class="seccion_popup">
<table>
<tr><td id="titulo_aviso"></td></tr>
</table>

</div>

<div id="cuerpo_popup" class="seccion_popup">



	<table width="100%" class="mtop20" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td id="texto_aviso" width="100%" class="alinear_centro">
				
				</td>
			</tr>
		</tbody>
	</table>

<input id="pregunta_decision_opcion" value="" type="hidden" />
</div>

<div id="pie_popup" class="seccion_popup">
	<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0">
		<tbody>
			<tr>
				<td width="15%">
				
				&nbsp;
				
				</td>
				<td width="30%" class="alinear_centro">
				<input value="Aceptar" type="button" id="popup_aviso_aceptar" title="Aceptar" onclick="fun_realiza_accion_popup_pregunta($('#popup_pregunta #pregunta_decision_opcion').val())"/>
				</td>
				
				<td width="10%">
				
				&nbsp;
				</td>
				<td width="30%" class="alinear_centro">
				<input value="Cancelar" type="button" id="popup_pretunta_cerrar" title="Cerrar" onclick="fun_cerrar_popup_pregunta()"/>
				</td>
				
				<td width="15%">
				
				&nbsp;
				</td>
			</tr>
		</tbody>
	</table>
</div>
</div>
