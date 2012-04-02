var GL_CURSOS=new Array();
var GL_CONT_CURSOS=0;

var GL_SECCIONES=new Array();
var GL_CONT_SECCIONES=0;;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_insertar_cursos(nivel,grado,cursos){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/Insertar.php",
        type: "POST",
        data:{nivel:nivel,grado:grado,cursos:cursos},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();
		
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			fun_aviso_popup("Los datos de los cursos fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
			fun_get_cursos(nivel,grado);
		}
	}
	        
			
	});	
	
}


function fun_asignar_profesor(nivel,grado,seccion,nombre_curso,id_profesor){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/Cambiar_profesor.php",
        type: "POST",
        data:{nivel:nivel,grado:grado,seccion:seccion,nombre_curso:nombre_curso,id_profesor:id_profesor},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();
		
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
				
				fun_aviso_popup("El profesor fue asignado con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
				fun_get_cursos(nivel,grado);	
				
				$(AREA_CURSOS+"#popup_asignar_profesor").fadeOut(GLOBAL_VEL_FADE);
				
				var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(profe_a_cargo);
			
		}
	}
	        
			
	});	
	
}


function fun_get_cursos(nivel,grado){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/Obtener_grado_curso.php",
        type: "POST",
        data:{nivel:nivel,grado:grado},
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
			//	alert(data);
				
				
				var grupo_valores=data.split("}");
				
				GL_SECCIONES=new Array();
				GL_CONT_SECCIONES=0;;
				
				
				var html_secciones="";
				
				var valores=grupo_valores[0].split("{");
				var num_campos=1;
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_SECCIONES[GL_CONT_SECCIONES]=valores[i];
					
					
					html_secciones+='<option value="'+valores[i]+'">'+valores[i]+'</option>';
					
					GL_CONT_SECCIONES++;
				}
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").html(html_secciones);
				
				
				GL_CURSOS=new Array();
				GL_CONT_CURSOS=0;;
				var num_campos=4;  //
				valores=grupo_valores[1].split("{");
				var html_lista_cursos="";
				
				var html_slc_cursos="";
				
				
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_CURSOS[GL_CONT_CURSOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3]);
					
					objeto=fun_get_objeto(GL_PROFESORES,valores[i+2],0);
					
					nombre_profe="";
					if(objeto){
						nombre_profe=objeto[1]+" "+objeto[2]+" "+objeto[3];
					}
					if((i/num_campos)%GL_CONT_SECCIONES==0){
						html_slc_cursos+='<option value="'+valores[i]+'">'+valores[i]+'</option>';
						
						html_lista_cursos+='<tr>'+
							'<td rowspan="'+GL_CONT_SECCIONES+'" width="'+GL_DIM_TABLA_CURSOS[0]+'%">'+valores[i]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+valores[i+1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
					}else{
							html_lista_cursos+='<tr>'+
							
							'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+valores[i+1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
					}
					
					
					GL_CONT_CURSOS++;
				}
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").html(html_slc_cursos);
				
				var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(profe_a_cargo);
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#lista .lista").html(html_lista_cursos);
				
			
			}
			
		}
	}
	        
			
	});	
	
}



