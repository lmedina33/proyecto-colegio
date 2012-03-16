
var AREA_PAG_WEB="#area_pag_web ";
var CONTENEDOR_QUIENES_SOMOS="#contenido-quienes_somos-pag_web ";
var CONTENEDOR_MISION_VISION="#contenido-mision_vision-pag_web ";

$(document).ready(function(){
 
	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*Entorno Quienes Somos*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////



$("#menu_vertical #submenu-pag_web #quienes_somos-pag_web").click(function(){

	fun_consultar_quienes_somos(AREA_PAG_WEB+CONTENEDOR_QUIENES_SOMOS+"#txt_quienes_somos");
});




$(AREA_PAG_WEB+CONTENEDOR_QUIENES_SOMOS+"#btn_aceptar").click(function(){

	var cadena=$(AREA_PAG_WEB+CONTENEDOR_QUIENES_SOMOS+"#txt_quienes_somos").val();
	
	var parrafos=cadena.split("\n");
	var parrafos_cadena="";
	var cont=0;
	var bandera=0; //esta variable nos ayudará a saber si solo hay saltos de linea en el cuadro de texto
	if(!fun_esblanco(cadena)){
		
		while(cont<parrafos.length){
			
			if(parrafos[cont]){
				
				bandera=1;
				
				//Tambien debemos verificar si el parrafo está en blanco
				if(!fun_esblanco(parrafos[cont])){
					parrafos_cadena+=parrafos[cont]+"{";	
				}
				
				
			}
			cont++;
		}
		
		if(bandera==0){
			fun_aviso_popup("Debe escribir un texto para actualizar la seccion Quienes Somos.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
				alert(parrafos_cadena);
			fun_actualizar_quienes_somos(parrafos_cadena);
		}
			
	}else{
		
		fun_aviso_popup("Debe escribir un texto para actualizar la seccion Quienes Somos.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
	}
	
	
	//fun_actualizar_quienes_somos("ffffffffá  áaff{ffffff{sfds12321321321");
});








////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*Entorno Mision y vision*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////





$("#menu_vertical #submenu-pag_web #mision_vision-pag_web").click(function(){

	fun_consultar_mision_vision(AREA_PAG_WEB+CONTENEDOR_MISION_VISION+"#txt_mision_vision");
});



$(AREA_PAG_WEB+CONTENEDOR_MISION_VISION+"#btn_aceptar").click(function(){
		
	var cadena=$(AREA_PAG_WEB+CONTENEDOR_MISION_VISION+"#txt_mision_vision").val();
	
	var parrafos=cadena.split("\n");
	var parrafos_cadena="";
	var cont=0;
	var bandera=0; //esta variable nos ayudará a saber si solo hay saltos de linea en el cuadro de texto
	if(!fun_esblanco(cadena)){
		
		while(cont<parrafos.length){
			
			if(parrafos[cont]){
				
				bandera=1;
				
				//Tambien debemos verificar si el parrafo está en blanco
				if(!fun_esblanco(parrafos[cont])){
					parrafos_cadena+=parrafos[cont]+"{";	
				}
				
				
			}
			cont++;
		}
		
		if(bandera==0){
			fun_aviso_popup("Debe escribir un texto para actualizar la seccion Misi&oacute;n y Visi&oacute;n.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			fun_actualizar_mision_vision(parrafos_cadena);
		}
			
	}else{
		
		fun_aviso_popup("Debe escribir un texto para actualizar la seccion Misi&oacute;n y Visi&oacute;n.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
	}

});



//////////////////////////////AREA X///////////////////////////////////



//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
