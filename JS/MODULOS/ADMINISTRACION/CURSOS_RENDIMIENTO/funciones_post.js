var GL_CURSOS=new Array();   //nombre_curso , seccion , id_profesor , categoria
var GL_CONT_CURSOS=0;

var GL_SECCIONES=new Array();
var GL_CONT_SECCIONES=0;;

var GL_CURSOS_NOTAS=new Array();
var GL_CONT_CURSOS_NOTAS=0;


var GL_NOTAS=new Array();
var GL_CONT_NOTAS=0;


var GL_CURSOS_CATEGORIAS_NOTAS=new Array();
var GL_CONT_CURSOS_CATEGORIAS_NOTAS=0;


var GL_ASISTENCIAS=new Array();
var GL_CONT_ASISTENCIAS=0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SER�N LLAMADAS PARA SU USO EN EL M�DULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_insertar_cursos(nivel,grado,cursos){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/Insertar.php",
        type: "POST",
        data:{nivel:nivel,grado:grado,cursos:fun_tratamiento_tildes(cursos)},
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
        data:{nivel:nivel,grado:grado,seccion:seccion,nombre_curso:fun_tratamiento_tildes(nombre_curso),id_profesor:id_profesor},
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
//alert(data);
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
				GL_CONT_CURSOS=0;
				var num_campos=4;  //
				valores=grupo_valores[1].split("{");
				var html_lista_cursos="";
				
				var html_slc_cursos="";
				
				
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_CURSOS[GL_CONT_CURSOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3]);
					
					/*objeto=fun_get_objeto(GL_PROFESORES,valores[i+2],0);
					
					nombre_profe="";
					if(objeto){
						nombre_profe=objeto[1]+" "+objeto[2]+" "+objeto[3];
					}*/
					if((i/num_campos)%GL_CONT_SECCIONES==0){
						html_slc_cursos+='<option value="'+valores[i]+'">'+valores[i]+'</option>';
						/*
						html_lista_cursos+='<tr>'+
							'<td rowspan="'+GL_CONT_SECCIONES+'" width="'+GL_DIM_TABLA_CURSOS[0]+'%">'+valores[i]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+valores[i+1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';*/
					}/*else{
							html_lista_cursos+='<tr>'+
							
							'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+valores[i+1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
					}*/
					
					
					GL_CONT_CURSOS++;
				}
				
				
				
			$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").html(html_slc_cursos);
				refresca_tabla_cursos();
				var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(fun_invierte_tratamiento_tildes(profe_a_cargo));
				
			//	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#lista .lista").html(html_lista_cursos);
				
			
			}else{
				GL_SECCIONES=new Array();
				GL_CONT_SECCIONES=0;;
				GL_CURSOS=new Array();
				GL_CONT_CURSOS=0;
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").html("");
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").html("");
				
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val("");
				refresca_tabla_cursos();
			}
			
		}
	}
	        
			
	});	
	
}


