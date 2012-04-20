
var AREA_CURSOS="#area_cursos_rendimiento ";
	
var CONTENEDOR_CURSOS="#contenido-registro_cursos-cursos_rendimiento ";
var CONTENEDOR_NOTAS="#contenido-notas_alumnos-cursos_rendimiento ";
var CONTENEDOR_ASISTENCIAS="#contenido-asistencia-cursos_rendimiento ";

$(document).ready(function(){

	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

/***************************ALUMNOS*****************************/

$(AREA_CURSOS+CONTENEDOR_CURSOS+"#btn_agregar_seccion").click(function(){

	fun_pregunta_popup("¿Est&aacute; Ud. seguro de agregar una nueva secci&oacute;n?","Agregar una secci&oacute;n","agregar seccion",28,GLOBAL_MARGEN_TOP_AVISO);
});



$(AREA_CURSOS+CONTENEDOR_CURSOS+"#btn_eliminar_seccion").click(function(){
		
		
		if(GL_CONT_CURSOS==0){
			//	cursos+="Sin nombre{"+nombre_seccion(GL_CONT_SECCIONES+1)+"{ {G{";
			
				fun_aviso_popup("No existen secciones a eliminar.","No ha secciones",28,GLOBAL_MARGEN_TOP_AVISO);
			
			}else{
		
		fun_pregunta_popup("¿Est&aacute; Ud. seguro de eliminar la &uacute;ltima secci&oacute;n?","Eliminar una secci&oacute;n","eliminar seccion",31,GLOBAL_MARGEN_TOP_AVISO);
		
			}
});



$(AREA_CURSOS+CONTENEDOR_CURSOS+"#btn_modificar_curso").click(function(){

	$(AREA_CURSOS+"#popup_cambiar_nombre_curso #pp_nombre_actual_curso").html($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso").val());
	
	$(AREA_CURSOS+"#popup_cambiar_nombre_curso").fadeIn(GLOBAL_VEL_FADE);
	$("#div_back").fadeIn(GLOBAL_VEL_FADE);
});

	
	$(AREA_CURSOS+"#popup_cambiar_nombre_curso #boton_aceptar").click(function(){
	
		var nivel=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").val();
		var grado=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").val();
		var nombre_actual=$(AREA_CURSOS+"#popup_cambiar_nombre_curso #pp_nombre_actual_curso").html();
		var nuevo_nombre=$(AREA_CURSOS+"#popup_cambiar_nombre_curso #pp_nuevo_nombre_curso").val();
	
		fun_modificar_nombre_curso(nivel,grado,nombre_actual,nuevo_nombre);
		
	});
	
	
	$(AREA_CURSOS+"#popup_cambiar_nombre_curso #cerrar_popup").click(function(){
	
		$(AREA_CURSOS+"#popup_cambiar_nombre_curso").fadeOut(GLOBAL_VEL_FADE);
		$("#div_back").fadeOut(GLOBAL_VEL_FADE);
	});




$(AREA_CURSOS+CONTENEDOR_CURSOS+"#btn_agregar_curso").click(function(){

	$(AREA_CURSOS+"#popup_agregar_curso").fadeIn(GLOBAL_VEL_FADE);
	$("#div_back").fadeIn(GLOBAL_VEL_FADE);
});

	
	$(AREA_CURSOS+"#popup_agregar_curso #boton_aceptar").click(function(){
	
		var nivel=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").val();
		var grado=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").val();
		
		var nombre_curso=$(AREA_CURSOS+"#popup_agregar_curso #pp_nuevo_curso").val();
		var categoria=$(AREA_CURSOS+"#popup_agregar_curso #pp_slc_categoria").val();
	
		var existe="no";
		
		for(var i=0;i<GL_CONT_CURSOS && existe=="no";i++){
			if(fun_ignora_tildes(nombre_curso.toLowerCase())==fun_ignora_tildes((GL_CURSOS[i][0]).toLowerCase())){
				existe="si";
			}
		}
		
		if(existe=="si"){
			fun_aviso_popup2("El nombre del curso que ha escrito ya existe.<br>Vuelva a intentarlo con otro nombre.","Nombre de curso repetido",30,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			
			
			var cursos="";
			
			if(GL_CONT_CURSOS==0){
				cursos+=nombre_curso+"{A{ {"+categoria+"{";
			}else{
			
			for(var i=0;i<GL_CONT_CURSOS;i++){
				
					cursos+=GL_CURSOS[i][0]+"{"+GL_CURSOS[i][1]+"{"+GL_CURSOS[i][2]+"{"+GL_CURSOS[i][3]+"{";
			
			}
			
			
			for(var i=0;i<GL_CONT_SECCIONES;i++){
				
					cursos+=nombre_curso+"{"+GL_SECCIONES[i]+"{ {"+categoria+"{";
			
			}
				
			}
			
			$(AREA_CURSOS+"#popup_agregar_curso").fadeOut(GLOBAL_VEL_FADE);
			$("#div_back").fadeOut(GLOBAL_VEL_FADE);
			fun_insertar_cursos(nivel,grado,cursos);
			
			
			
			
		}
		
	});
	
	
	$(AREA_CURSOS+"#popup_agregar_curso #cerrar_popup").click(function(){
	
		$(AREA_CURSOS+"#popup_agregar_curso").fadeOut(GLOBAL_VEL_FADE);
		$("#div_back").fadeOut(GLOBAL_VEL_FADE);
	});




$(AREA_CURSOS+CONTENEDOR_CURSOS+"#btn_eliminar_curso").click(function(){

	if($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso").val()){
	
		fun_pregunta_popup("¿Est&aacute; Ud. seguro de eliminar<br>el curso '"+fun_combobox_opcion_elegida(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso")+"'?","Eliminar curso","eliminar curso",31,GLOBAL_MARGEN_TOP_AVISO);	
	}else{
		fun_aviso_popup("No existen cursos a eliminar.","No hay cursos",28,GLOBAL_MARGEN_TOP_AVISO);
	}
	
});




$(AREA_CURSOS+CONTENEDOR_CURSOS+"#btn_elegir_profesor").click(function(){

	//fun_refresca_combo_box_con_tabla(AREA_CURSOS+"#popup_asignar_profesor #pp_slc_profesor",GL_PROFESORES,GL_CONT_PROFESORES,0,7);
	
	
				var html_select='<option value="0">Seleccione a un profesor</option>';
								
								
				for(var i=0;i<GL_CONT_PROFESORES;i++){
					
					if(GL_PROFESORES[i][6]=="1"){
						
						html_option='<option value="'+GL_PROFESORES[i][0]+'">'+GL_PROFESORES[i][7]+'</option>';					
						
						html_select+=html_option;
					
					}
				}
				
				
				$(AREA_CURSOS+"#popup_asignar_profesor #pp_slc_profesor").html(html_select);
	
	$(AREA_CURSOS+"#popup_asignar_profesor").fadeIn(GLOBAL_VEL_FADE);
	$("#div_back").fadeIn(GLOBAL_VEL_FADE);
});

	
	$(AREA_CURSOS+"#popup_asignar_profesor #boton_aceptar").click(function(){
	
		var nivel=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").val();
		var grado=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").val();
		var seccion=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion").val();
		var curso=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso").val();
		
		var dni_profesor=$(AREA_CURSOS+"#popup_asignar_profesor #pp_slc_profesor").val();
		
		fun_asignar_profesor(nivel,grado,seccion,curso,dni_profesor);
	
	});
	
	
	$(AREA_CURSOS+"#popup_asignar_profesor #cerrar_popup").click(function(){
	
		$(AREA_CURSOS+"#popup_asignar_profesor").fadeOut(GLOBAL_VEL_FADE);
		$("#div_back").fadeOut(GLOBAL_VEL_FADE);
	});





$("#menu_vertical #submenu-cursos_rendimiento #registro_cursos-cursos_rendimiento").click(function(){
	var nivel=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").val();
	var grado=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").val();
	
	fun_get_cursos(nivel,grado);
});





$("#menu_vertical #submenu-cursos_rendimiento #notas_alumnos-cursos_rendimiento").click(function(){
	var nivel=$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_nivel").val();
	var grado=$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_grado").val();
	
	fun_get_cursos_notas(nivel,grado);
});



$(AREA_CURSOS+CONTENEDOR_NOTAS+"#btn_insertar_nota").click(function(){


	var codigo_alumno=$(AREA_CURSOS+CONTENEDOR_NOTAS+" #slc_alumno").val();
	var codigo_curso=$(AREA_CURSOS+CONTENEDOR_NOTAS+" #slc_nivel").val()+$(AREA_CURSOS+CONTENEDOR_NOTAS+" #slc_grado").val()+$(AREA_CURSOS+CONTENEDOR_NOTAS+" #slc_curso").val()+$(AREA_CURSOS+CONTENEDOR_NOTAS+" #slc_seccion").val();
	var bimestre=$(AREA_CURSOS+CONTENEDOR_NOTAS+" #slc_bimestre").val();
	var nota=$(AREA_CURSOS+CONTENEDOR_NOTAS+" #txt_nota").val();
				
	fun_insertar_nota(codigo_alumno,codigo_curso,bimestre,nota);
});





$("#menu_vertical #submenu-cursos_rendimiento #asistencia-cursos_rendimiento").click(function(){
	var nivel=$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_nivel").val();
	var grado=$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_grado").val();
	
	get_secciones(nivel,grado,AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_nivel",AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_seccion","cargar-slc-alumnos-asistencias",0);
});




$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#btn_registrar").click(function(){

	var codigo_alumno=$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+" #slc_alumno").val();
	var fecha=fun_arma_fecha_sql($(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+" #slc_dia").val(),$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+" #slc_mes").val(),$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+" #txt_anio").val());
	var hora=fun_arma_hora(0,$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+" #slc_minutos").val(),$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+" #slc_hora").val());
	var tipo=$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+" #slc_t_o_i").val();
				
	fun_insertar_registro_asistencia(codigo_alumno,fecha,hora,tipo);
	
});


