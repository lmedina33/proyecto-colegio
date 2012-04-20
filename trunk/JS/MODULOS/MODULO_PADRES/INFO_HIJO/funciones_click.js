


$(document).ready(function(){
 

	//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////



$("#cuerpo-pagina #menu_vertical .opcion").click(function(){
	
		
	$("#cuerpo-pagina #menu_vertical .opcion").attr("title","Click para seleccionar");
//	$("#menu_vertical .submenu .subopcion").css("background","red");
	
	
	$(this).attr("title","Seleccionado");
	
	
	$("#cuerpo-pagina #contenido-opciones #opcion-notas").click();
});


$("#cuerpo-pagina #contenido-opciones .opcion").click(function(){
	
		
	$("#cuerpo-pagina #contenido-opciones .opcion").attr("title","Click para seleccionar");
//	$("#menu_vertical .submenu .subopcion").css("background","red");
	
	var id=$(this).attr("id");
	
	var partes=id.split("-");

	abrir_contenido(partes[1],"principal");
	
	if(partes[1]=="observaciones"){
		fun_cargar_observaciones($("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val(),$("#codigo_alumno").val());
	}
	
	$(this).attr("title","Seleccionado");
});


$("#cerrar_sesion").click(function(){
	$.ajax({
			url: "../../LOGIN/POST/MODULO_PADRE/close_padre.php",
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
	
	
	var curso=fun_get_objeto(GL_ARRAY_CURSOS,fun_tratamiento_tildes(fun_guiones_por_espacios(id)),0);
	
	//alert(curso);
	
		
	$("#cuerpo-pagina #contenido-pagina #profesor").html("Profesor a cargo del curso: "+curso[2]+" "+curso[3]+" "+curso[4]+".");

	$("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val(fun_tratamiento_tildes(fun_guiones_por_espacios(id)));
	
	refresca_tabla_cursos_notas();
	//fun_cargar_blog(id);
	
}