function fun_get_cursos_notas(nivel,grado){  

	
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
				
				$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_seccion ").html(html_secciones);
				
				
				GL_CURSOS_NOTAS=new Array();
				GL_CONT_CURSOS_NOTAS=0;
				var num_campos=4;  //
				valores=grupo_valores[1].split("{");
				var html_lista_cursos="";
				
				var html_slc_cursos="";
				
				
				GL_CURSOS_CATEGORIAS_NOTAS=new Array();
				GL_CONT_CURSOS_CATEGORIAS_NOTAS=0;
				
				
				
				var categoria=valores[3];
				
				var contador_repet_cat=0;
				for(var i=0;valores[i];i+=num_campos){
					
					GL_CURSOS_NOTAS[GL_CONT_CURSOS_NOTAS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3]);
					
					/*objeto=fun_get_objeto(GL_PROFESORES,valores[i+2],0);
					
					nombre_profe="";
					if(objeto){
						nombre_profe=objeto[1]+" "+objeto[2]+" "+objeto[3];
					}*/
					
					/*Agregamos lsa categorias en cuenta*/
					if(valores[i+3]==categoria){
						contador_repet_cat++;
					}else{
											
						GL_CURSOS_CATEGORIAS_NOTAS[GL_CONT_CURSOS_CATEGORIAS_NOTAS]=new Array(categoria,contador_repet_cat/GL_CONT_SECCIONES); //SE debe dividir entre el numero de secciones ya que est contando todas las repeticiones del nombre o categoria, y estas se repiten por seccion
						GL_CONT_CURSOS_CATEGORIAS_NOTAS++;
						categoria=valores[i+3];
						contador_repet_cat=1;
					}
					
					if((i/num_campos)%GL_CONT_SECCIONES==0){
						html_slc_cursos+='<option value="'+valores[i]+'">'+valores[i]+'</option>';
						/*
						html_lista_cursos+='<tr>'+
							'<td rowspan="'+GL_CONT_SECCIONES+'" width="'+GL_DIM_TABLA_CURSOS[0]+'%">'+valores[i]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+valores[i+1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';*/
					}/*else{
							html_lista_cursos+='<tr>'+
							
							'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+valores[i+1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
					}*/
					
					
					GL_CONT_CURSOS_NOTAS++;
				}
				
				//Agregamos la ultima cuenta de categorias
					
				GL_CURSOS_CATEGORIAS_NOTAS[GL_CONT_CURSOS_CATEGORIAS_NOTAS]=new Array(categoria,contador_repet_cat/GL_CONT_SECCIONES);//SE debe dividir entre el numero de secciones ya que est contando todas las repeticiones del nombre o categoria, y estas se repiten por seccion
				GL_CONT_CURSOS_CATEGORIAS_NOTAS++;
				/*
				alert(GL_CURSOS_CATEGORIAS_NOTAS[0]);
				alert(GL_CURSOS_CATEGORIAS_NOTAS[1]);*/
				
				///////////////////////////////////////////////////////
				
				
			$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_curso ").html(html_slc_cursos);
			
			//	refresca_tabla_cursos();
			//	var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());
				
			//	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(profe_a_cargo);
				
			//	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#lista .lista").html(html_lista_cursos);
				
				fun_cargar_alumnos_curso(nivel+grado+$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_curso ").val()+$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_seccion ").val());
			
			}else{
				GL_SECCIONES=new Array();
				GL_CONT_SECCIONES=0;;
				GL_CURSOS_NOTAS=new Array();
				GL_CONT_CURSOS_NOTAS=0;
				
				GL_NOTAS=new Array();
				GL_CONT_NOTAS=0;
				refresca_tabla_cursos_notas();
				
				$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_curso ").html("");
				$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_seccion ").html("");
				
				//refresca_tabla_cursos();
			}
			
		}
	}
	        
			
	});	
	
}


function fun_insertar_nota(codigo_alumno,codigo_curso,bimestre,nota){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/Alumno_Modificar_Notas.php",
        type: "POST",
        data:{codigo_alumno:codigo_alumno,codigo_curso:fun_tratamiento_tildes(codigo_curso),bimestre:bimestre,nota:nota},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){
//alert(data);
		fun_quitar_cargando();
		
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			fun_aviso_popup("Los nota del curso fue guardada con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
			fun_get_notas(codigo_alumno);
		}
	}
	        
			
	});	
	
}

function fun_get_notas(codigo_alumno){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/Alumno_Consultar_notas.php",
        type: "POST",
        data:{codigo_alumno:codigo_alumno},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

//alert(data);
		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data!="no data"){
				
				var valores=data.split("{");
				var num_campos=5;
				
				GL_NOTAS=new Array();
				GL_CONT_NOTAS=0;
				
				
				for(var i=0;valores[i];i+=num_campos){
					GL_NOTAS[GL_CONT_NOTAS]=new Array(valores[i],parseFloat(valores[i+1]),parseFloat(valores[i+2]),parseFloat(valores[i+3]),parseFloat(valores[i+4]));
					GL_CONT_NOTAS++;
				}
				
				refresca_tabla_cursos_notas();
		
			}else{
				
				
				GL_NOTAS=new Array();
				GL_CONT_NOTAS=0;
				refresca_tabla_cursos_notas();
				
			}
			
		}
	}
	        
			
	});	
	
}


function fun_cargar_alumnos_curso(id_curso){  //esta funci�n es para hacer alguna llamada con ajax mediante post

	
	$.ajax({
        url: "../POST/MODULO_PROFESORES/ConsultarAlumnosDeUnCurso.php",
        type: "POST",
        data:{codigo_curso:fun_tratamiento_tildes(id_curso)},
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
		
				GL_NOTAS=new Array();
				GL_CONT_NOTAS=0;
				refresca_tabla_cursos_notas();
				
				$(AREA_CURSOS+CONTENEDOR_NOTAS+" #slc_alumno").html(html_select);
				
				
			//	fun_cargar_observaciones(id_curso,codigo_alumno);
		
		}
	}
	        
			
	});	
	
}





