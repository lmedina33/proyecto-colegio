
var GL_ADMIN=new Array(); //dni,nombres,apellido_p,apellido_m,usuario,password,disponibilidad
var GL_CONT_ADMIN=0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SER�N LLAMADAS PARA SU USO EN EL M�DULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_actualizar_quienes_somos(arg_parrafos/*arg_1,arg_2*/){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
	
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


function fun_actualizar_mision_vision(arg_parrafos/*arg_1,arg_2*/){  //esta funci�n es para hacer alguna llamada con ajax mediante post


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






function fun_consultar_quienes_somos(arg_div_contenedor){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
	
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




function fun_consultar_mision_vision(arg_div_contenedor){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
	
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


function fun_insertar_metodologia(nivel,parrafos){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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




function fun_consultar_metodologia(nivel,arg_div_contenedor){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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


function fun_insertar_actividades(nivel,parrafos){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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




function fun_consultar_actividades(nivel,arg_div_contenedor){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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



function fun_insertar_admision(nivel,parrafos){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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




function fun_consultar_admision(nivel,arg_div_contenedor){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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



function fun_insertar_servicios(titulos,parrafos){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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




function fun_consultar_servicios(){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
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
				
				//////////////////Agregamos el �ltimo ya que no es tomado en cuenta al salir fel bucle
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








/***********ALBUM FOTOGRAFICO**************/
/***********ALBUM FOTOGRAFICO**************/
/***********ALBUM FOTOGRAFICO**************/
/***********ALBUM FOTOGRAFICO**************/
/***********ALBUM FOTOGRAFICO**************/
function fun_consultar_galeria(tipo_consulta){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/PORTAL/consultar_galeria_fotos.php",
        type: "POST",
        data:{tipo_consulta:tipo_consulta},
        async:true,
        beforeSend: function(objeto){
        	
        //	fun_mostrar_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){


		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				
				
				var nombre_fotos=data.split("{");
				
				var codigo_fotos="";
				var cont=0;
				var tipo_consulta_mayus=tipo_consulta.toUpperCase();
				
			//	alert(tipo_consulta_mayus);
				for(var i=0;nombre_fotos[i];i++){
					//codigo_fotos+='<div class="minifoto_muestra" onclick='+"'"+"click_minifoto_muestra($(this).css("+'"background-image"'+"))"+"'"+' style="background-image:url('+"'../IMAGENES/PORTAL/ALBUM_FOTOS/"+tipo_consulta_mayus+"/"+nombre_fotos[i]+"'"+')"></div>';
					codigo_fotos+='<div id="casilla_foto"><input type="radio" name="seleccionar_foto" class="seleccionar_foto" value="'+nombre_fotos[i]+'" />				<div id="foto" onclick='+"'"+"click_minifoto_muestra($(this).css("+'"background-image"'+"))"+"'"+' style="background-image:url('+"'../IMAGENES/PORTAL/ALBUM_FOTOS/"+tipo_consulta_mayus+"/"+nombre_fotos[i]+"'"+')"></div>	</div>';
					cont++;
				}
				
				$("#contenido-subida_fotos-pag_web #lista_fotos").html(codigo_fotos);
				
				
				
			}
		
		
		}
	}
	        
			
	});	
	
}



function fun_eliminar_foto(nivel,nombre){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/eliminar_foto.php",
        type: "POST",
        data:{nivel:nivel,nombre:nombre},
        async:true,
        beforeSend: function(objeto){
        	
        //	fun_mostrar_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){


		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			fun_consultar_galeria(nivel);
			fun_aviso_popup("La foto fue eliminada exitosamente",GL_TTL_ELIMINA_EXITO,30,30);
		}
	}
	        
			
	});	
	
}

function click_minifoto_muestra(background){
	
		////////////Formateamos todo///////////////////////////
	$("#marco_foto_mostrada img").attr("src","");
	$("#marco_foto_mostrada img").attr("width","0px");
	$("#marco_foto_mostrada img").attr("height","0px");
	
	$("#marco_foto_mostrada").css("width","0px");
	$("#marco_foto_mostrada").css("height","0px");
	
	/////////////////////////////////////////////////////////////

	var margen_foto_marco=20;

	var values=background.split("IMAGENES");

	
	$("#marco_foto_mostrada").fadeIn(GLOBAL_VEL_FADE);
	
//	alert(background);
	
	var direccion_background=values[1].substring(0,values[1].length-1);
	
	if(direccion_background.substring(direccion_background.length-1,direccion_background.length)=='"'){
		direccion_background=direccion_background.substring(0,direccion_background.length-1);
	}
	
	
	$("#marco_foto_mostrada img").attr("src","../IMAGENES"+direccion_background);
	
	$("#marco_foto_mostrada img").removeAttr("width");
	$("#marco_foto_mostrada img").removeAttr("height");
	
	var width_real_imagen=parseFloat($("#marco_foto_mostrada img").width())+2;
	var height_real_imagen=$("#marco_foto_mostrada img").height();
	
	//////////////////////////////Le damos al marco el valor que le corresponde en su ancho y alto
	
	var ancho_pantalla=$("body").css("width");
	var alto_pantalla=$("body").css("height");
	
/*
	alert(ancho_pantalla.replace("px", ""));
	alert((parseFloat(width_real_imagen)+margen_foto_marco*2));*/
	
	if(parseFloat(ancho_pantalla.replace("px", ""))<=(parseFloat(width_real_imagen)+margen_foto_marco*2)){
	/*	alert("mas ancho");*/
		
		width_real_imagen=parseFloat(ancho_pantalla)-60 +2;
		$("#marco_foto_mostrada img").attr("width",width_real_imagen+"px");
		
		height_real_imagen=$("#marco_foto_mostrada img").height();
	}
	/*
	alert(alto_pantalla.replace("px", ""));
	alert((parseFloat(height_real_imagen)+margen_foto_marco*2));*/
	
	if(parseFloat(alto_pantalla.replace("px", ""))<=(parseFloat(height_real_imagen)+margen_foto_marco*2)){
	/*	alert("mas alto");
		alert(alto_pantalla);*/
		height_real_imagen=parseFloat(alto_pantalla)-60;
		
		$("#marco_foto_mostrada img").attr("height",height_real_imagen+"px");
		
		width_real_imagen=parseFloat($("#marco_foto_mostrada img").width())+2;
	}	
	
	
	$("#marco_foto_mostrada ").css("width",(width_real_imagen+margen_foto_marco*2)+"px");
	$("#marco_foto_mostrada ").css("height",(parseFloat(height_real_imagen)+margen_foto_marco*2)+"px");
	
	
	var margen_left=(parseFloat(ancho_pantalla)-(width_real_imagen+margen_foto_marco*2))/2;
	var margen_top=(parseFloat(alto_pantalla)-(parseFloat(height_real_imagen)+margen_foto_marco*2))/2;
		
	
	$("#marco_foto_mostrada ").css("margin-left",margen_left+"px");
	$("#marco_foto_mostrada ").css("margin-top",margen_top+"px");
		
	$("#marco_foto_mostrada").fadeIn(GLOBAL_VEL_FADE);	
	$("#protector_marco_foto").fadeIn(GLOBAL_VEL_FADE);	
	
	
}


//////////////////////////////PERSONAL ADMINISTRATIVO////////////////////////////
//////////////////////////////PERSONAL ADMINISTRATIVO////////////////////////////
//////////////////////////////PERSONAL ADMINISTRATIVO////////////////////////////

function fun_insertar_administrativo(dni,nombres,apellido_p,apellido_m,cargo){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/Personal_insertar.php",
        type: "POST",
        data:{dni:dni,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),cargo:cargo},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			if(data=="existe"){
				fun_aviso_popup("Ya existe un personal con el mismo DNI.<br>Cambie el DNI por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
			fun_aviso_popup("Los datos del personal '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
			}
		}
	}
	        
			
	});	
	
}


function fun_modificar_administrativo(dni_anterior,dni,nombres,apellido_p,apellido_m,cargo){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/Personal_modificar.php",
        type: "POST",
        data:{dni_anterior:dni_anterior,dni:dni,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),cargo:cargo},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			if(data=="existe"){
				fun_aviso_popup("Ya existe un personal con el mismo DNI.<br>Cambie el DNI por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
			fun_get_administrativo();	
				fun_aviso_popup("Los datos fueron modificados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
			}
			
		}
	}
	        
			
	});	
	
}

