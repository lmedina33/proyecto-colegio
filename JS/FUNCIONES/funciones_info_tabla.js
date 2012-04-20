
function fun_resalta_fila_tabla(arg_fila_resaltar,arg_tabla){ // los parámetros sirven para especificar la fila que se va a resaltar y de que color se va a resaltar el fondo y la letra. normalmente se usa blue y white para resaltar la fila.

		$(arg_tabla+" tr").css("color","black");
		$(arg_tabla+" td").css("background-color","white");
		$(arg_tabla+" tr").attr("title",'Haga click para seleccionar fila');
		$(arg_tabla+" #"+arg_fila_resaltar+" td").fadeOut(GLOBAL_VEL_FADE/10);	
		$(arg_tabla+" #"+arg_fila_resaltar+" td").css("background-color",GL_COLOR_FONDO_FILA_RESALTADA);	
		
		$(arg_tabla+" #"+arg_fila_resaltar+" td").each(function(){
		if($(this).css("display")!="none"){
			$(this).fadeIn(GLOBAL_VEL_FADE);
		}	
		
		});
			
		$(arg_tabla+" #"+arg_fila_resaltar).css("color",GL_COLOR_LETRA_FILA_RESALTADA);
		$(arg_tabla+" #"+arg_fila_resaltar).attr("title",'Fila seleccionada');
		
		//estado_vencimiento(div);
		
}


function fun_obtener_id_fila_restaltada(arg_tabla){ //esta funcion nos devuelve el valor de la primera celda de la fila resaltada de una tabla. Como se sabe, la primera celda está oculta (hidden) y siempre conserva un id único para cada fila o registro de la tabla. Si no hay una fila resaltada devuelve el valo "nada".
// Los valores de arg_color_fondo y arg_color_fondo_rgb serán los que nos permitan detectar la fila resaltada. la primera es un valor escrito ya sea blue, red, white, etc. y la segunda un valor en rgb  como "rgb(0, 0, 255)". Se usa esa opcion ya que puede que se esté navegando en mozilla y de este modo se soporta su modo de interpretación de código javascript.
//arg_tabla debe conener la ubicacion de la tabla ya sea por medio de varios div, pero debe terminar en table ejemplo: "#div_area #pop_up_x table"
	id="nada";
	$(arg_tabla+" tr").each(function(){
		
		if($(this).children().css("background-color")==GL_COLOR_FONDO_FILA_RESALTADA || $(this).children().css("background-color")==GL_COLOR_RGB_FONDO_FILA_RESALTADA ){
			
			subcadenas=$(this).html().split(">");
			subcadenas2=subcadenas[1].split("<");
			id=subcadenas2[0];
		}
	});
	return id;  //RETORNA COMO STRING
}
