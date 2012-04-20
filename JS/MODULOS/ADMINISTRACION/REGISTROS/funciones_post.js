var GL_ALUMNOS=new Array(); //codigo,nombres,apellido_p,apellido_m,password,id_padre,disponibilidad,repitente
var GL_CONT_ALUMNOS=0;

var GL_ALUMNOS_NO_DISPO=new Array(); //codigo,nombres,apellido_p,apellido_m,nivel,grado,seccion,password,id_padre,disponibilidad,repitente
var GL_CONT_ALUMNOS_NO_DISPO=0;

var GL_PADRES=new Array(); //dni,nombres,apellido_p,apellido_m,usuario,password,disponibilidad
var GL_CONT_PADRES=0;

var GL_PROFESORES=new Array(); //dni,nombres,apellido_p,apellido_m,usuario,password,disponibilidad
var GL_CONT_PROFESORES=0;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_insertar_alumno(codigo,id_padre,nombres,apellido_p,apellido_m,password,nivel,grado,seccion){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Alumno_Insertar.php",
        type: "POST",
        data:{codigo:codigo,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),password:password,nivel:nivel,grado:grado,seccion:seccion,id_padre:id_padre},
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
				fun_aviso_popup2("Ya existe un alumno con el mismo c&oacute;digo.<br>Cambie el c&oacute;digo por otro que no haya sido asignado a otro alumno.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
			
				fun_aviso_popup("Los datos del alumno '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
			}
			
		}
	}
	        
			
	});	
	
}



function fun_modificar_alumno(codigo_anterior,codigo,id_padre,nombres,apellido_p,apellido_m,password,nivel,grado,seccion,disponible,refresh_area,repitencia){  

//alert(repitencia);
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Alumno_Modificar.php",
        type: "POST",
        data:{codigo_anterior:codigo_anterior,codigo:codigo,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),password:password,nivel:nivel,grado:grado,seccion:seccion,disponible:disponible,id_padre:id_padre,repitencia:repitencia},
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
				fun_aviso_popup("Ya existe un alumno con el mismo c&oacute;digo.<br>Cambie el c&oacute;digo por otro que no haya sido asignado a otro alumno.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
			
				fun_aviso_popup("Los datos del alumno '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
				var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val();
				var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val();
				var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val();
				
				if(refresh_area=="no dispo"){
					fun_get_alumnos_no_dispo();
				}else{
					
					fun_get_alumnos(nivel,grado,seccion);
				}	
			}
			
		}
	}
	        
			
	});	
	
}





function fun_eliminar_alumno(codigo,refresh_area){  

	alert(codigo);
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Alumno_Eliminar.php",
        type: "POST",
        data:{codigo:codigo},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			
				if(refresh_area=="no dispo"){
					var allumno=fun_get_objeto(GL_ALUMNOS_NO_DISPO,codigo,0);
					fun_aviso_popup("Los datos del alumno<br>'"+fun_tratamiento_tildes(allumno[1])+" "+fun_tratamiento_tildes(allumno[2])+" "+fun_tratamiento_tildes(allumno[3])+"'<br>fueron eliminados con &eacute;xito.",GL_TTL_ELIMINA_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
						
					fun_get_alumnos_no_dispo();
					
				}else{
					var allumno=fun_get_objeto(GL_ALUMNOS,codigo,0);
				fun_aviso_popup("Los datos del alumno '"+fun_tratamiento_tildes(allumno[1])+" "+fun_tratamiento_tildes(allumno[2])+" "+fun_tratamiento_tildes(allumno[3])+"' fueron eliminados con &eacute;xito.",GL_TTL_ELIMINA_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
				
			var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val();
			var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val();
			var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val();
			
					fun_get_alumnos(nivel,grado,seccion);
				}	
		}
	}
	        
			
	});	
	
}