function fun_get_administrativo(){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_personal.php",
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
				GL_ADMIN=new Array();
				GL_CONT_ADMIN=0;
				
				
				var num_campos=5;  //dni,nombres,apellido_p,apellido_m,cargo
				var valores=data.split("{");
				
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_ADMIN[GL_CONT_ADMIN]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4],valores[i+1]+" "+valores[i+2]+" "+valores[i+3]);
					
					GL_CONT_ADMIN++;
				}
				refrescar_tabla_admin();
				
			}else{
				
				GL_ADMIN=new Array();
				GL_CONT_ADMIN=0;
				refrescar_tabla_admin();
			}
			$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#campos_modif #bloque-izq").fadeOut(GLOBAL_VEL_FADE);
			
		}
	}
	        
			
	});	
}	
function refrescar_tabla_admin(){
	var html_list="";
				var cont=0;
				for(var i=0;i<GL_CONT_ADMIN;i++){
					cont++;
					html_list+='<tr id="fila_'+cont+'" title="Haga click para seleccionar fila" ondblclick="" onclick="fun_resalta_fila_tabla('+"'fila_"+cont+"','"+AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#lista .lista');tomar_datos_modif_admin();"+'">'+
							'<td width="'+GL_DIM_TABLA_ADMIN[0]+'%">'+GL_ADMIN[i][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ADMIN[1]+'%">'+GL_ADMIN[i][5]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ADMIN[2]+'%">'+GL_ADMIN[i][4]+'</td></tr>';
							
					
				}
				//alert(html_list);
				$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#lista .lista").html(html_list);

	
}

		
		
function tomar_datos_modif_admin(){
	var dni=fun_obtener_id_fila_restaltada(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#lista .lista");
	
	var admin=fun_get_objeto(GL_ADMIN,dni,0);
	$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#txt_dni").val( admin[0]);
	$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#txt_nombres").val(fun_invierte_tratamiento_tildes(admin[1]));
	$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#txt_apellido_p").val(fun_invierte_tratamiento_tildes(admin[2]));
	$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#txt_apellido_m").val(fun_invierte_tratamiento_tildes(admin[3]));
	$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#slc_nivel").val(admin[4]);
	
	$(AREA_PAG_WEB+CONTENEDOR_CONSULTA_ADMIN+"#campos_modif #bloque-izq").fadeIn(GLOBAL_VEL_FADE);
}


