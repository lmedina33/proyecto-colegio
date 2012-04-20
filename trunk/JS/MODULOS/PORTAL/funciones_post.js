

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_consultar_quienes_somos(arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_quienes_somos.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        	//fun_mostrar_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){

			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
			
        	//fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var valores=data.split("{");
				var parrafos="<ul>";
				for(var i=0;valores[i];i++){
					parrafos+="<li><p>"+valores[i]+"</p></li>";
				}
				
				parrafos+="</ul>";
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
        	
        //	fun_mostrar_cargando();
        	/*
        	$("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
			$("#cargando").fadeIn(GLOBAL_VEL_FADE);*/
			
        },
        
	success: function(data){


			/*
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);*/
		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var valores=data.split("{");
				var parrafos="<ul>";
				for(var i=0;valores[i];i++){
					parrafos+="<li><p>"+valores[i]+"</p></li>";
				}
				
				parrafos+="</ul>";
				$(arg_div_contenedor).html(parrafos);
				
			}
		
		
		}
	}
	        
			
	});	
	
}

/***********METODOLOGIAS**************/
/***********METODOLOGIAS**************/
/***********METODOLOGIAS**************/
/***********METODOLOGIAS**************/
/***********METODOLOGIAS**************/


function fun_consultar_metodologia(nivel,arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_metodologia.php",
        type: "POST",
        data:{nivel:nivel},
        async:true,
        beforeSend: function(objeto){
        	
        //	fun_mostrar_cargando();
        				
        },
        
	success: function(data){

		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var valores=data.split("{");
				var parrafos="";
				for(var i=0;valores[i];i++){
					parrafos+=valores[i]+"\n";
				}
				
				$(arg_div_contenedor).html(parrafos);
				
			}else{
				$(arg_div_contenedor).html("");
			}
		
		}
	}
	       	
	});	
	
}


/***********ACTIVIDADES**************/
/***********ACTIVIDADES**************/
/***********ACTIVIDADES**************/
/***********ACTIVIDADES**************/
/***********ACTIVIDADES**************/


function fun_consultar_actividades(nivel,arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_actividad.php",
        type: "POST",
        data:{nivel:nivel},
        async:true,
        beforeSend: function(objeto){
        	
        //	fun_mostrar_cargando();
       			
        },
        
	success: function(data){

		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var valores=data.split("{");
				var parrafos="<ul>";
				for(var i=0;valores[i];i++){
					parrafos+="<li><p>"+valores[i]+"</p></li>";
				}
				parrafos+="</ul>";
				
				$(arg_div_contenedor).html(parrafos);
				
			}else{
				$(arg_div_contenedor).html("");
			}
		
		}
	}
	       	
	});	
	
}




/***********ADMISION**************/
/***********ADMISION**************/
/***********ADMISION**************/
/***********ADMISION**************/
/***********ADMISION**************/


function fun_consultar_admision(nivel,arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_admision.php",
        type: "POST",
        data:{nivel:nivel},
        async:true,
        beforeSend: function(objeto){
        	
        //	fun_mostrar_cargando();
        				
        },
        
	success: function(data){

		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data!="no data"){
				
				var valores=data.split("{");
				var parrafos="<ul>";
				for(var i=0;valores[i];i++){
					parrafos+="<li><p>"+valores[i]+"</p></li>";
				}
				parrafos+="</ul>";
				
				$(arg_div_contenedor).html(parrafos);
				
			}else{
				$(arg_div_contenedor).html("");
			}
		
		}
	}
	       	
	});	
	
}


/***********SERVICIOS**************/
/***********SERVICIOS**************/
/***********SERVICIOS**************/
/***********SERVICIOS**************/
/***********SERVICIOS**************/



