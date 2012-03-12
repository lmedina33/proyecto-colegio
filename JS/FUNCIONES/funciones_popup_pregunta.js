
function fun_pregunta_popup(arg_texto,arg_titulo,arg_accion,arg_ancho,arg_top){
	
	$("#popup_pregunta #texto_aviso").html(arg_texto);
	$("#popup_pregunta #titulo_aviso").html(arg_titulo);
	$("#popup_pregunta").css("width",arg_ancho+"%");
	$("#popup_pregunta").css("left",((100-arg_ancho)/2)+"%");
	$("#popup_pregunta").css("top",arg_top+"%");
	
	$("#popup_pregunta #pregunta_decision_opcion").val(arg_accion);	
	
	$("#div_back_pregunta").fadeIn(GLOBAL_VEL_FADE);
	$("#popup_pregunta").fadeIn(GLOBAL_VEL_FADE);
}

function fun_cerrar_popup_pregunta(){
	$("#div_back_pregunta").fadeOut(GLOBAL_VEL_FADE);
	$("#popup_pregunta").fadeOut(GLOBAL_VEL_FADE);
}




function fun_realiza_accion_popup_pregunta(arg_accion){
	switch(arg_accion){
		
		case "accion1": 
			
		break;
		
		case "accion2": 
			
		break;
		
	}
	
}


function fun_realiza_accion_cerrar_pregunta(arg_accion){
	switch(arg_accion){
		
		case "cerrar popup": 
			fun_cerrar_popup_pregunta();
		break;
		
				
	}
	 
}