function fun_cargar_alumnos_asistencias(nivel,grado,seccion,div_contenedor_alumnos){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Alumno_get_alumnos.php",
        type: "POST",
        data:{nivel:nivel,grado:grado,seccion:seccion},
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
				var num_campos=8;
				
				var html_select='<option value="0">Seleccione a un alumno</option>';
								
				for(var i=0;valores[i];i+=num_campos){
					
					html_option='<option value="'+valores[i]+'">'+valores[i+1]+" "+valores[i+2]+" "+valores[i+3]+'</option>';					
					
					html_select+=html_option;
				}
				
				
			}else{
				var html_select='<option id="0">Seleccione a un alumno</option>';
				
			}
		
				$(div_contenedor_alumnos).html(html_select);
				
				
			//	fun_cargar_observaciones(id_curso,codigo_alumno);
		
		}
	}
	        
			
	});	
	
}




function fun_modificar_nombre_curso(nivel,grado,nombre_actual,nuevo_nombre){
	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/Modificar_nombre_curso.php",
        type: "POST",
        data:{nivel:nivel,grado:grado,nombre_actual:fun_tratamiento_tildes(nombre_actual),nuevo_nombre:fun_tratamiento_tildes(nuevo_nombre)},
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
				fun_aviso_popup("Ya existe un curso con el nombre '"+fun_tratamiento_tildes(nuevo_nombre)+"'.<br>Intente con otro nombre.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
				
				
			}else{
				
			$(AREA_CURSOS+"#popup_cambiar_nombre_curso").fadeOut(GLOBAL_VEL_FADE);
				fun_aviso_popup("El nombre del curso fue modificado con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
				fun_get_cursos(nivel,grado);	
			}
			
		}
	}
	        
			
	});	
	
}
	



function fun_cargar_inasistencias(codigo_alumno){  

	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/get_asistencias.php",
        type: "POST",
        data:{codigo_alumno:codigo_alumno},
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
				var num_campos=3;
				
				var html_list="";
				
				GL_ASISTENCIAS=new Array();
				GL_CONT_ASISTENCIAS=0;
					
				var cont=0;
				for(var i=0;valores[i];i+=num_campos){
					
					
					cont++;
					GL_ASISTENCIAS[GL_CONT_ASISTENCIAS] = new Array(valores[i],valores[i+1],valores[i+2]);
					
					valores_fecha=valores[i].split("-");
					
					html_list+='<tr id="fila_'+cont+'" title="Haga click para seleccionar fila" ondblclick="" onclick="fun_resalta_fila_tabla('+"'fila_"+cont+"','"+AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#lista .lista');fun_pintar_deshabilitados('"+AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#lista .lista');"+'">'+
							'<td style="display:none;">'+valores[i]+"</td>"+
							'<td width="'+GL_DIM_TABLA_ASISTENCIA[0]+'%">'+fun_nombre_mes(valores_fecha[1])+'</td>'+
							'<td width="'+GL_DIM_TABLA_ASISTENCIA[1]+'%">'+valores_fecha[2]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ASISTENCIA[2]+'%">'+GL_ASISTENCIAS[GL_CONT_ASISTENCIAS][1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ASISTENCIA[3]+'%">'+GL_ASISTENCIAS[GL_CONT_ASISTENCIAS][2]+'</td></tr>';
					
					GL_CONT_ASISTENCIAS++;
												
				}
				
				$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#lista .lista").html(html_list);	
				}else{
						$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#lista .lista").html("");	
				}
				
		}
	}
	        
			
	});	
	
}



function fun_insertar_registro_asistencia(codigo_alumno,fecha,hora,tipo){  

	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/insertar_asistencia.php",
        type: "POST",
        data:{codigo_alumno:codigo_alumno,fecha:fecha,hora:hora,tipo:tipo},
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
				fun_aviso_popup("Ya existe un registro del alumno en la fecha dada.<br>Verifique la fecha y vuelva a intentarlo.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
			
				fun_aviso_popup("El registro de tardanza o inasistencia del alumno<br>fue guardado con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
				
				fun_cargar_inasistencias(codigo_alumno);
			}
				
		}
	}
	        
			
	});	
	
}