$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#btn_eliminar").click(function(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#lista .lista");
	
	
	if(codigo=="nada"){
			FMSG_DEBE_SELEC_OBJETO("registro");
		}else{
		
			fun_pregunta_popup("¿Est&aacute; Ud. seguro de eliminar el registro seleccionado?","Eliminar registro","eliminar inasistencia tardanza",34,GLOBAL_MARGEN_TOP_AVISO);
			
		}

});



});



function get_profesor_a_cargo(nombre_curso,seccion){
	
	var nombre_profesor="";
	
	for(var i=0;i<GL_CONT_CURSOS;i++){
		
		
		if(GL_CURSOS[i][0]==fun_tratamiento_tildes(nombre_curso )&& GL_CURSOS[i][1]==seccion){
		
			objeto=fun_get_objeto(GL_PROFESORES,GL_CURSOS[i][2],0);
						
				
			nombre_profesor="";
			if(objeto){
					nombre_profesor=objeto[1]+" "+objeto[2]+" "+objeto[3];
					
			}
		}
		
	}
	
	return nombre_profesor;
}

function nombre_seccion(numero_seccion){
	
	switch(numero_seccion){
		case 1:return "A"; break;
		case 2:return "B"; break;
		case 3:return "C"; break;
		case 4:return "D"; break;
		case 5:return "E"; break;
	}
}