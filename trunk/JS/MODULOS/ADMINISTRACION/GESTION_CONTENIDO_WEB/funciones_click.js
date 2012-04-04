
var AREA_PAG_WEB="#area_pag_web ";
var CONTENEDOR_QUIENES_SOMOS="#contenido-quienes_somos-pag_web ";
var CONTENEDOR_MISION_VISION="#contenido-mision_vision-pag_web ";
var CONTENEDOR_METODOLOGIAS="#contenido-metodologia-pag_web ";
var CONTENEDOR_ACTIVIDADES="#contenido-actividades-pag_web ";
var CONTENEDOR_ADMISION="#contenido-admision-pag_web ";
var CONTENEDOR_SERVICIOS="#contenido-servicios-pag_web ";
var CONTENEDOR_ADMINISTRATIVOS="#contenido-planilla_docente_admin-pag_web ";
/////////////////////////////////////////////
var GL_TITULOS_SERVICIOS=new Array();
var GL_SERVICIOS=new Array();
var GL_CONT_SERVICIOS=0;
	
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



$("#menu_vertical #submenu-pag_web #subida_fotos-pag_web").click(function(){
	
	$("#upload_button").click();
	fun_consultar_galeria($("#contenido-subida_fotos-pag_web #slc_nivel").val());
});

$("#contenido-subida_fotos-pag_web #slc_nivel").change(function(){
		
	$("#upload_button").click();
	fun_consultar_galeria($("#contenido-subida_fotos-pag_web #slc_nivel").val());
});


$("#contenido-subida_fotos-pag_web #upload_button").click(function(){
	
	//alert($("#contenido-subida_fotos-registros #slc_nivel").val());
	    
	new AjaxUpload('#upload_button', {
        action: '../POST/ADMINISTRACION/GESTION_CONTENIDO_WEB/subir_foto.php',
        data:{nivel:$("#contenido-subida_fotos-pag_web #slc_nivel").val()},
        onSubmit : function(file , ext){
		if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){
			// extensiones permitidas
			alert('Error: Solo se permiten imagenes');
			// cancela upload
			return false;
		} else {
		
			this.disable();
		}
		},
		onComplete: function(file, response){
			
			alert(response);
			
			fun_consultar_galeria($("#contenido-subida_fotos-pag_web #slc_nivel").val());
			// enable upload button
			this.enable();			
		}	
	});
	
});



$("#marco_foto_mostrada #boton_cerrar").click(function(){
	
	$("#marco_foto_mostrada").fadeOut(GLOBAL_VEL_FADE);	
	$("#protector_marco_foto").fadeOut(GLOBAL_VEL_FADE);	
	
});


$("#contenido-subida_fotos-pag_web #eliminar_foto").click(function(){
	
	//alert($("#contenido-subida_fotos-registros #slc_nivel").val());
	foto_elegida=$("#contenido-subida_fotos-pag_web #lista_fotos input[@name='seleccionar_foto']:checked").val();
	
	if(foto_elegida){
		fun_eliminar_foto($("#contenido-subida_fotos-pag_web #slc_nivel").val(),foto_elegida);
	}else{
		fun_aviso_popup("Debe elegir una de las fotos a eliminar.","Elija una foto",30,30);
	}
});



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



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*Entorno Metodologias*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////






