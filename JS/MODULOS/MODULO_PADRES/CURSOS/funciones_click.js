


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
		fun_cargar_observaciones($("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val());
	}
	
	$(this).attr("title","Seleccionado");
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
	//fun_cargar_blog(id);
	
}