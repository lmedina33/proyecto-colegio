

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_cargar_alumnos_curso(id_curso){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_PROFESORES/ConsultarAlumnosDeCursoBlog.php",
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
				
				fun_cargar_blog(id_curso,codigo_alumno);
		
		}
	}
	        
			
	});	
	
}



function fun_cargar_blog(id_curso,codigo_alumno){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_PROFESORES/ProfesorConsultaBlog.php",
        type: "POST",
        data:{codigo_curso:id_curso,codigo_alumno:codigo_alumno},
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
				var num_campos=5;
				
				var html_blog='<div id="titulo">Blog</div>';
								
				for(var i=0;valores[i];i+=num_campos){
					
					if(valores[i]=="P"){
						
						if(valores[i+4]=="1"){ //es eliminable
							html_entrada='<div class="entrada "><div class="cabecera"><div class="persona_dice">Usted respondi&oacute;:</div><div class="btn_eliminar"></div></div><div class="cuerpo"><table ><tr><td width="100%">'+valores[i+1]+'</tr></table></div><div class="pie">'+fun_oracion_fecha(fun_fecha_invierte_formato(valores[i+2]))+", "+valores[i+3]+'</div></div>';
						}else{
							html_entrada='<div class="entrada "><div class="cabecera"><div class="persona_dice">Usted respondi&oacute;:</div></div><div class="cuerpo"><table ><tr><td width="100%">'+valores[i+1]+'</tr></table></div><div class="pie">'+fun_oracion_fecha(fun_fecha_invierte_formato(valores[i+2]))+", "+valores[i+3]+'</div></div>';
						}
						
						
						
					}else{
						html_entrada='<div class="entrada entrada_alumno"><div class="cabecera "><div class="persona_dice">El alumno dijo:</div><div class="btn_eliminar"></div></div><div class="cuerpo"><table ><tr><td width="100%">'+valores[i+1]+'</tr></table></div><div class="pie">'+fun_oracion_fecha(fun_fecha_invierte_formato(valores[i+2]))+", "+valores[i+3]+'</div></div>';
					}
					
					
					html_blog+=html_entrada;
				}
				
				
				$("#cuerpo-pagina #contenido-pagina #blog").html(html_blog);
			}else{
				var html_blog='<div id="titulo">Blog</div>';
				
				$("#cuerpo-pagina #contenido-pagina #blog").html(html_blog);
			}
		
		
		}
	}
	        
			
	});	
	
}




function fun_insertar_nueva_entrada(id_curso,codigo_alumno,nueva_entrada){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_PROFESORES/ProfesorInsertaBlog.php",
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
					
			fun_cargar_blog(id_curso,codigo_alumno);
		
			$("#cuerpo-pagina #contenido-pagina #nueva_entrada #txt_nueva_entrada").val("");
		}
	}
	        
			
	});	
	
}