function fun_eliminar_registro_asistencia(codigo_alumno,fecha){  

	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTRO_CURSOS_RENDIMIENTO/eliminar_asistencia.php",
        type: "POST",
        data:{codigo_alumno:codigo_alumno,fecha:fecha},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();
		
		
		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
						
				fun_aviso_popup("El registro de tardanza o inasistencia del alumno<br>fue eliminado con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
				
				fun_cargar_inasistencias(codigo_alumno);
			
				
		}
	}
	        
			
	});	
	
}

	
		

function refresca_tabla_cursos(){ //refresca la tabla de cursos pintando las celdas del curso elegido correspondiente
	
	var html_lista_cursos="";
		
				
		//		var html_slc_cursos="";
				
				var curso_select=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val();
				var seccion_select=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val();
				
				for(var i=0;i<GL_CONT_CURSOS;i++){
					
				//	GL_CURSOS[GL_CONT_CURSOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3]);
					
					objeto=fun_get_objeto(GL_PROFESORES,GL_CURSOS[i][2],0);
					
					nombre_profe="";
					if(objeto){
						nombre_profe=objeto[1]+" "+objeto[2]+" "+objeto[3];
					}
					if(i%GL_CONT_SECCIONES==0){
				//		html_slc_cursos+='<option value="'+GL_CURSOS[i][0]+'">'+GL_CURSOS[i][0]+'</option>';
					/*	alert(fun_tratamiento_tildes(curso_select));
						alert(GL_CURSOS[i][0]);*/
						
						if(fun_tratamiento_tildes(curso_select)==fun_tratamiento_tildes(GL_CURSOS[i][0]) && GL_CURSOS[i][1]==seccion_select){
							html_lista_cursos+='<tr>'+
								'<td style="background:#FFEC64;" rowspan="'+GL_CONT_SECCIONES+'" width="'+GL_DIM_TABLA_CURSOS[0]+'%">'+GL_CURSOS[i][0]+'</td>'+
								'<td style="background:#FFEC64;" width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+GL_CURSOS[i][1]+'</td>'+
								'<td style="background:#FFEC64;" width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
							
						}else{
							if(fun_tratamiento_tildes(curso_select)==fun_tratamiento_tildes(GL_CURSOS[i][0])){
								html_lista_cursos+='<tr>'+
								'<td style="background:#FFEC64;" rowspan="'+GL_CONT_SECCIONES+'" width="'+GL_DIM_TABLA_CURSOS[0]+'%">'+GL_CURSOS[i][0]+'</td>'+
								'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+GL_CURSOS[i][1]+'</td>'+
								'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
							}else{
								html_lista_cursos+='<tr>'+
								'<td rowspan="'+GL_CONT_SECCIONES+'" width="'+GL_DIM_TABLA_CURSOS[0]+'%">'+GL_CURSOS[i][0]+'</td>'+
								'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+GL_CURSOS[i][1]+'</td>'+
								'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
							}
						}
							
						
					}else{
							
							
						if(fun_tratamiento_tildes(curso_select)==GL_CURSOS[i][0] && GL_CURSOS[i][1]==seccion_select){
							
							html_lista_cursos+='<tr>'+
							
							'<td style="background:#FFEC64;" width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+GL_CURSOS[i][1]+'</td>'+
							'<td style="background:#FFEC64;" width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
						}else{
							html_lista_cursos+='<tr>'+
							
							'<td width="'+GL_DIM_TABLA_CURSOS[1]+'%">'+GL_CURSOS[i][1]+'</td>'+
							'<td width="'+GL_DIM_TABLA_CURSOS[2]+'%">'+nombre_profe+'</td></tr>';
						}
							
					}
					
					
					//GL_CONT_CURSOS++;
				}
				
			//	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").html(html_slc_cursos);
	
				$(AREA_CURSOS+CONTENEDOR_CURSOS+"#lista .lista").html(html_lista_cursos);
}