function fun_consultar_servicios(arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_servicios.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        //	fun_mostrar_cargando();
        				
        },
        
	success: function(data){

		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var TITULOS_SERVICIOS=new Array();
				var SERVICIOS=new Array();
				var CONT_SERVICIOS=0;
				
				var valores=data.split("{");
				var parrafos="";
				var titulos="";
				
				var html_servicios='<div class="subtitulo_servicio">'+valores[0]+'</div><ul>';
				
				var titulo_parrafo=valores[0];				
				for(var i=0;valores[i];i+=2){
					
					if(titulo_parrafo==valores[i]){
						//parrafos+=valores[i+1]+"\n";
						html_servicios+="<li>"+valores[i+1]+"</li>";
					}else{
						titulo_parrafo=valores[i];
						html_servicios+="</ul>";
						html_servicios+='<div class="subtitulo_servicio">'+valores[i]+'</div><ul>'; 
						
						html_servicios+="<li>"+valores[i+1]+"</li>";
						
					}
					
				}
				html_servicios+="</ul>";
				$(arg_div_contenedor).html(html_servicios);				
				//refrescar_vista_servicios();
				
			}else{
				
				
				
				///refrescar_vista_servicios();
			}
		
		}
	}
	       	
	});	
	
}









/***********PLANILLA**************/
/***********PLANILLA**************/
/***********PLANILLA**************/
/***********PLANILLA**************/
/***********PLANILLA**************/




function fun_consultar_planilla(arg_div_contenedor){  //esta función es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/consultar_planilla_total.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        //	fun_mostrar_cargando();
        				
        },
        
	success: function(data){
//alert(data);
		//	fun_quitar_cargando();
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
						
			if(data!="no data"){
				
				var grupo_valores=data.split("}");
				
				var valores=grupo_valores[0].split("{");
				var num_campos=3;
				//primero los profesores
				
				var html_planilla_docente='<div class="subtitulo">Plana docente</div><ul>';
				
				for (var i=0;valores[i];i+=num_campos){
					html_planilla_docente+='<li>'+valores[i]+" "+valores[i+1]+" "+valores[i+2]+"</li>";
				}
				
				html_planilla_docente+='</ul>';
				
				
				
				valores=grupo_valores[1].split("{");
				num_campos=4;
				
				
				var html_planilla_administrativa='<div class="subtitulo">Plana administrativa</div><ul>';
				
				for (var i=0;valores[i];i+=num_campos){
					html_planilla_administrativa+='<li><div class="subtitulo_cargo">'+valores[i+3]+':</div> <div class="nombre_planilla">'+valores[i]+" "+valores[i+1]+" "+valores[i+2]+"</div></li>";
				}
				
				html_planilla_administrativa+='</ul>';
				
				$(arg_div_contenedor).html(html_planilla_docente+html_planilla_administrativa);
				
				/*
				var TITULOS_SERVICIOS=new Array();
				var SERVICIOS=new Array();
				var CONT_SERVICIOS=0;
				
				var valores=data.split("{");
				var parrafos="";
				var titulos="";
				
				var html_servicios='<div class="subtitulo_servicio">'+valores[0]+'</div><ul>';
				
				var titulo_parrafo=valores[0];				
				for(var i=0;valores[i];i+=2){
					
					if(titulo_parrafo==valores[i]){
						//parrafos+=valores[i+1]+"\n";
						html_servicios+="<li>"+valores[i+1]+"</li>";
					}else{
						titulo_parrafo=valores[i];
						html_servicios+="</ul>";
						html_servicios+='<div class="subtitulo_servicio">'+valores[i]+'</div><ul>'; 
						
						html_servicios+="<li>"+valores[i+1]+"</li>";
						
					}
					
				}
				html_servicios+="</ul>";
				$(arg_div_contenedor).html(html_servicios);				*/
				//refrescar_vista_servicios();
				
			}else{
				
				
				
				///refrescar_vista_servicios();
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
function fun_consultar_galeria(tipo_consulta){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
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
					codigo_fotos+='<div class="minifoto_muestra" onclick='+"'"+"click_minifoto_muestra($(this).css("+'"background-image"'+"))"+"'"+' style="background-image:url('+"'../IMAGENES/PORTAL/ALBUM_FOTOS/"+tipo_consulta_mayus+"/"+nombre_fotos[i]+"'"+')"></div>';
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