$("#menu_vertical #submenu-pag_web #metodologia-pag_web").click(function(){

	var nivel=$(AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#nivel_academico").val();
	fun_consultar_metodologia(nivel,AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#txt_admision");
});



$(AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#btn_aceptar").click(function(){
		
	var cadena=$(AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#txt_metodologia").val();
	var nivel=$(AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#nivel_academico").val();
	
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
			fun_aviso_popup("Debe escribir un texto para actualizar la seccion Metodolog&iacute;as.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			fun_insertar_metodologia(nivel,parrafos_cadena);
		}
			
	}else{
		
		fun_aviso_popup("Debe escribir un texto para actualizar la seccion Metodolog&iacute;as.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
	}

});



////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*Entorno Actividades*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////






$("#menu_vertical #submenu-pag_web #actividades-pag_web").click(function(){

	var nivel=$(AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#nivel_academico").val();
	fun_consultar_actividades(nivel,AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#txt_actividades");
});



$(AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#btn_aceptar").click(function(){
		
	var cadena=$(AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#txt_actividades").val();
	var nivel=$(AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#nivel_academico").val();
	
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
			fun_aviso_popup("Debe escribir un texto para actualizar la seccion Actividades.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			fun_insertar_actividades(nivel,parrafos_cadena);
		}
			
	}else{
		
		fun_aviso_popup("Debe escribir un texto para actualizar la seccion Actividades.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
	}

});




////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*Entorno Admision*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////






$("#menu_vertical #submenu-pag_web #admision-pag_web").click(function(){

	var nivel=$(AREA_PAG_WEB+CONTENEDOR_ADMISION+"#nivel_academico").val();
	fun_consultar_admision(nivel,AREA_PAG_WEB+CONTENEDOR_ADMISION+"#txt_admision");
});



$(AREA_PAG_WEB+CONTENEDOR_ADMISION+"#btn_aceptar").click(function(){
		
	var cadena=$(AREA_PAG_WEB+CONTENEDOR_ADMISION+"#txt_admision").val();
	var nivel=$(AREA_PAG_WEB+CONTENEDOR_ADMISION+"#nivel_academico").val();
	
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
			fun_aviso_popup("Debe escribir un texto para actualizar la seccion Admisi&oacute;n.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			fun_insertar_admision(nivel,parrafos_cadena);
		}
			
	}else{
		
		fun_aviso_popup("Debe escribir un texto para actualizar la seccion Admisi&oacute;n.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
	}

});





////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*Entorno Servicios*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////



$("#menu_vertical #submenu-pag_web #servicios-pag_web").click(function(){
	fun_consultar_servicios();
});



$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#btn_agregar").click(function(){

	var titulo=$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#txt_titulo").val();
	var servicio=$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#txt_servicio").val();

	
	GL_TITULOS_SERVICIOS[GL_CONT_SERVICIOS]=titulo;
	GL_SERVICIOS[GL_CONT_SERVICIOS]=servicio;
	GL_CONT_SERVICIOS++;
	refrescar_vista_servicios();
	
});



$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#btn_borrar_ultimo").click(function(){
	
	$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#txt_titulo").val(GL_TITULOS_SERVICIOS[GL_CONT_SERVICIOS-1]);
	$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#txt_servicio").val(GL_SERVICIOS[GL_CONT_SERVICIOS-1]);
	
	GL_CONT_SERVICIOS--;
	refrescar_vista_servicios();
	
});


$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#btn_guardar").click(function(){
	
	var cadena_titulos="";
	var cadena_parrafos="";
	var parrafos,parrafos_cadena;
	
	var cont=0;

	for(var i=0;i<GL_CONT_SERVICIOS;i++){
		parrafos=GL_SERVICIOS[i].split("\n");
				
		cont=0;
		while(cont<parrafos.length){
			
			if(parrafos[cont]){
				
				//Tambien debemos verificar si el parrafo está en blanco
				if(!fun_esblanco(parrafos[cont])){
					cadena_parrafos+=parrafos[cont]+"{";
					cadena_titulos+=GL_TITULOS_SERVICIOS[i]+"{";
				}
				
			}
			cont++;
		}
		
	}	
	

	fun_insertar_servicios(cadena_titulos,cadena_parrafos);
	
			

	
});

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/*Entorno Plana Docente Administrativa*/

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//$(AREA_PAG_WEB+CONTENEDOR_ADMINISTRATIVOS+"#btn_guardar").click(function(){
$(AREA_PAG_WEB+CONTENEDOR_ADMINISTRATIVOS+"#btn_guardar").click(function(){																		   
 
 	alert("entreee");
	var dni=$(AREA_PAG_WEB+CONTENEDOR_ADMINISTRATIVOS+"#txt_dni").val();
	var nombres=$(AREA_PAG_WEB+CONTENEDOR_ADMINISTRATIVOS+"#txt_nombres").val();
	var apellido_p=$(AREA_PAG_WEB+CONTENEDOR_ADMINISTRATIVOS+"#txt_apellido_p").val();
	var apellido_m=$(AREA_PAG_WEB+CONTENEDOR_ADMINISTRATIVOS+"#txt_apellido_m").val();
	var cargo=$(AREA_PAG_WEB+CONTENEDOR_ADMINISTRATIVOS+"#slc_nivel").val();
		
		if(fun_esblanco(dni) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m)){
			fun_aviso_popup("Debe llenar todos los datos del administrativo.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			alert("bien");
			fun_insertar_administrativo(dni,nombres,apellido_p,apellido_m,cargo);
		}

	
});


$("#menu_vertical #submenu-pag_web #consultar_admin-pag_web").click(function(){
	
	fun_get_administrativo();
});

//////////////////////////////AREA X///////////////////////////////////



//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});



function refrescar_vista_servicios(){
	
	var html_servicios="";
	for(var i=0;i<GL_CONT_SERVICIOS;i++){
		html_servicios+='<div class="titulo_servicio">'+GL_TITULOS_SERVICIOS[i]+'</div><div class="concepto_servicio">'+GL_SERVICIOS[i]+'</div>';
	}
	
	$(AREA_PAG_WEB+CONTENEDOR_SERVICIOS+"#servicios_agregados").html(html_servicios);
}


