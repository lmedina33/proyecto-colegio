

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_cargar_alumnos_curso(id_curso){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_PROFESORES/ConsultarAlumnosDeUnCurso.php",
        type: "POST",
        data:{codigo_curso:id_curso},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_cargando();
        	
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){

			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var valores=data.split("{");
				var num_campos=4;
				
				var html_select='<option value="0">Seleccione a un alumno</option>';
								
				for(var i=0;valores[i];i+=num_campos){
					
					html_option='<option value="'+valores[i]+'">'+valores[i+1]+" "+valores[i+2]+" "+valores[i+3]+'</option>';					
					
					html_select+=html_option;
				}
				
				
			}else{
				var html_select='<option id="0">Seleccione a un alumno</option>';
				
			}
		
				$("#cuerpo-pagina #contenido-pagina #elegir_alumno #slc_alumno").html(html_select);
				
				var codigo_alumno=$("#cuerpo-pagina #contenido-pagina #elegir_alumno #slc_alumno").val();
				
				fun_cargar_observaciones(id_curso,codigo_alumno);
		
		}
	}
	        
			
	});	
	
}




function fun_cargar_observaciones(id_curso,codigo_alumno){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_PROFESORES/Consulta_observacion.php",
        type: "POST",
        data:{codigo_curso:id_curso,codigo_alumno:codigo_alumno},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_cargando();
        	
			
        },
        
	success: function(data){

			fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var valores=data.split("{");
				var num_campos=5;
				
				var html_observaciones='<div id="titulo">Observaciones</div>';
								
				for(var i=0;valores[i];i+=num_campos){
					
				
							html_entrada='<div class="observacion "><div class="cabecera"><div class="fecha_cabecera">'+fun_oracion_fecha(fun_fecha_invierte_formato(valores[i+4]))+'</div><div id="eliminar_obs-'+
							valores[i]+'"class="btn_eliminar"></div></div>'+
							'<div class="cuerpo"><table ><tr><td width="100%">'+valores[i+3]+'</tr></table></div></div>';
						
					html_observaciones+=html_entrada;
				}
				
				
				$("#cuerpo-pagina #contenido-pagina #observaciones").html(html_observaciones);
			}else{
				var html_observaciones='<div id="titulo">Observaciones</div>';
				
				$("#cuerpo-pagina #contenido-pagina #observaciones").html(html_observaciones);
			}
		
		
		}
	}
	        
			
	});	
	
}





function fun_insertar_nueva_observacion(id_curso,codigo_alumno,nueva_entrada){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_PROFESORES/Insertar_observacion.php",
        type: "POST",
        data:{codigo_curso:id_curso,codigo_alumno:codigo_alumno,nueva_entrada:nueva_entrada},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_cargando();
        	
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){

			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
					
			fun_cargar_observaciones(id_curso,codigo_alumno);
		
			$("#cuerpo-pagina #contenido-pagina #nueva_observacion #txt_nueva_entrada").val("");
		}
	}
	        
			
	});	
	
}