

$(document).ready(function(){


$("#galeria_fotos #flecha_der").click(function(){

	var margin_left=$("#galeria_fotos #contenido-inicial-galeria_fotos").css("margin-left");
	
	var valores=margin_left.split("px");
	margin_left=parseFloat(valores[0]);
	margin_left-=100;
	$("#galeria_fotos #contenido-inicial-galeria_fotos").css("margin-left",margin_left+"px");
	
});


$("#galeria_fotos #flecha_izq").click(function(){
	var margin_left=$("#galeria_fotos #contenido-inicial-galeria_fotos").css("margin-left");
	
	var valores=margin_left.split("px");
	margin_left=parseFloat(valores[0]);
	margin_left+=100;
	$("#galeria_fotos #contenido-inicial-galeria_fotos").css("margin-left",margin_left+"px");
});



$("#galeria_fotos #salir_album_fotos").click(function(){
	
	$("#galeria_fotos").fadeOut(GLOBAL_VEL_FADE);
	$("#div_back").fadeOut(GLOBAL_VEL_FADE);
	
	$("#catalogo #contenido #sub_menu_inferior .opcion").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
	
	
});



});