function fun_get_alumnos(nivel,grado,seccion){  

	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Alumno_get_alumnos.php",
        type: "POST",
        data:{nivel:nivel,grado:grado,seccion:seccion},
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
				GL_ALUMNOS=new Array();
				GL_CONT_ALUMNOS=0;;
				var num_campos=8;  //codigo,nombres,apellido_p,apellido_m,password,id_padre,disponibilidad
				var valores=data.split("{");
				var html_list="";
				var cont=0;
					var padre;
				for(var i=0;valores[i];i+=num_campos){
					
					GL_ALUMNOS[GL_CONT_ALUMNOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4],valores[i+5],parseFloat(valores[i+6]),valores[i+7]);
						
					padre= fun_get_objeto(GL_PADRES,GL_ALUMNOS[GL_CONT_ALUMNOS][5],0);
					if(padre){
						nombre_padre=padre[7];
					}else{
						nombre_padre="";
					}
					cont++;
					html_list+='<tr id="fila_'+cont+'" title="Haga click para seleccionar fila" ondblclick="" onclick="fun_resalta_fila_tabla('+"'fila_"+cont+"','"+AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista');tomar_datos_modif_alumno();"+'">'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[0]+'%">'+GL_ALUMNOS[GL_CONT_ALUMNOS][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[1]+'%">'+GL_ALUMNOS[GL_CONT_ALUMNOS][1]+" "+GL_ALUMNOS[GL_CONT_ALUMNOS][2]+" "+GL_ALUMNOS[GL_CONT_ALUMNOS][3]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[2]+'%">'+GL_ALUMNOS[GL_CONT_ALUMNOS][4]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[3]+'%">'+nombre_padre+'</td></tr>';
					
					GL_CONT_ALUMNOS++;
				}
				
				
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista").html(html_list);
				
			
			}else{
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista").html("");
			}
			
			$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#campos_modif #bloque-izq").fadeOut(GLOBAL_VEL_FADE);
			$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#campos_modif #bloque-der").fadeOut(GLOBAL_VEL_FADE);
			$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#campos_modif #bloque-inf").fadeOut(GLOBAL_VEL_FADE);
		}
	}
	        
			
	});	
	
}



function fun_get_alumnos_no_dispo(){  

	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Alumno_get_alumnos_no_dispo.php",
        type: "POST",
        data:{},
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
				GL_ALUMNOS_NO_DISPO=new Array();
				GL_CONT_ALUMNOS_NO_DISPO=0;;
				var num_campos=11;  //codigo,nombres,apellido_p,apellido_m,password,id_padre,disponibilidad
				var valores=data.split("{");
				var html_list="";
				var cont=0;
					var padre;
				for(var i=0;valores[i];i+=num_campos){
					
					GL_ALUMNOS_NO_DISPO[GL_CONT_ALUMNOS_NO_DISPO]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4],valores[i+5],valores[i+6],valores[i+7],valores[i+8],parseFloat(valores[i+9]),valores[i+10]);
					padre= fun_get_objeto(GL_PADRES,GL_ALUMNOS_NO_DISPO[GL_CONT_ALUMNOS_NO_DISPO][8],0);
					if(padre){
						nombre_padre=padre[7];
					}else{
						nombre_padre="";
					}
					cont++;
					html_list+='<tr id="fila_'+cont+'" title="Haga click para seleccionar fila" ondblclick="" onclick="fun_resalta_fila_tabla('+"'fila_"+cont+"','"+AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#lista .lista');tomar_datos_modif_alumno_no_dispo();"+'">'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[0]+'%">'+GL_ALUMNOS_NO_DISPO[GL_CONT_ALUMNOS_NO_DISPO][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[1]+'%">'+GL_ALUMNOS_NO_DISPO[GL_CONT_ALUMNOS_NO_DISPO][1]+" "+GL_ALUMNOS_NO_DISPO[GL_CONT_ALUMNOS_NO_DISPO][2]+" "+GL_ALUMNOS_NO_DISPO[GL_CONT_ALUMNOS_NO_DISPO][3]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[2]+'%">'+GL_ALUMNOS_NO_DISPO[GL_CONT_ALUMNOS_NO_DISPO][7]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[3]+'%">'+nombre_padre+'</td></tr>';
					
					GL_CONT_ALUMNOS_NO_DISPO++;
				}
				
			
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#lista .lista").html(html_list);
				
			
			}else{
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#lista .lista").html("");
			}
			
		
			$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#campos_modif #bloque-izq").fadeOut(GLOBAL_VEL_FADE);
			$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#campos_modif #bloque-der").fadeOut(GLOBAL_VEL_FADE);
			$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#campos_modif #bloque-inf").fadeOut(GLOBAL_VEL_FADE);
		}
	}
	        
			
	});	
	
}





function fun_insertar_profesor(dni,nombres,apellido_p,apellido_m,usuario,password){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Profesor_Insertar.php",
        type: "POST",
        data:{dni:dni,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),usuario:usuario,password:password},
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
				fun_aviso_popup("Ya existe un profesor con el mismo DNI.<br>Cambie el DNI por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
				if(data=="existe user"){
				fun_aviso_popup("Ya existe un profesor con el mismo usuario.<br>Cambie el nombre de usuario por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
				}else{
				
				fun_aviso_popup("Los datos del profesor '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
				fun_get_profesores();
				}
			}
		}
	}
	        
			
	});	
	
}




