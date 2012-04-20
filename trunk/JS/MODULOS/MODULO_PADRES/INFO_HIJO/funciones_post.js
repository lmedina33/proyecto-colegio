var GL_ARRAY_CURSOS=new Array();
var GL_CONT_CURSOS=0;


var GL_CURSOS_NOTAS=new Array();
var GL_CONT_CURSOS_NOTAS=0;


var GL_NOTAS=new Array();
var GL_CONT_NOTAS=0;


var GL_CURSOS_CATEGORIAS_NOTAS=new Array();
var GL_CONT_CURSOS_CATEGORIAS_NOTAS=0;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function fun_cargar_observaciones(id_curso,codigo_alumno){  //esta función es para hacer alguna llamada con ajax mediante post

	
	
	$.ajax({
        url: "../../POST/MODULO_PADRES/Consulta_observacion.php",
        type: "POST",
        data:{codigo_curso:id_curso,codigo_alumno:codigo_alumno},
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




function fun_inicializa_cursos(codigo_alumno){
	 
	
	$.ajax({
        url: "../../POST/MODULO_PADRES/AlumnoConsultaCursos.php",
        type: "POST",
        data:{codigo_alumno:codigo_alumno},
        async:true,
        beforeSend: function(objeto){
        	
        
			
        },
        
	success: function(data_cursos){
		
		if(data_cursos=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_cursos!="no data"){
				
				var valores=data_cursos.split("{");
				var num_campos=5;
				
				var html_cursos='<div id="titulo_menu">Mis Cursos</div>';
				
				GL_ARRAY_CURSOS=new Array();
				GL_CONT_CURSOS=0;
				for (var i=0;valores[i];i+=num_campos){
					
					GL_ARRAY_CURSOS[GL_CONT_CURSOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4]);
					GL_CONT_CURSOS++;
					
					//Cuando vienen los nombres, debemos cambiar espacios por guiones para poder ponerlos como ID
					html_cursos+='<div id="'+fun_espacios_por_guiones(valores[i])+'" class="opcion" onclick="click_opcion_curso('+"'"+fun_espacios_por_guiones(valores[i])+"'"+')"><div class="texto_pestana" >'+valores[i+1]+'</div></div>';
										
				}
				
				$("#cuerpo-pagina #menu_vertical").html(html_cursos);
			
					//en esta llamada debemos cambiar los espacios por guiones y cambiar los simbolos & por tildes, ya que en los id de los div automáticamente cambia a tildes cuando se insertan los nombres
				click_opcion_curso(fun_espacios_por_guiones(fun_invierte_tratamiento_tildes(valores[0])));
				
			}
		
			
		}
}
        
		
});	
}




function fun_get_cursos_notas(codigo_alumno){

	
	$.ajax({
        url: "../../POST/MODULO_PADRES/Obtener_grado_curso.php",
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
			//	alert(data);
				
				
				var grupo_valores=data.split("}");
				
				GL_SECCIONES=new Array();
				GL_CONT_SECCIONES=0;;
				
				
				var html_secciones="";
				
				var valores=grupo_valores[0].split("{");
				var num_campos=1;
				
				for(var i=0;valores[i];i+=num_campos){
					
					GL_SECCIONES[GL_CONT_SECCIONES]=valores[i];
					
					
					//html_secciones+='<option value="'+valores[i]+'">'+valores[i]+'</option>';
					
					GL_CONT_SECCIONES++;
				}
				
				//$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_seccion ").html(html_secciones);
				
				
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
						
					}
					
					
					GL_CONT_CURSOS_NOTAS++;
				}
				
				//Agregamos la ultima cuenta de categorias
					
				GL_CURSOS_CATEGORIAS_NOTAS[GL_CONT_CURSOS_CATEGORIAS_NOTAS]=new Array(categoria,contador_repet_cat/GL_CONT_SECCIONES);//SE debe dividir entre el numero de secciones ya que est contando todas las repeticiones del nombre o categoria, y estas se repiten por seccion
				GL_CONT_CURSOS_CATEGORIAS_NOTAS++;
			
				
				fun_get_notas(codigo_alumno);
			//$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_curso ").html(html_slc_cursos);
			
			
				//fun_cargar_alumnos_curso(nivel+grado+$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_curso ").val()+$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_seccion ").val());
			
			}else{
				GL_SECCIONES=new Array();
				GL_CONT_SECCIONES=0;;
				GL_CURSOS_NOTAS=new Array();
				GL_CONT_CURSOS_NOTAS=0;
				
				GL_NOTAS=new Array();
				GL_CONT_NOTAS=0;
				refresca_tabla_cursos_notas();
				
				/*$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_curso ").html("");
				$(AREA_CURSOS+CONTENEDOR_NOTAS+"#slc_seccion ").html("");*/
				
			
			}
			
		}
	}
	        
			
	});	
	
}



function fun_get_notas(codigo_alumno){  

	
	$.ajax({
        url: "../../POST/MODULO_PADRES/Alumno_Consultar_notas.php",
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






function refresca_tabla_cursos_notas(){ //refresca la tabla de cursos pintando las celdas del curso elegido correspondiente
	
	var html_lista_cursos="";
			
		//		var html_slc_cursos="";
				
							
			
				var codigo_curso=$("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val();
				
				
				codigo_curso=fun_tratamiento_tildes(codigo_curso);
				var curso_select=codigo_curso.substring(2,codigo_curso.length-1);
				var nivel_select=codigo_curso.substring(0,1);
				var grado_select=codigo_curso.substring(1,2);
				var seccion_select=codigo_curso.substring(codigo_curso.length-1,codigo_curso.length);
				
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
							
						//	alert();
							
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
							
							//REVISAR NIVEL
							nombre_cate=nombre_categoria_cursos("P",GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][0]);
							
							if(fun_tratamiento_tildes(curso_select)==GL_CURSOS_NOTAS[i][0]){
								
								
							html_lista_cursos+='<tr>'+
								'<td rowspan="'+GL_CURSOS_CATEGORIAS_NOTAS[contador_categorias][1]+'" class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[0]+'%">'+nombre_cate+'</td>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';
								
							
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
								
						//	switch(bimestre_select){*/
								
								html_lista_cursos+='<tr>'+
								'<td  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro"  style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64; width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
								'<td  class="alinear_centro" style="background:#FFEC64;" width="'+GL_DIM_TABLA_NOTAS[7]+'%">'+'</td></tr>';
								
							}else{
								html_lista_cursos+='<tr>'+
								'<td width="'+GL_DIM_TABLA_NOTAS[1]+'%">'+GL_CURSOS_NOTAS[i][0]+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[2]+'%">'+nota1+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[3]+'%">'+nota2+'</td>'+
								'<td  class="alinear_centro"  width="'+GL_DIM_TABLA_NOTAS[4]+'%">'+nota3+'</td>'+
								'<td  class="alinear_centro" width="'+GL_DIM_TABLA_NOTAS[5]+'%">'+nota4+'</td>'+
								'<td  class="alinear_centro"  width="'+GL_DIM_TABLA_NOTAS[6]+'%">'+'</td>'+
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
	
		
				$("#cuerpo-pagina #contenido-pagina #contenido-notas-principal #lista .lista").html(html_lista_cursos);
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