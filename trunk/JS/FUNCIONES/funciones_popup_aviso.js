//////////////////////////SE DEBE TENER IMPORTADO TAMBIEN EL ARCHIVO FUNCIONES_VARIABLES_GLOBALES.JS

function fun_aviso_popup(arg_texto,arg_titulo,arg_ancho,arg_top){


	$("#popup_aviso #texto_aviso").html(arg_texto);
	$("#popup_aviso #titulo_aviso").html(arg_titulo);
	$("#popup_aviso").css("min-width",arg_ancho+"%");
	$("#popup_aviso").css("left",((100-arg_ancho)/2)+"%");
	$("#popup_aviso").css("top",arg_top+"%");
	
	
	$("#div_back").fadeIn(GLOBAL_VEL_FADE);
	$("#popup_aviso").fadeIn(GLOBAL_VEL_FADE);
	
}

function fun_cerrar_aviso(){
	$("#div_back").fadeOut(GLOBAL_VEL_FADE);
	$("#popup_aviso").fadeOut(GLOBAL_VEL_FADE);
}



function fun_aviso_popup2(arg_texto,arg_titulo,arg_ancho,arg_top){

	$("#popup_aviso2 #texto_aviso").html(arg_texto);
	$("#popup_aviso2 #titulo_aviso").html(arg_titulo);
	$("#popup_aviso2").css("width",arg_ancho+"%");
	$("#popup_aviso2").css("left",((100-arg_ancho)/2)+"%");
	$("#popup_aviso2").css("top",arg_top+"%");
	
	
	$("#div_back2").fadeIn(GLOBAL_VEL_FADE);
	$("#popup_aviso2").fadeIn(GLOBAL_VEL_FADE);
	
}

function fun_cerrar_aviso2(){
	$("#div_back2").fadeOut(GLOBAL_VEL_FADE);
	$("#popup_aviso2").fadeOut(GLOBAL_VEL_FADE);
}




function fun_aviso_popup3(arg_texto,arg_titulo,arg_ancho,arg_top){

	$("#popup_aviso3 #texto_aviso").html(arg_texto);
	$("#popup_aviso3 #titulo_aviso").html(arg_titulo);
	$("#popup_aviso3").css("width",arg_ancho+"%");
	$("#popup_aviso3").css("left",((100-arg_ancho)/2)+"%");
	$("#popup_aviso3").css("top",arg_top+"%");
	
	
	$("#div_back3").fadeIn(GLOBAL_VEL_FADE);
	$("#popup_aviso3").fadeIn(GLOBAL_VEL_FADE);
	
}

function fun_cerrar_aviso3(){
	$("#div_back3").fadeOut(GLOBAL_VEL_FADE);
	$("#popup_aviso3").fadeOut(GLOBAL_VEL_FADE);
}



