var GLOBAL_CARGAS=0; //es el numero de funciones que se cargan al cargar una página


$(document).ready(function(){

//La siguiente llamada es para hacer la actualizacion de datos cada 10000 microsegundos, el tiempo se puede cambiar
//	setInterval(fun_actualizacion_datos,10000);


$("#catalogo #opciones_vertical #opcion_inicial").click(function(){
	
	/************CON LA SIGUIENTE FUNCIÓN SE HACE UN STAND BY EN TODA LA PÁGINA PARA QUE NO SE PERMITA HACER NINGUNA OTRA FUNCIÓN***********/
	
	fun_stand_by_sistema(800);
	
	///////////////////////////////////////////////////////
	
	$("#catalogo #contenido #cara_1").removeClass("trans_pag_1_izq_der");
	
	$("#catalogo #contenido #cara_1").addClass("trans_pag_1_der_izq");
	
	$("#catalogo #contenido #cara_1").css("left","0px");
	
	$("#catalogo #contenido #cara_1").css("z-index","0");

	$("#catalogo #contenido #cara_1").css("background-color","green");
	
//	$("#catalogo #contenido #cara_1").removeClass("transicion800");
	
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").delay(800).fadeIn(500);
	
	/**********HACEMOS APARECER EL SUBMENU*******/
	
	/********APARECEMOS EL BOTON INICIAL y primaria, del menu izquierdo, pero estarán escondidos*******/
	
	
	$("#catalogo #opciones_vertical_izq").removeClass("trans_opciones_vertical_izq");
	$("#catalogo #opciones_vertical_izq").addClass("trans_opciones_vertical_izq_delay800");
	
	$("#catalogo #opciones_vertical_izq").css("visibility","visible");
	
	////////////////////////////////////////////////////////////////////////////////////////////////////
	$("#catalogo  #contenido #sub_menu_inferior").delay(800).fadeIn(500);
	
	
	///////////////////////////////ANIMACIÓN QUE RETIRA EL MENU VERTICAL PRINCIPAL/////////////////////////////////////
	
	$("#contenedor_menu ").slideUp(500);
	
});


$("#catalogo #opciones_vertical #opcion_primaria").click(function(){
	
//	alert("hora");


	/************CON LA SIGUIENTE FUNCIÓN SE HACE UN STAND BY EN TODA LA PÁGINA PARA QUE NO SE PERMITA HACER NINGUNA OTRA FUNCIÓN***********/
	
	fun_stand_by_sistema(800);
	
	///////////////////////////////////////////////////////
	
	
	///Primero ponemos la cara 1 más abajo ants de empezar a colocar la siguiente cara encima
	
	
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq_delay800");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der_delay800");
	
	if($("#catalogo #contenido #cara_1").css("left")=="550px"){
		$("#catalogo #opciones_vertical #opcion_inicial").click();
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_der_izq_delay800");
		
		
		/*Animacion del boton vertical opcion_inicial  y primaria del lado izquierdo  CON DELAY DE 800*/
		
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq");
		$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq_delay800");
		
		//////////debemos desplazar ambos botones, el de primaria y el de inicial, pero el de primaria aun estará escondido detras del catálogo	
		$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","30px");
		
		
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq_delay800");
		
		$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","60px");
		/*********fin de la animación*******/
		
		
	}else{
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_der_izq");
		
		
		/*Animacion del boton vertical opcion_inicial  y primaria del lado izquierdo*/
		
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq");
		
		//////////debemos desplazar ambos botones, el de primaria y el de inicial, pero el de primaria aun estará escondido detras del catálogo	
		$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","30px");
		
		
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","60px");
		/*********fin de la animación*******/
		
	}
	
	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").fadeOut(500);
	
	/////////////////////////////
	
	
	$("#catalogo #contenido #cara_2").css("z-index","10");
	
	$("#catalogo #opciones_vertical #opcion_inicial").css("visibility","hidden");
	$("#catalogo #opciones_vertical ").css("background-color","#44F");
	
	
	///////////////////////////////////////////////
	
	
	$("#catalogo #contenido #cara_2").css("left","0px");
	
	$("#catalogo #contenido #cara_2").css("background-color","blue");
	
	//$("#catalogo #contenido #cara_2").removeClass("transicion800");
	
});


$("#catalogo #opciones_vertical #opcion_secundaria").click(function(){
	
	/************CON LA SIGUIENTE FUNCIÓN SE HACE UN STAND BY EN TODA LA PÁGINA PARA QUE NO SE PERMITA HACER NINGUNA OTRA FUNCIÓN***********/
	
	fun_stand_by_sistema(800);
	
	///////////////////////////////////////////////////////
	
	
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq_delay800");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq_delay1600");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_izq_der");
	
	
	
	if($("#catalogo #contenido #cara_1").css("left")=="550px"){
	//	$("#catalogo #opciones_vertical #opcion_inicial").click();
		$("#catalogo #opciones_vertical #opcion_primaria").click();
		$("#catalogo #contenido #cara_3").addClass("trans_pag_3_der_izq_delay1600");
		
			/*Animacion del boton vertical opcion_inicial y primaria del lado izquierdo*/
	
	
	//////////debemos desplazar ambos botones, el de primaria y el de inicial, pero el de primaria aun estará escondido detras del catálogo	
	
	
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq");
		
		$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq_delay800");
		
		$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","0px");
	
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq");
		
		$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","30px");
		/*********fin de la animación*******/
	
	
	}else{
		if($("#catalogo #contenido #cara_2").css("left")=="550px"){
			$("#catalogo #opciones_vertical #opcion_primaria").click();
			$("#catalogo #contenido #cara_3").addClass("trans_pag_3_der_izq_delay800");
			
			
		//////////debemos desplazar ambos botones, el de primaria y el de inicial, pero el de primaria aun estará escondido detras del catálogo	
		
		
			$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq_delay800");
			$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq");
			
			$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq_delay800");
			
			$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","0px");
		
			$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq_delay800");
			$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq");
			
			$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq_delay800");
			$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","30px");
			/*********fin de la animación*******/
			
		}else{
			$("#catalogo #contenido #cara_3").addClass("trans_pag_3_der_izq");
			
			
			//////////debemos desplazar ambos botones, el de primaria y el de inicial, pero el de primaria aun estará escondido detras del catálogo	
			
			
				$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq_delay800");
				$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq");
				
				$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq");
				
				$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","0px");
			
				$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq_delay800");
				$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq");
				
				$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq");
				$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","30px");
				/*********fin de la animación*******/
		}
			
	}
		

	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").fadeOut(500);
	
	/////////////////////////////	
	

	$("#catalogo #contenido #cara_3").css("z-index","20");
	
	
	$("#catalogo #opciones_vertical ").css("background-color","#FAA");
		
	$("#catalogo #opciones_vertical #opcion_primaria").css("visibility","hidden");
	
	/*
	$("#catalogo #opciones_vertical_izq #opcion_inicial").css("float","left");
	
	$("#catalogo #opciones_vertical_izq #opcion_primaria").css("float","left");
	$("#catalogo #opciones_vertical_izq #opcion_primaria").css("display","block");
	*/
	
	$("#catalogo #contenido #cara_3").css("left","0px");
								
	$("#catalogo #contenido #cara_3").css("background-color","orange");


});


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


