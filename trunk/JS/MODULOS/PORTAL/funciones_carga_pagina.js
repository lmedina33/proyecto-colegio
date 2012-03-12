var GLOBAL_CARGAS=0; //es el numero de funciones que se cargan al cargar una página


window.onload = function(){

//La siguiente llamada es para hacer la actualizacion de datos cada 10000 microsegundos, el tiempo se puede cambiar
//	setInterval(fun_actualizacion_datos,10000);


$("#catalogo #opciones_vertical #opcion_inicial").click(function(){
	
	$("#catalogo #contenido #cara_1").addClass("trans_pag_1_der_izq");
	
	$("#catalogo #contenido #cara_1").css("left","0px");
	
	$("#catalogo #contenido #cara_1").css("z-index","0");

	$("#catalogo #contenido #cara_1").css("background-color","green");
	
//	$("#catalogo #contenido #cara_1").removeClass("transicion800");
	
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","block");
	
});


$("#catalogo #opciones_vertical #opcion_primaria").click(function(){
	
//	alert("hora");
	///Primero ponemos la cara 1 más abajo ants de empezar a colocar la siguiente cara encima
	
	
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq_delay800");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der_delay800");
	
	if($("#catalogo #contenido #cara_1").css("left")=="500px"){
		$("#catalogo #opciones_vertical #opcion_inicial").click();
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_der_izq_delay800");
		
	}else{
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_der_izq");
	}
	
	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","none");
	
	/////////////////////////////
	$("#catalogo #contenido #cara_2").css("z-index","10");
	
	$("#catalogo #opciones_vertical #opcion_inicial").css("visibility","hidden");
	$("#catalogo #opciones_vertical ").css("background-color","#44F");
	
	$("#catalogo #opciones_vertical_izq #opcion_inicial").css("display","block");
	
	
	
	///////////////////////////////////////////////
	
	
	$("#catalogo #contenido #cara_2").css("left","0px");
	
	$("#catalogo #contenido #cara_2").css("background-color","blue");
	
	//$("#catalogo #contenido #cara_2").removeClass("transicion800");
	
});


$("#catalogo #opciones_vertical #opcion_secundaria").click(function(){
	//$("#catalogo #opciones_vertical #opcion_primaria").click();
	
	
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq_delay800");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_der_izq_delay1600");
	$("#catalogo #contenido #cara_3").removeClass("trans_pag_3_izq_der");
	
	
	
	if($("#catalogo #contenido #cara_1").css("left")=="500px"){
	//	$("#catalogo #opciones_vertical #opcion_inicial").click();
		$("#catalogo #opciones_vertical #opcion_primaria").click();
		$("#catalogo #contenido #cara_3").addClass("trans_pag_3_der_izq_delay1600");
	}else{
		if($("#catalogo #contenido #cara_2").css("left")=="500px"){
			$("#catalogo #opciones_vertical #opcion_primaria").click();
			$("#catalogo #contenido #cara_3").addClass("trans_pag_3_der_izq_delay800");
		}else{
			$("#catalogo #contenido #cara_3").addClass("trans_pag_3_der_izq");
		}
			
	}
		
		
	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","none");
	
	/////////////////////////////
	
	$("#catalogo #contenido #cara_3").css("z-index","20");
	
	
	$("#catalogo #opciones_vertical ").css("background-color","#FAA");
		
		
	$("#catalogo #opciones_vertical #opcion_primaria").css("visibility","hidden");
	

	
	$("#catalogo #opciones_vertical_izq #opcion_inicial").css("float","left");
	
	$("#catalogo #opciones_vertical_izq #opcion_primaria").css("float","left");
	$("#catalogo #opciones_vertical_izq #opcion_primaria").css("display","block");
	
	
	$("#catalogo #contenido #cara_3").css("left","0px");
								
	$("#catalogo #contenido #cara_3").css("background-color","orange");


});


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


$("#catalogo #opciones_vertical_izq #opcion_inicial").click(function(){
	
//	alert("hola");
	
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_der_izq_delay800");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der");
	$("#catalogo #contenido #cara_2").removeClass("trans_pag_2_izq_der_delay800");
	
	
	if($("#catalogo #contenido #cara_3").css("left")=="0px"){
		$("#catalogo #opciones_vertical_izq #opcion_primaria").click();
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_izq_der_delay800");
	}else{
		$("#catalogo #contenido #cara_2").addClass("trans_pag_2_izq_der");
	}
	

	//////////////MOSTRAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","block");
	
	/////////////////////////////
	
	$("#catalogo #contenido #cara_2").css("z-index","20");
	$("#catalogo #opciones_vertical_izq #opcion_inicial").css("display","none");
	
	
	$("#catalogo #opciones_vertical #opcion_inicial").css("visibility","visible");
	
	
	///////////////////////////////////////////////
	
	
	$("#catalogo #contenido #cara_2").css("left","500px");
	
	$("#catalogo #contenido #cara_2").css("background-color","green");
	
//	$("#catalogo #contenido #cara_1").removeClass("transicion800");
	
	
});


$("#catalogo #opciones_vertical_izq #opcion_primaria").click(function(){
	

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
	$("#catalogo #opciones_vertical_izq #opcion_primaria").css("display","none");
	
	
	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","none");
	
	/////////////////////////////
	
								
	$("#catalogo #contenido #cara_3").css("left","500px");
							
	$("#catalogo #contenido #cara_3").css("background-color","blue");
	
});




$("#catalogo #opciones_vertical_izq #cerrar_catalogo").click(function(){
		
	$("#catalogo #contenido #cara_1").removeClass("trans_pag_2_der_izq");

	//////////////QUITAMOS LA PESTAÑA DE CERRAR CATALOGO//////
	$("#catalogo #opciones_vertical_izq #cerrar_catalogo").css("display","none");
	
	/////////////////////////////
	$("#catalogo #contenido #cara_1").addClass("trans_pag_1_izq_der");
	
	$("#catalogo #contenido #cara_1").css("z-index","30");
	
	$("#catalogo #contenido #cara_1").css("left","500px");
	
	$("#catalogo #contenido #cara_1").css("background-color","orange");
	
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



}

function fun_actualizacion_datos(){
/*
Aca ponemos los datos que queremos sean actualizados cada cierto tiempo.
*/
}


$(document).ready(function(){
 

	//Aquí hacemos las llamadas de las funciones que queremos que se ejecuten una vez cargada la página

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