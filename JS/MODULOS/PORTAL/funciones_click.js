


$(document).ready(function(){
 

	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

$("#contenedor_menu #menu_vertical .opcion").click(function(){
	
	var id=$(this).attr("id");
	
	var partes_id=id.split("-");  //hemos separado el ide en 2 partes separadas por el guion medio
	//la parte 0 contiene el contenido y la parte 1 contiende el área
	abrir_contenido(partes_id[1],"cara_1");	  //pasamos los valores a la funcion abrir_contenido para que lo abra
	
	//alert("hola");
});



$("#contenedor_menu #menu_vertical #1-quienes_somos").click(function(){
		
	fun_consultar_quienes_somos("#contenido #cara_1 #contenido-cara_1 #contenido-quienes_somos-cara_1 #quienes_somos");

	
});


$("#contenedor_menu #menu_vertical #2-mision_vision").click(function(){
		
	fun_consultar_mision_vision("#contenido #cara_1 #contenido-cara_1 #contenido-mision_vision-cara_1 #mision_vision");

	
});


//////////////////////////////CATALOGO///////////////////////////////////

$("#catalogo #opciones_vertical #opcion_inicial").click(function(){
	$("#catalogo #sub_menu_inferior #opcion-admision").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
	
	
	
	$(".area").hide();
	$(".area-inicial").fadeIn(GLOBAL_VEL_FADE);
});


$("#catalogo #opciones_vertical #opcion_primaria").click(function(){
	
	$("#catalogo #sub_menu_inferior #opcion-admision").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
	
	
	$(".area").hide();
	$(".area-primaria").fadeIn(GLOBAL_VEL_FADE);
});


$("#catalogo #opciones_vertical #opcion_secundaria").click(function(){

	$("#catalogo #sub_menu_inferior #opcion-admision").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
	$(".area").hide();
	$(".area-secundaria").fadeIn(GLOBAL_VEL_FADE);
});


$("#catalogo #opciones_vertical_izq #opcion_inicial").click(function(){

	$("#catalogo #sub_menu_inferior #opcion-admision").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
	$(".area").hide();
	$(".area-inicial").fadeIn(GLOBAL_VEL_FADE);
});



$("#catalogo #opciones_vertical_izq #opcion_primaria").click(function(){

	$("#catalogo #sub_menu_inferior #opcion-admision").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
	$(".area").hide();
	$(".area-primaria").fadeIn(GLOBAL_VEL_FADE);
	
});

$("#catalogo #opciones_vertical_izq #cerrar_catalogo").click(function(){

	$("#catalogo #sub_menu_inferior #opcion-admision").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
	$(".area").hide();
	$(".area-principal").delay(500).fadeIn(GLOBAL_VEL_FADE);
});


$("#catalogo .opcion_vertical-catalogo").click(function(){

	var area_abierta=$(this).attr("id");
	var id_partes=area_abierta.split("_");
	
	
	$("#contenido-"+id_partes[1]+" #contenido-admisiones-"+id_partes[1]).hide();
	$("#contenido-"+id_partes[1]+" #contenido-actividades-"+id_partes[1]).fadeIn(GLOBAL_VEL_FADE);
});




$("#catalogo #sub_menu_inferior #opcion-admision").click(function(){
	
	var area_abierta;
	$(".area").each(function(){
		
		if($(this).css("display")=="block"){		
			area_abierta=$(this).attr("id");	
		}
		
	});
	
	var id_partes=area_abierta.split("-");

	$("#contenido-"+id_partes[1]+"-2 #contenido-actividades-"+id_partes[1]).hide();
	$("#contenido-"+id_partes[1]+"-2 #contenido-admisiones-"+id_partes[1]).fadeIn(GLOBAL_VEL_FADE);
	
});





$("#catalogo #sub_menu_inferior #opcion-album").click(function(){
	
	var area_abierta;
	$(".area").each(function(){
		
		if($(this).css("display")=="block"){		
			area_abierta=$(this).attr("id");	
		}
		
	});
	
	var id_partes=area_abierta.split("-");

	fun_consultar_galeria(id_partes[1]);
});



//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
