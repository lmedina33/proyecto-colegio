

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function fun_cargar_observaciones(id_curso){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_ALUMNOS/Consulta_observacion.php",
        type: "POST",
        data:{codigo_curso:id_curso},
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
					
				
							html_entrada='<div class="observacion "><div class="cabecera"><div class="fecha_cabecera">'+fun_oracion_fecha(fun_fecha_invierte_formato(valores[i+4]))+'</div></div>'+
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