$("#catalogo #opciones_vertical_izq #opcion_inicial").click(function(){
	

	/************CON LA SIGUIENTE FUNCIÓN SE HACE UN STAND BY EN TODA LA PÁGINA PARA QUE NO SE PERMITA HACER NINGUNA OTRA FUNCIÓN***********/
	
	fun_stand_by_sistema(800);
	
	///////////////////////////////////////////////////////
	
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq_delay800");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der_delay800");
	
	
	if($("#catalogo #contenido #cara_3").css("left")=="0px"){
		$("#catalogo #opciones_vertical_izq #opcion_primaria").click();
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_izq_der_delay800");
		
		
		
	//////////////////////////////HACEMOS LA ANIMACIÓN PARA CORRER LAS OPCIONES///////////////////////////////////
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq");
			
		$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq_delay800");
		
		$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","60px");
	
	
	
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq");
				
		$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","90px");
		
		
	}else{
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_izq_der");
		
		
	//////////////////////////////HACEMOS LA ANIMACIÓN PARA CORRER LAS OPCIONES///////////////////////////////////
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq");
			
		$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq");
		
		$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","60px");
	
	
	
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq");
				
		$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","90px");
		
	}
	

	//////////////MOSTRAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","block");
	
	/////////////////////////////
	
	$("#catalogo #contenido #cara_2").css("z-index","20");
		
	$("#catalogo #opciones_vertical #opcion_inicial").css("visibility","visible");
		
	///////////////////////////////////////////////
	
		
	$("#catalogo #contenido #cara_2").css("left","550px");
	
	$("#catalogo #contenido #cara_2").css("background-color","green");
	
	
	
});


