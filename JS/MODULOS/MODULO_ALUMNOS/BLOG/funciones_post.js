

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_cargar_blog(id_curso){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_ALUMNOS/AlumnoConsultaBlog.php",
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
				
				var html_blog='<div id="titulo">Blog</div>';
								
				for(var i=0;valores[i];i+=num_campos){
					
					if(valores[i]=="A"){
						html_entrada='<div class="entrada "><div class="cabecera"><div class="persona_dice">Usted dijo:</div><div class="btn_eliminar"></div></div><div class="cuerpo"><table ><tr><td width="100%">'+valores[i+1]+'</tr></table></div><div class="pie">'+fun_oracion_fecha(fun_fecha_invierte_formato(valores[i+2]))+", "+valores[i+3]+'</div></div>';
					}else{
						html_entrada='<div class="entrada entrada_profesor"><div class="cabecera "><div class="persona_dice">El profesor respondi&oacute;:</div><div class="btn_eliminar"></div></div><div class="cuerpo"><table ><tr><td width="100%">'+valores[i+1]+'</tr></table></div><div class="pie">'+fun_oracion_fecha(fun_fecha_invierte_formato(valores[i+2]))+", "+valores[i+3]+'</div></div>';
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