function fun_eliminar_profesor(codigo){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Profesor_Eliminar.php",
        type: "POST",
        data:{codigo:codigo},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
				var profesor=fun_get_objeto(GL_PROFESORES,codigo,0);
				fun_aviso_popup("Los datos del profesor<br>'"+fun_tratamiento_tildes(profesor[1])+" "+fun_tratamiento_tildes(profesor[2])+" "+fun_tratamiento_tildes(profesor[3])+"'<br>fueron eliminados con &eacute;xito.",GL_TTL_ELIMINA_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
				
				
		fun_get_profesores();
		}
	}
	        
			
	});	
	
}



function fun_modificar_profesor(dni_anterior,dni,nombres,apellido_p,apellido_m,usuario,password,disponible){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Profesor_Modificar.php",
        type: "POST",
        data:{dni_anterior:dni_anterior,dni:dni,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),usuario:usuario,password:password,disponible:disponible},
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
				fun_aviso_popup("Ya existe un profesor con el mismo DNI.<br>Cambie el DNI por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
				if(data=="existe user"){
				fun_aviso_popup("Ya existe un profesor con el mismo usuario.<br>Cambie el nombre de usuario por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
				}else{
				
				fun_aviso_popup("Los datos del profesor '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
				fun_get_profesores();
				}
			}
		}
	}
	        
			
	});	
	
}


function fun_get_profesores(){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Profesor_get_profesores.php",
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
				GL_PROFESORES=new Array();
				GL_CONT_PROFESORES=0;
				
				
				var num_campos=7;  //dni,nombres,apellido_p,apellido_m,usuario,password,disponibilidad
				var valores=data.split("{");
				
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_PROFESORES[GL_CONT_PROFESORES]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4],valores[i+5],parseFloat(valores[i+6]),valores[i+1]+" "+valores[i+2]+" "+valores[i+3]);
					
					GL_CONT_PROFESORES++;
				}
				refrescar_tabla_profesores();
				
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#campos_modif #bloque-izq").fadeOut(GLOBAL_VEL_FADE);
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#campos_modif #bloque-der").fadeOut(GLOBAL_VEL_FADE);
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#campos_modif #bloque-inf").fadeOut(GLOBAL_VEL_FADE);
			
			}
			
		}
	}
	        
			
	});	
	
}

function refrescar_tabla_profesores(){
	var html_list="";
				
				var cont=0;
				for(var i=0;i<GL_CONT_PROFESORES;i++){
					cont++;
					html_list+='<tr id="fila_'+cont+'" title="Haga click para seleccionar fila" ondblclick="" onclick="fun_resalta_fila_tabla('+"'fila_"+cont+"','"+AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista');fun_pintar_deshabilitados('"+AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista');tomar_datos_modif_profesor();"+'">'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[0]+'%">'+GL_PROFESORES[i][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[1]+'%">'+GL_PROFESORES[i][1]+" "+GL_PROFESORES[i][2]+" "+GL_PROFESORES[i][3]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[2]+'%">'+GL_PROFESORES[i][4]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[3]+'%">'+GL_PROFESORES[i][5]+'</td>'+
							'<td style="display:none;">'+GL_PROFESORES[i][6]+'</td></tr>';;
					
				}
				
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista").html(html_list);
				
				fun_pintar_deshabilitados(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista");
}


function fun_insertar_padre(dni,nombres,apellido_p,apellido_m,usuario,password){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Padre_Insertar.php",
        type: "POST",
        data:{dni:dni,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),usuario:usuario,password:password},
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
				fun_aviso_popup("Ya existe un padre con el mismo DNI.<br>Cambie el DNI por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
				
				if(data=="existe user"){
				fun_aviso_popup("Ya existe un padre con el mismo usuario.<br>Cambie el nombre de usuario por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
				}else{
					
			fun_aviso_popup("Los datos del Padre '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
				fun_get_padres();
				}
			}
		}
	}
	        
			
	});	
	
}


function fun_modificar_padre(dni_anterior,dni,nombres,apellido_p,apellido_m,usuario,password,disponible){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Padre_Modificar.php",
        type: "POST",
        data:{dni_anterior:dni_anterior,dni:dni,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),usuario:usuario,password:password,disponible:disponible},
        async:true,
        beforeSend: function(objeto){
        	
        	fun_mostrar_cargando();
			
        },
        
	success: function(data){
alert(data);
		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data=="existe"){
				fun_aviso_popup("Ya existe un padre con el mismo DNI.<br>Cambie el DNI por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
			}else{
				
				if(data=="existe user"){
				fun_aviso_popup("Ya existe un padre con el mismo usuario.<br>Cambie el nombre de usuario por otro que no haya sido registrado.",GL_TTL_DATO_RPT,30,GLOBAL_MARGEN_TOP_AVISO);	
				}else{
					
				fun_aviso_popup("Los datos del Padre '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
				fun_get_padres();
				}
			}
		}
	}
	        
			
	});	
	
}




