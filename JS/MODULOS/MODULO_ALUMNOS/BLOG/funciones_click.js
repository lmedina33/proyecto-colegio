


$(document).ready(function(){
 

	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

$("#cuerpo-pagina #contenido-pagina #nueva_entrada #btn_aceptar").click(function(){
	var nueva_entrada=$("#cuerpo-pagina #contenido-pagina #nueva_entrada #txt_nueva_entrada").val();
	var codigo_curso=$("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val();
	
	if(fun_esblanco(nueva_entrada)){
		fun_aviso_popup("No ha escrito entrada alguna.<br>Vuelva a intentarlo.",GLOBAL_TTL_ACN_INC,28,GLOBAL_MARGEN_TOP_AVISO);
	}else{
		
		fun_insertar_nueva_entrada(codigo_curso,nueva_entrada);
	}
});




$("#cerrar_sesion").click(function(){
	$.ajax({
			url: "../../LOGIN/POST/MODULO_ALUMNO/close_alumno.php",
			success: function(data){
				document.location = "../../PORTAL/index.php";
			}
	
	});
});



$("#volver_atras").click(function(){
	parent.document.location="../index.php";
});


});


function click_opcion_curso(id){
	
	$("#cuerpo-pagina #menu_vertical .opcion").attr("title","Click para seleccionar");
//	$("#menu_vertical .submenu .subopcion").css("background","red");
	
	
	
	$("#"+id).attr("title","Seleccionado");
	
	
	$("#cuerpo-pagina #contenido-opciones #opcion-notas").click();
	
	//Debemos darle la forma correcta al id por eso usamos  fun_tratamiento_tildes  y  fun_guiones_por_espacios
	var curso=fun_get_objeto(GL_ARRAY_CURSOS,fun_tratamiento_tildes(fun_guiones_por_espacios(id)),0);
	
	//alert(curso);
	
		
	
	$("#cuerpo-pagina #contenido-pagina #profesor").html("Profesor a cargo del curso: "+curso[2]+" "+curso[3]+" "+curso[4]+".");
	$("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val(fun_tratamiento_tildes(fun_guiones_por_espacios(id)));
	//en este div oculto tambien debemos tratar el id para que su valor pueda ser usado en las queris, recordemos que los nmombres están en la base dedatos con espacios y simbolos &
	
	fun_cargar_blog(id);
	
}