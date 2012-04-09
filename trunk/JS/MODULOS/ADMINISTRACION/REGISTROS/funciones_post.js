var GL_ALUMNOS=new Array(); //codigo,nombres,apellido_p,apellido_m,password,id_padre,disponibilidad
var GL_CONT_ALUMNOS=0;

var GL_PADRES=new Array(); //dni,nombres,apellido_p,apellido_m,usuario,password,disponibilidad
var GL_CONT_PADRES=0;

var GL_PROFESORES=new Array(); //dni,nombres,apellido_p,apellido_m,usuario,password,disponibilidad
var GL_CONT_PROFESORES=0;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_insertar_alumno(codigo,nombres,apellido_p,apellido_m,password,nivel,grado,seccion){  

	
	$.ajax({
        url: "../POST/ADMINISTRACION/REGISTROS/Alumno_Insertar.php",
        type: "POST",
        data:{codigo:codigo,nombres:fun_tratamiento_tildes(nombres),apellido_p:fun_tratamiento_tildes(apellido_p),apellido_m:fun_tratamiento_tildes(apellido_m),password:password,nivel:nivel,grado:grado,seccion:seccion},
        async:true,
        beforeSend: function(objeto){

        	fun_mostrar_cargando();

        },
        
	success: function(data){

		fun_quitar_cargando();

		if(data=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			fun_aviso_popup("Los datos del alumno '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
			
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
				var num_campos=7;  //codigo,nombres,apellido_p,apellido_m,password,id_padre,disponibilidad
				var valores=data.split("{");
				var html_list="";
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_ALUMNOS[GL_CONT_ALUMNOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4],valores[i+5],parseFloat(valores[i+6]));
					
					
					html_list+='<tr>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[0]+'%">'+GL_ALUMNOS[GL_CONT_ALUMNOS][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[1]+'%">'+GL_ALUMNOS[GL_CONT_ALUMNOS][1]+" "+GL_ALUMNOS[GL_CONT_ALUMNOS][2]+" "+GL_ALUMNOS[GL_CONT_ALUMNOS][3]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[2]+'%">'+GL_ALUMNOS[GL_CONT_ALUMNOS][4]+'</td>'+
							'<td width="'+GL_DIM_TABLA_ALUMNOS[3]+'%">'+GL_ALUMNOS[GL_CONT_ALUMNOS][5]+'</td></tr>';
					
					GL_CONT_ALUMNOS++;
				}
				
				
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista").html(html_list);
				
			
			}else{
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista").html("");
			}
			
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
			
			fun_aviso_popup("Los datos del profesor '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
			
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
			
			}
			
		}
	}
	        
			
	});	
	
}

function refrescar_tabla_profesores(){
	var html_list="";
				
				for(var i=0;i<GL_CONT_PROFESORES;i++){
					
					html_list+='<tr>'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[0]+'%">'+GL_PROFESORES[i][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[1]+'%">'+GL_PROFESORES[i][1]+" "+GL_PROFESORES[i][2]+" "+GL_PROFESORES[i][3]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[2]+'%">'+GL_PROFESORES[i][4]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PROFESORES[3]+'%">'+GL_PROFESORES[i][5]+'</td></tr>';
					
				}
				
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista").html(html_list);
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
			
			fun_aviso_popup("Los datos del Padre '"+fun_tratamiento_tildes(nombres)+" "+fun_tratamiento_tildes(apellido_p)+" "+fun_tratamiento_tildes(apellido_m)+"' fueron guardados con &eacute;xito.",GL_TTL_REGISTRO_EXITO,30,GLOBAL_MARGEN_TOP_AVISO);
			
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
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_PADRES[GL_CONT_PADRES]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4],valores[i+5],parseFloat(valores[i+6]));
					
					
					html_list+='<tr>'+
							'<td width="'+GL_DIM_TABLA_PADRES[0]+'%">'+GL_PADRES[GL_CONT_PADRES][0]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PADRES[1]+'%">'+GL_PADRES[GL_CONT_PADRES][1]+" "+GL_PADRES[GL_CONT_PADRES][2]+" "+GL_PADRES[GL_CONT_PADRES][3]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PADRES[2]+'%">'+GL_PADRES[GL_CONT_PADRES][4]+'</td>'+
							'<td width="'+GL_DIM_TABLA_PADRES[3]+'%">'+GL_PADRES[GL_CONT_PADRES][5]+'</td></tr>';
					
					GL_CONT_PADRES++;
				}
				
				
				$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista").html(html_list);
				
			
			}
			
		}
	}
	        
			
	});	
	
}



function get_secciones(nivel,grado,div_que_llama,div_contenedor,carga_auxiliar){ //el div que llama es aquel que debe poerse en disable mientras se hace la consulta, //carga auxliar abrira un if para que se haga una carga que dependa de la carga de secciones
	
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
				
				switch(carga_auxiliar){
					case "carga-alumnos": 
						var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val();
						var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val();
						var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val();
						
						fun_get_alumnos(nivel,grado,seccion);break;
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