function fun_eliminar_padre(codigo){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Padre_Eliminar.php",
        type: "POST",
        data:{codigo:codigo},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
				var padre=fun_get_objeto(GL_PADRES,codigo,0);
				fun_aviso_popup("Los datos del profesor<br>'"+fun_tratamiento_tildes(padre[1])+" "+fun_tratamiento_tildes(padre[2])+" "+fun_tratamiento_tildes(padre[3])+"'<br>fueron eliminados con &eacute;xito.",GL_TTL_ELIMINA_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);	
				
				
		fun_get_padres();
		}
	}
	        
			
	});	
	
}



function fun_get_padres(){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Padre_get_padres.php",
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
				GL_PADRES=new Array();
				GL_CONT_PADRES=0;
				
				
				var num_campos=7;  //dni,nombres,apellido_p,apellido_m,usuario,password,disponibilidad
				var valores=data.split("{");
				var html_list="";
				var cont=0;
				for(var i=0;valores[i];i+=num_campos){
					cont++;
					GL_PADRES[GL_CONT_PADRES]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4],valores[i+5],parseFloat(valores[i+6]),valores[i+1]+" "+valores[i+2]+" "+valores[i+3]);
					
					
					html_list+='<tr id="fila_'+cont+'" title="Haga click para seleccionar fila" ondblclick="" onclick="fun_resalta_fila_tabla('+"'fila_"+cont+"','"+AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista');fun_pintar_deshabilitados('"+AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista');tomar_datos_modif_padre();"+'">'+
							'<td width="'+GL_DIM_TABLA_PADRES[0]+'%">'+GL_PADRES[GL_CONT_PADRES][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PADRES[1]+'%">'+GL_PADRES[GL_CONT_PADRES][1]+" "+GL_PADRES[GL_CONT_PADRES][2]+" "+GL_PADRES[GL_CONT_PADRES][3]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PADRES[2]+'%">'+GL_PADRES[GL_CONT_PADRES][4]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PADRES[3]+'%">'+GL_PADRES[GL_CONT_PADRES][5]+'</td>'+
							'<td style="display:none;">'+GL_PADRES[GL_CONT_PADRES][6]+'</td></tr>';
					
					GL_CONT_PADRES++;
				}
				
				
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista").html(html_list);
				fun_pintar_deshabilitados(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista");CONTENEDOR_ALUMNOS
				
				
				var html_select='<option value="0">Seleccione a un padre</option>';
								
								
				for(var i=0;i<GL_CONT_PADRES;i++){
					
					if(GL_PADRES[i][6]=="1"){
						
						html_option='<option value="'+GL_PADRES[i][0]+'">'+GL_PADRES[i][7]+'</option>';					
						
						html_select+=html_option;
					
					}
				}
				
				
				$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+" #slc_padre").html(html_select);
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+" #slc_padre").html(html_select);
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+" #slc_padre").html(html_select);
				
							
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#campos_modif #bloque-izq").fadeOut(GLOBAL_VEL_FADE);
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#campos_modif #bloque-der").fadeOut(GLOBAL_VEL_FADE);
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#campos_modif #bloque-inf").fadeOut(GLOBAL_VEL_FADE);
	
			}
			
		}
	}
	        
			
	});	
	
}



function get_secciones(nivel,grado,div_que_llama,div_contenedor,carga_auxiliar,valor_auxiliar){ //el div que llama es aquel que debe poerse en disable mientras se hace la consulta, //carga auxliar abrira un if para que se haga una carga que dependa de la carga de secciones
	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/get_secciones.php",
        type: "POST",
        data:{nivel:nivel,grado:grado},
        async:true,
        beforeSend: function(objeto){

        	//fun_mostrar_cargando();
			$(div_que_llama).attr("disabled",true);
        },
        
	success: function(data){
			$(div_que_llama).attr("disabled",false);

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data!="no data"){
								
				var valores=data.split("{");
				var html_list="";
				
				for(var i=0;valores[i];i++){
					
					html_list+='<option value="'+valores[i]+'">'+valores[i]+'</option>';
				}
				
				$(div_contenedor).html(html_list);
				
				//alert(carga_auxiliar);
				switch(carga_auxiliar){
					case "carga-alumnos": 
						var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val();
						var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val();
						var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val();
						
						fun_get_alumnos(nivel,grado,seccion);break;
						
					case "selecciona-seccion-alumnos-no dispo": 
						
						$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_seccion_modif").val(valor_auxiliar);
						break;
						
						
					case "cargar-slc-alumnos-asistencias": 
						
						fun_cargar_alumnos_asistencias($(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_nivel").val(),$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_grado").val(),$(AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_seccion").val(),AREA_CURSOS+CONTENEDOR_ASISTENCIAS+"#slc_alumno");
						
						break;
						
						
				}
			
			}else{
				$(div_contenedor).html("");
				switch(carga_auxiliar){
					case "carga-alumnos": 
						
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista").html("");break;
				}
				
			}
			
		}
	}
	        
	});	
	
}