$("#catalogo #opciones_vertical_izq #opcion_primaria").click(function(){
	

	/************CON LA SIGUIENTE FUNCIÓN SE HACE UN STAND BY EN TODA LA PÁGINA PARA QUE NO SE PERMITA HACER NINGUNA OTRA FUNCIÓN***********/
	
	fun_stand_by_sistema(800);
	
	///////////////////////////////////////////////////////
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq_delay800");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq_delay1600");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_izq_der");
	
	
	$("#catalogo #contenido #cara_3").addClass("trans_pag_3_izq_der");
	
	$("#catalogo #contenido #cara_3").css("z-index","10");
	
	$("#catalogo #opciones_vertical #opcion_primaria").css("visibility","visible");
	
	$("#catalogo #opciones_vertical_izq #opcion_inicial").css("float","right");
	$("#catalogo #opciones_vertical_izq #opcion_primaria").css("float","right");
	
	$("#catalogo #opciones_vertical ").css("background-color","#44F");

	
	
	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","none");
	
	/////////////////////////////
	
								
	$("#catalogo #contenido #cara_3").css("left","550px");
							
	$("#catalogo #contenido #cara_3").css("background-color","blue");
	
	
	
	//////////////////////////////HACEMOS LA ANIMACIÓN PARA CORRER LAS OPCIONES DE LA IZQUIERDA///////////////////////////////////
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_inicial").removeClass("trans_opcion_inicial_submenu_izq");
			
		$("#catalogo #opciones_vertical_izq #opcion_inicial").addClass("trans_opcion_inicial_submenu_izq");
		
		$("#catalogo #opciones_vertical_izq #opcion_inicial").css("left","30px");
	
	
	
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq_delay800");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").removeClass("trans_opcion_primaria_submenu_izq");
				
		$("#catalogo #opciones_vertical_izq #opcion_primaria").addClass("trans_opcion_primaria_submenu_izq");
		$("#catalogo #opciones_vertical_izq #opcion_primaria").css("left","60px");
});




$("#catalogo #opciones_vertical_izq #cerrar_catalogo").click(function(){

	/************CON LA SIGUIENTE FUNCIÓN SE HACE UN STAND BY EN TODA LA PÁGINA PARA QUE NO SE PERMITA HACER NINGUNA OTRA FUNCIÓN***********/
	
	fun_stand_by_sistema(800);
	
	///////////////////////////////////////////////////////
	
			
	$("#catalogo #contenido #cara_1").removeClass("trans_pag_1_der_izq");

	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").fadeOut(500);
	
	/////////////////////////////
	$("#catalogo #contenido #cara_1").addClass("trans_pag_1_izq_der");
	
	$("#catalogo #contenido #cara_1").css("z-index","30");
	
	$("#catalogo #contenido #cara_1").css("left","550px");
	
	$("#catalogo #contenido #cara_1").css("background-color","orange");
	
	
	$("#catalogo #opciones_vertical_izq").removeClass("trans_opciones_vertical_izq_delay800");
	$("#catalogo #opciones_vertical_izq").addClass("trans_opciones_vertical_izq");
	
	$("#catalogo #opciones_vertical_izq").css("visibility","hidden");
		
	/**********HACEMOS DESAPARECER EL SUBMENU*******/
		
	$("#catalogo  #contenido #sub_menu_inferior").fadeOut(500);
	
	
	///////////////////////////////ANIMACIÓN QUE ABRE EL MENU VERTICAL PRINCIPAL/////////////////////////////////////
	
	$("#contenedor_menu ").delay(600).slideDown(500);
});

//////////////////////////////CONTROL DE LAS OPCIONES INFERIORES///////////////////////////////////////////////////


$("#catalogo #contenido #sub_menu_inferior .opcion").mouseover(function(){
	
	
	$(this).addClass("trans_opcion_submenu_inferior");
	
	$(this).css("margin-top","0px");
	$(this).css("background-color","white");
	
});


$("#catalogo #contenido #sub_menu_inferior .opcion").mouseout(function(){
	
	if($(this).attr("title")!="Seleccionada"){
	
		$(this).addClass("trans_opcion_submenu_inferior");
		
		$(this).css("margin-top","10px");
		$(this).css("background-color","red");	
	}
	
});


$("#catalogo #contenido #sub_menu_inferior .opcion").click(function(){
	
	$("#catalogo #contenido #sub_menu_inferior .opcion").attr("title","Click para seleccionar");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("margin-top","10px");
	$("#catalogo #contenido #sub_menu_inferior .opcion").css("background-color","red");	
		
	$(this).attr("title","Seleccionada");
	
	$(this).css("margin-top","0px");
	$(this).css("background-color","white");
	
});


});



function fun_ini_nombre(){
	 
	
	$.ajax({
        url: "POST/algun archivo.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        
			
        },
        
	success: function(data_nombre){
			
		
		if(data_nombre=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_nombre=="no_data"){
				//accion
			}else{
				//accion
			}
		
		
			if(GLOBAL_PAGINA_CARGADA==GLOBAL_CARGAS){
				$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
				$("#cargando").fadeOut(GLOBAL_VEL_FADE);
			}
			
		}
}
        
		
});	
}