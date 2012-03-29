

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_actualizar_quienes_somos(arg_parrafos/*arg_1,arg_2*/){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/actualizar_quienes_somos.php",
        type: "POST",
        data:{parrafos:fun_tratamiento_tildes(arg_parrafos)},
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
			
			fun_aviso_popup("La secci&oacute;n quienes somos fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO);
			
			
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
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/actualizar_mision_vision.php",
        type: "POST",
        data:{parrafos:fun_tratamiento_tildes(arg_parrafos)},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){
	//	alert(data);
			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			fun_aviso_popup("La secci&oacute;n Misi&oacute;n y Visi&oacute;n fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO);
			
			
		
		
		}
	}
	        
			
	});	
	
}






function fun_consultar_quienes_somos(arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_quienes_somos.php",
        type: "POST",
        data:{},
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
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+=valores[i]+"\n";
				}
				
				$(arg_div_contenedor).val(parrafos);
				
			}
		
		
		}
	}
	        
			
	});	
	
}




function fun_consultar_mision_vision(arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_mision_vision.php",
        type: "POST",
        data:{},
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
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+=valores[i]+"\n";
				}
				
				$(arg_div_contenedor).val(parrafos);
				
			}
		
		
		}
	}
	        
			
	});	
	
}



/*******************METODOLOGIAS**************METODOLOGIAS**********************/
/*******************METODOLOGIAS**************METODOLOGIAS**********************/
/*******************METODOLOGIAS**************METODOLOGIAS**********************/
/*******************METODOLOGIAS**************METODOLOGIAS**********************/
/*******************METODOLOGIAS**************METODOLOGIAS**********************/
/*******************METODOLOGIAS**************METODOLOGIAS**********************/


function fun_insertar_metodologia(nivel,parrafos){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/insertar_metodologia.php",
        type: "POST",
        data:{nivel:nivel,parrafos:parrafos},
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
			fun_aviso_popup("La secci&oacute;n Metodolog&iacute;s fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO);
		}
	}
});	
	
}




function fun_consultar_metodologia(nivel,arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_metodologia.php",
        type: "POST",
        data:{nivel:nivel},
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
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+=valores[i]+"\n";
				}
				
				$(arg_div_contenedor).val(parrafos);
				
			}else{
				$(arg_div_contenedor).val("");
			}
		
		}
	}
	       	
	});	
	
}




/*******************ACTIVIDADES**************ACTIVIDADES**********************/
/*******************ACTIVIDADES**************ACTIVIDADES**********************/
/*******************ACTIVIDADES**************ACTIVIDADES**********************/
/*******************ACTIVIDADES**************ACTIVIDADES**********************/
/*******************ACTIVIDADES**************ACTIVIDADES**********************/
/*******************ACTIVIDADES**************ACTIVIDADES**********************/
/*******************ACTIVIDADES**************ACTIVIDADES**********************/


function fun_insertar_actividades(nivel,parrafos){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/insertar_actividad.php",
        type: "POST",
        data:{nivel:nivel,parrafos:parrafos},
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
			fun_aviso_popup("La secci&oacute;n Actividades fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO);
		}
	}
});	
	
}




function fun_consultar_actividades(nivel,arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_actividad.php",
        type: "POST",
        data:{nivel:nivel},
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
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+=valores[i]+"\n";
				}
				
				$(arg_div_contenedor).val(parrafos);
				
			}else{
				$(arg_div_contenedor).val("");
			}
		
		}
	}
	       	
	});	
	
}




/*******************ADMISIONES**************ADMISIONES**********************/
/*******************ADMISIONES**************ADMISIONES**********************/
/*******************ADMISIONES**************ADMISIONES**********************/
/*******************ADMISIONES**************ADMISIONES**********************/
/*******************ADMISIONES**************ADMISIONES**********************/
/*******************ADMISIONES**************ADMISIONES**********************/
/*******************ADMISIONES**************ADMISIONES**********************/



function fun_insertar_admision(nivel,parrafos){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/insertar_admision.php",
        type: "POST",
        data:{nivel:nivel,parrafos:parrafos},
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
			fun_aviso_popup("La secci&oacute;n Actividades fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO);
		}
	}
});	
	
}




function fun_consultar_admision(nivel,arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_admision.php",
        type: "POST",
        data:{nivel:nivel},
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
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+=valores[i]+"\n";
				}
				
				$(arg_div_contenedor).val(parrafos);
				
			}else{
				$(arg_div_contenedor).val("");
			}
		
		}
	}
	       	
	});	
	
}



/*******************SERVICIOS**************SERVICIOS**********************/
/*******************SERVICIOS**************SERVICIOS**********************/
/*******************SERVICIOS**************SERVICIOS**********************/
/*******************SERVICIOS**************SERVICIOS**********************/
/*******************SERVICIOS**************SERVICIOS**********************/
/*******************SERVICIOS**************SERVICIOS**********************/



function fun_insertar_servicios(titulos,parrafos){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/insertar_servicios.php",
        type: "POST",
        data:{titulos:titulos,parrafos:parrafos},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){
alert(data);
			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			fun_aviso_popup("La secci&oacute;n Servicios fue actualizada con &eacute;xito","Secci&oacute;n actualizada",30,GLOBAL_MARGEN_TOP_AVISO);
		}
	}
});	
	
}




function fun_consultar_servicios(){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_servicios.php",
        type: "POST",
        data:{},
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
				
				GL_TITULOS_SERVICIOS=new Array();
				GL_SERVICIOS=new Array();
				GL_CONT_SERVICIOS=0;
				
				var valores=data.split("{");
				var parrafos="";
				var titulos="";
				
				var titulo_parrafo=valores[0];				
				for(var i=0;valores[i];i+=2){
					
					if(titulo_parrafo==valores[i]){
						parrafos+=valores[i+1]+"\n";
						
					}else{
						GL_TITULOS_SERVICIOS[GL_CONT_SERVICIOS]=titulo_parrafo;
						GL_SERVICIOS[GL_CONT_SERVICIOS]=parrafos;
						GL_CONT_SERVICIOS++;
						
						parrafos=valores[i+1]+"\n";
						titulo_parrafo=valores[i];	
					}
					
				}
				
				//////////////////Agregamos el último ya que no es tomado en cuenta al salir fel bucle
				GL_TITULOS_SERVICIOS[GL_CONT_SERVICIOS]=titulo_parrafo;
				GL_SERVICIOS[GL_CONT_SERVICIOS]=parrafos;
				GL_CONT_SERVICIOS++;
				
				
				refrescar_vista_servicios();
				
			}else{
				
				GL_TITULOS_SERVICIOS=new Array();
				GL_SERVICIOS=new Array();
				GL_CONT_SERVICIOS=0;
				
				refrescar_vista_servicios();
			}
		
		}
	}
	       	
	});	
	
}