function tomar_datos_modif_alumno(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista");
	
	var alumno=fun_get_objeto(GL_ALUMNOS,codigo,0);
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_habilitado").val(alumno[6]);
	
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#chk_repitencia").val(alumno[7]);
	
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_codigo").val(alumno[0]);

		
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_padre").val(alumno[5]);

	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_nombres").val(fun_invierte_tratamiento_tildes(alumno[1]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_apellido_p").val(fun_invierte_tratamiento_tildes(alumno[2]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_apellido_m").val(fun_invierte_tratamiento_tildes(alumno[3]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_password").val( alumno[4]);
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel_modif").val($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val());
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif").val($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val());
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion_modif").val($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val());
	
		
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#campos_modif #bloque-izq").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#campos_modif #bloque-der").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#campos_modif #bloque-inf").fadeIn(GLOBAL_VEL_FADE);
	
}


function tomar_datos_modif_alumno_no_dispo(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#lista .lista");
	
	var alumno=fun_get_objeto(GL_ALUMNOS_NO_DISPO,codigo,0);

	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_habilitado").val(alumno[9]);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_codigo").val(alumno[0]);
	


	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#chk_repitencia").val(alumno[7]);
	
		
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_padre").val(alumno[8]);

	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_nombres").val(fun_invierte_tratamiento_tildes(alumno[1]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_apellido_p").val(fun_invierte_tratamiento_tildes(alumno[2]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_apellido_m").val(fun_invierte_tratamiento_tildes(alumno[3]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_password").val(alumno[7] );
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_nivel_modif").val(alumno[4]);
	
	var html_grado="";
	switch(alumno[4]){
		
		case "I": html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option>'; break;
		case "P":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>';  break;
		case "S":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>';break;
	}
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_grado_modif").html(html_grado);
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_grado_modif").val(alumno[5]);
	
		/************/
	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_nivel_modif").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_grado_modif").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_nivel_modif",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_seccion_modif","selecciona-seccion-alumnos-no dispo",alumno[6]);
	
		/************/
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#campos_modif #bloque-izq").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#campos_modif #bloque-der").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#campos_modif #bloque-inf").fadeIn(GLOBAL_VEL_FADE);
	
}





function tomar_datos_modif_padre(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista");
	
	var padre=fun_get_objeto(GL_PADRES,codigo,0);
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#slc_habilitado").val(padre[6]);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_codigo").val(padre[0]);

	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_nombres").val(fun_invierte_tratamiento_tildes(padre[1]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_apellido_p").val(fun_invierte_tratamiento_tildes(padre[2]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_apellido_m").val(fun_invierte_tratamiento_tildes(padre[3]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_user").val(padre[4]);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_password").val(padre[5]);
	
	
		
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#campos_modif #bloque-izq").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#campos_modif #bloque-der").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#campos_modif #bloque-inf").fadeIn(GLOBAL_VEL_FADE);
	
}




function tomar_datos_modif_profesor(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista");
	
	var profesor=fun_get_objeto(GL_PROFESORES,codigo,0);
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#slc_habilitado").val(profesor[6]);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_codigo").val(profesor[0]);
		
	
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_nombres").val(fun_invierte_tratamiento_tildes(profesor[1]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_apellido_p").val(fun_invierte_tratamiento_tildes(profesor[2]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_apellido_m").val(fun_invierte_tratamiento_tildes(profesor[3]));
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_user").val(profesor[4]);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_password").val(profesor[5]);
	
	
		
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#campos_modif #bloque-izq").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#campos_modif #bloque-der").fadeIn(GLOBAL_VEL_FADE);
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#campos_modif #bloque-inf").fadeIn(GLOBAL_VEL_FADE);
	
}

