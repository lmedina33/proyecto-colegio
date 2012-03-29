


$(document).ready(function(){
 

	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////


$("#cuerpo-pagina #contenido-pagina #nueva_observacion #btn_aceptar").click(function(){
	var nueva_entrada=$("#cuerpo-pagina #contenido-pagina #nueva_observacion #txt_nueva_entrada").val();
	var codigo_curso=$("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val();
	var cod_alumno=$("#cuerpo-pagina #contenido-pagina #elegir_alumno #slc_alumno").val();
	
	if(fun_esblanco(nueva_entrada)){
		fun_aviso_popup("No ha escrito observaci&oacute;n alguna.<br>Vuelva a intentarlo.",GLOBAL_TTL_ACN_INC,28,GLOBAL_MARGEN_TOP_AVISO);
	}else{
		
		if(cod_alumno=="0"){
			fun_aviso_popup("Debe elegir a un alumno de la lista superior.","Alumno no elegido",32,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			
			fun_insertar_nueva_observacion(codigo_curso,cod_alumno,nueva_entrada);
		}
	}
});

});


function click_opcion_curso(id){
	
	$("#cuerpo-pagina #menu_vertical .opcion").attr("title","Click para seleccionar");
//	$("#menu_vertical .submenu .subopcion").css("background","red");
	
	
	$("#"+id).attr("title","Seleccionado");
	
	
	$("#cuerpo-pagina #contenido-opciones #opcion-notas").click();
	
	
	var curso=fun_get_objeto(GL_ARRAY_CURSOS,id,0);
	
	//alert(curso);
	
		
	$("#cuerpo-pagina #contenido-pagina #profesor").html("Profesor a cargo del curso: "+curso[2]+" "+curso[3]+" "+curso[4]+".");
	$("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val(id);
	
	fun_cargar_alumnos_curso(id);
	
}