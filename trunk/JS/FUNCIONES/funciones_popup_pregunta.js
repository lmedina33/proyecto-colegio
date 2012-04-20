
function fun_pregunta_popup(arg_texto,arg_titulo,arg_accion,arg_ancho,arg_top){
	
	$("#popup_pregunta #texto_aviso").html(arg_texto);
	$("#popup_pregunta #titulo_aviso").html(arg_titulo);
	$("#popup_pregunta").css("width",arg_ancho+"%");
	$("#popup_pregunta").css("left",((100-arg_ancho)/2)+"%");
	$("#popup_pregunta").css("top",arg_top+"%");
	
	$("#popup_pregunta #pregunta_decision_opcion").val(arg_accion);	
	
	$("#div_back_pregunta").fadeIn(GLOBAL_VEL_FADE);
	$("#popup_pregunta").fadeIn(GLOBAL_VEL_FADE);
}

function fun_cerrar_popup_pregunta(){
	$("#div_back_pregunta").fadeOut(GLOBAL_VEL_FADE);
	$("#popup_pregunta").fadeOut(GLOBAL_VEL_FADE);
}




function fun_realiza_accion_popup_pregunta(arg_accion){
	switch(arg_accion){
		
		case "agregar seccion": 
			
			
			var cursos="";
			
			if(GL_CONT_CURSOS==0){
				cursos+="Sin nombre{"+nombre_seccion(GL_CONT_SECCIONES+1)+"{ {G{";
			}else{
			
			for(var i=0;i<GL_CONT_CURSOS;i++){
				
				if(i%GL_CONT_SECCIONES==GL_CONT_SECCIONES-1){
					
					cursos+=GL_CURSOS[i][0]+"{"+GL_CURSOS[i][1]+"{"+GL_CURSOS[i][2]+"{"+GL_CURSOS[i][3]+"{";
					
						
					cursos+=GL_CURSOS[i][0]+"{"+nombre_seccion(GL_CONT_SECCIONES+1)+"{ {"+GL_CURSOS[i][3]+"{";
									
				}else{
					cursos+=GL_CURSOS[i][0]+"{"+GL_CURSOS[i][1]+"{"+GL_CURSOS[i][2]+"{"+GL_CURSOS[i][3]+"{";
				}
			}	
			}
			
			
			fun_insertar_cursos($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado ").val(),cursos);
			
			
			
		break;
		
		
		case "eliminar seccion": 
			
			
			var cursos="";
			
			
			
			for(var i=0;i<GL_CONT_CURSOS;i++){
				
				if(i%GL_CONT_SECCIONES==GL_CONT_SECCIONES-1){
					
					// no se hace nada, solo se ignora la seccion				
				}else{
					cursos+=GL_CURSOS[i][0]+"{"+GL_CURSOS[i][1]+"{"+GL_CURSOS[i][2]+"{"+GL_CURSOS[i][3]+"{";
				}
			}	
			
			
			fun_insertar_cursos($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado ").val(),cursos);
			
			
			
		break;
		
		
		case "eliminar curso": 
			
			
			var cursos="";
			
			
			
			for(var i=0;i<GL_CONT_CURSOS;i++){
				
				if(GL_CURSOS[i][0]!=fun_combobox_opcion_elegida(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso")){
				
					cursos+=GL_CURSOS[i][0]+"{"+GL_CURSOS[i][1]+"{"+GL_CURSOS[i][2]+"{"+GL_CURSOS[i][3]+"{";					
				}
				
			}	
			
			
			fun_insertar_cursos($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado ").val(),cursos);
			
			
			
		break;
		
		case "eliminar alumno": 
			
			var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista");
			
			fun_eliminar_alumno(codigo,"");
			
			
		break;
		
		
		case "eliminar alumno no dispo": 
			
			var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#lista .lista");
			
			fun_eliminar_alumno(codigo,"no dispo");
			
			
		break;
		
		
		case "eliminar profesor": 
			
			var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista");
			
			fun_eliminar_profesor(codigo);
			
			
		break;
		
		
		case "eliminar padre": 
			
			var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista");
			
			fun_eliminar_padre(codigo);
			
			
		break;
		
		
		
		
		
		
		case "eliminar inasistencia tardanza": 
			
			var codigo=$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_alumno").val();
			var fecha_codigo=fun_obtener_id_fila_restaltada(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#lista .lista");
			
			fun_eliminar_registro_asistencia(codigo,fecha_codigo);
			
			
		break;
		
		
		
		
		
		
		
	}
	fun_realiza_accion_cerrar_pregunta("cerrar popup");
}


function fun_realiza_accion_cerrar_pregunta(arg_accion){
	switch(arg_accion){
		
		case "cerrar popup": 
			fun_cerrar_popup_pregunta();
		break;
		
				
	}
	 
}