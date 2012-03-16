

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_consultar_quienes_somos(arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_quienes_somos.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_popup_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){

			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_ocultar_popup_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no_data"){
				
				var valores=data.split("{");
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+="<p>"+valores[i]+"</p>";
				}
				
				$(arg_div_contenedor).html(parrafos);
				
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
        	
        	fun_mostrar_popup_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){


			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_ocultar_popup_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no_data"){
				
				var valores=data.split("{");
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+="<p>"+valores[i]+"</p>";
				}
				
				
				$(arg_div_contenedor).html(parrafos);
				
			}
		
		
		}
	}
	        
			
	});	
	
}






function fun_consultar_galeria(tipo_consulta){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../POST/PORTAL/consultar_galeria_fotos.php",
        type: "POST",
        data:{tipo_consulta:tipo_consulta},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_popup_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){


			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			fun_ocultar_popup_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no_data"){
				
				
				
				var nombre_fotos=data.split("{");
				
				var codigo_fotos="";
				var cont=0;
				var tipo_consulta_mayus=tipo_consulta.toUpperCase();
				
			//	alert(tipo_consulta_mayus);
				for(var i=0;nombre_fotos[i];i++){
					codigo_fotos+='<div class="minifoto_muestra" style="background-image:url('+"'../IMAGENES/PORTAL/ALBUM_FOTOS/"+tipo_consulta_mayus+"/"+nombre_fotos[i]+"'"+')"></div>';
					cont++;
				}
				$("#contenido-inicial-galeria_fotos").html(codigo_fotos);
				
				
				///////////////////////////Ahora debemos darle tamaño a la galería//////////////////////////////////
				
				var tam_width=120*cont;
				
			
				$("#contenido-inicial-galeria_fotos").css("width",tam_width+"px");
				
				
				//averiguamos el valor máximo de la ventana, lo tomamos del div  galeria_fotos
				
				var width=$("#galeria_fotos").css("width");
				
				var split_width=width.split("px");
				//el valor numerico lo guardamos, y será el 100% de toda la pantalla
				var tam_width_total=parseFloat(split_width[0]);
				var margen_left;
		
				
				if(tam_width_total>=tam_width){
					margen_left=(tam_width_total-tam_width)/2;
					
					$("#contenido-inicial-galeria_fotos").css("margin-left",margen_left+"px");
				}else{
					margen_left=(tam_width-tam_width_total)/2;
					
					$("#contenido-inicial-galeria_fotos").css("margin-left","-"+margen_left+"px");
				}
				
				$("#galeria_fotos").fadeIn(GLOBAL_VEL_FADE);
				$("#div_back").fadeIn(GLOBAL_VEL_FADE);
				
			}
		
		
		}
	}
	        
			
	});	
	
}