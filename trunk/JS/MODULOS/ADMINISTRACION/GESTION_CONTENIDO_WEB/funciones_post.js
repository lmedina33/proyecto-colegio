

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_actualizar_quienes_somos(arg_parrafos/*arg_1,arg_2*/){  //esta función es para hacer alguna llamada con ajax mediante post


	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/actualizar_mision_vision.php",
        type: "POST",
        data:{parrafos:fun_tratamiento_tildes(arg_parrafos)},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_popup_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){
	//	alert(data);
			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_ocultar_popup_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			fun_aviso_popup("La secci&oacute;n Misi&oacute;n y Visi&oacute;n fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO)
			
			
			/*
			if(data_nombre=="no_data"){
				//accion
			}else{
				//accion
			}*/
		
		
		}
	}
	        
			
	});	
	
}



//Funcion que actualiza el area mision y vision del portal web


function fun_actualizar_mision_vision(arg_parrafos/*arg_1,arg_2*/){  //esta función es para hacer alguna llamada con ajax mediante post


	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/actualizar_quienes_somos.php",
        type: "POST",
        data:{parrafos:fun_tratamiento_tildes(arg_parrafos)},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_popup_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){
		alert(data);
			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_ocultar_popup_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			fun_aviso_popup("La secci&oacute;n quienes somos fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO)
			
			
			/*
			if(data_nombre=="no_data"){
				//accion
			}else{
				//accion
			}*/
		
		
		}
	}
	        
			
	});	
	
}









function fun_post_nombre(/*arg_1,arg_2*/){  //esta función es para hacer alguna llamada con ajax mediante post


	$.ajax({
        url: "POST/algun archivo.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        $("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
		$("#cargando").fadeIn(GLOBAL_VEL_FADE);
			
        },
        
	success: function(data_nombre){
			
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);
		
		
		if(data_nombre=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_nombre=="no_data"){
				//accion
			}else{
				//accion
			}
		
		
		}
	}
	        
			
	});	
	
}