function refresca_tabla_cursos_notas(){ //refresca la tabla de cursos pintando las celdas del curso elegido correspondiente
	
	var html_lista_cursos="";
			
		//		var html_slc_cursos="";
				
				var grado_select=$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_grado ").val();
				var nivel_select=$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_nivel ").val();
				var curso_select=$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_curso ").val();
				var seccion_select=$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_seccion ").val();
				
				var bimestre_select=$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_bimestre ").val();			
			
				
								
				var contador=0;	
				var contador_categorias=0;			
				var nombre_curso="";
				var bandera=0;
				for(var i=0;i<GL_CONT_CURSOS_NOTAS;i++){
					
				if(nombre_curso!=GL_CURSOS_NOTAS[i][0]){
					bandera=0;
				}
				if(bandera==0){
					bandera=1;
					nombre_curso=GL_CURSOS_NOTAS[i][0];
				
						if(contador==0){
							
							//var objeto=fun_get_objeto(nivel_select+grado_select+)
							
							objeto=fun_get_objeto(GL_NOTAS,nivel_select+grado_select+GL_CURSOS_NOTAS[i][0]+seccion_select,0);
							
							
							/*alert(nivel_select+grado_select+GL_CURSOS_NOTAS[i][0]+seccion_select);
							alert(GL_NOTAS[0]);
							alert(GL_NOTAS[1]);*/
							
							if(!objeto){
								nota1="";
								nota2="";
								nota3="";
								nota4="";
							}else{
								nota1=objeto[1];
								if(nota1==-1){
									nota1="";
								}
								nota2=objeto[2];
								if(nota2==-1){
									nota2="";
								}
								nota3=objeto[3];
								if(nota3==-1){
									nota3="";
								}
								nota4=objeto[4];
								if(nota4==-1){
									nota4="";
								}
							}
							
							
							nombre_cate=nombre_categoria_cursos(nivel_select,GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][0]);
							
							if(fun_tratamiento_tildes(curso_select)==GL_CURSOS_NOTAS[i][0]){
								
							switch(bimestre_select){
								
								case "1":html_lista_cursos+='<tr>'+
								'<td rowspan="'+GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][1]+'" class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[0]+'%">'+nombre_cate+'</td>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
								
								case "2":html_lista_cursos+='<tr>'+
								'<td rowspan="'+GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][1]+'" class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[0]+'%">'+nombre_cate+'</td>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
								
								case "3":html_lista_cursos+='<tr>'+
								'<td rowspan="'+GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][1]+'" class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[0]+'%">'+nombre_cate+'</td>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
								
								case "4":html_lista_cursos+='<tr>'+
								'<td rowspan="'+GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][1]+'" class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[0]+'%">'+nombre_cate+'</td>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
							}
							}else{
								html_lista_cursos+='<tr>'+
								'<td rowspan="'+GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][1]+'" class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[0]+'%">'+nombre_cate+'</td>'+
								'<td width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';
							}
							
								
						}else{
							
							objeto=fun_get_objeto(GL_NOTAS,nivel_select+grado_select+GL_CURSOS_NOTAS[i][0]+seccion_select,0);
							
							
							/*alert(nivel_select+grado_select+GL_CURSOS_NOTAS[i][0]+seccion_select);
							alert(GL_NOTAS[0]);
							alert(GL_NOTAS[1]);*/
							
							if(!objeto){
								nota1="";
								nota2="";
								nota3="";
								nota4="";
							}else{
								nota1=objeto[1];
								if(nota1==-1){
									nota1="";
								}
								nota2=objeto[2];
								if(nota2==-1){
									nota2="";
								}
								nota3=objeto[3];
								if(nota3==-1){
									nota3="";
								}
								nota4=objeto[4];
								if(nota4==-1){
									nota4="";
								}
							}
							
							
							if(fun_tratamiento_tildes(curso_select)==GL_CURSOS_NOTAS[i][0]){
								
							switch(bimestre_select){
								
								case "1":html_lista_cursos+='<tr>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
								
								case "2":html_lista_cursos+='<tr>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
								
								case "3":html_lista_cursos+='<tr>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
								
								case "4":html_lista_cursos+='<tr>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';break;
								
							}
							
							}else{
								html_lista_cursos+='<tr>'+
								'<td width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';
							}
							
							
							
								
						}
						
						
						contador++;
						
						if(contador==GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][1]){
							contador=0;
							contador_categorias++;
						}
					
				}else{
					
				}
					
					
					//GL_CONT_CURSOS++;
				}
				//	alert(html_lista_cursos);
			//	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").html(html_slc_cursos);
	
				$(AREA_CURSOS+CONTENEDOR_NOTAS+"#lista .lista").html(html_lista_cursos);
}



function nombre_categoria_cursos( nivel,inicial_nombre){
	
	var nombre_categoria;
	
	for(var i=0;GL_CATEGORIA_CURSOS[i];i++){
									
		if(GL_CATEGORIA_CURSOS[i][0]==nivel && GL_CATEGORIA_CURSOS[i][1]==inicial_nombre){
			nombre_categoria=GL_CATEGORIA_CURSOS[i][2];
		}
	}
	return nombre_categoria;
}