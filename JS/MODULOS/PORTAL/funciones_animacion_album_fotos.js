

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



$("#marco_foto_mostrada #boton_cerrar").click(function(){
	
	$("#marco_foto_mostrada").fadeOut(GLOBAL_VEL_FADE);	
	$("#protector_marco_foto").fadeOut(GLOBAL_VEL_FADE);	
	
});



});


function click_minifoto_muestra(background){

	var margen_foto_marco=20;

	var values=background.split("IMAGENES");


	$("#marco_foto_mostrada").fadeIn(GLOBAL_VEL_FADE);
	
	
	$("#marco_foto_mostrada img").attr("src","../IMAGENES"+values[1].substring(0,values[1].length-1));
	
	$("#marco_foto_mostrada img").removeAttr("width");
	$("#marco_foto_mostrada img").removeAttr("height");
	
	var width_real_imagen=$("#marco_foto_mostrada img").width();
	var height_real_imagen=$("#marco_foto_mostrada img").height();
	
	//////////////////////////////Le damos al marco el valor que le corresponde en su ancho y alto
	
	var ancho_pantalla=$("body").css("width");
	var alto_pantalla=$("body").css("height");
	

	
	if(parseFloat(ancho_pantalla)<=(parseFloat(width_real_imagen)+margen_foto_marco*2)){
	/*	alert("mas ancho");
		alert(ancho_pantalla);*/
		width_real_imagen=parseFloat(ancho_pantalla)-60;
		$("#marco_foto_mostrada img").attr("width",width_real_imagen+"px");
		
		height_real_imagen=$("#marco_foto_mostrada img").height();
	}
	
	if(parseFloat(alto_pantalla)<=(parseFloat(height_real_imagen)+margen_foto_marco*2)){
	/*	alert("mas alto");
		alert(alto_pantalla);*/
		height_real_imagen=parseFloat(alto_pantalla)-60;
		
		$("#marco_foto_mostrada img").attr("height",height_real_imagen+"px");
		
		width_real_imagen=$("#marco_foto_mostrada img").width();
	}	
	
	
	$("#marco_foto_mostrada ").css("width",(parseFloat(width_real_imagen)+margen_foto_marco*2)+"px");
	$("#marco_foto_mostrada ").css("height",(parseFloat(height_real_imagen)+margen_foto_marco*2)+"px");
	
	
	var margen_left=(parseFloat(ancho_pantalla)-(parseFloat(width_real_imagen)+margen_foto_marco*2))/2;
	var margen_top=(parseFloat(alto_pantalla)-(parseFloat(height_real_imagen)+margen_foto_marco*2))/2;
		
	
	$("#marco_foto_mostrada ").css("margin-left",margen_left+"px");
	$("#marco_foto_mostrada ").css("margin-top",margen_top+"px");
		
	$("#marco_foto_mostrada").fadeIn(GLOBAL_VEL_FADE);	
	$("#protector_marco_foto").fadeIn(GLOBAL_VEL_FADE);	
	

	
}