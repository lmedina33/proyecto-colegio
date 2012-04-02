
var AREA_REGISTROS="#area_registros ";
var CONTENEDOR_ALUMNOS="#contenido-alumnos-registros ";
var CONTENEDOR_CONSULTAS_ALUMNOS="#contenido-consultar_alumnos-registros ";
var CONTENEDOR_PADRES="#contenido-padres-registros ";
var CONTENEDOR_CONSULTAS_PADRES="#contenido-consultar_padres-registros ";
var CONTENEDOR_PROFESORES="#contenido-profesores-registros ";
var CONTENEDOR_CONSULTAS_PROFESORES="#contenido-consultar_profesores-registros ";

	
$(document).ready(function(){
	var button = $('#upload_button'), interval;
	
	var nivel_seleccionado=$("#contenido-subida_fotos-registros #slc_nivel").val();
	
	new AjaxUpload('#upload_button', {
        action: '../POST/ADMINISTRACION/upload.php',
        data:{nivel:$("#contenido-subida_fotos-registros #slc_nivel").val()},
        onSubmit : function(file , ext){
		if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){
			// extensiones permitidas
			alert('Error: Solo se permiten imagenes');
			// cancela upload
			return false;
		} else {
			button.text('Uploading');
			this.disable();
		}
		},
		onComplete: function(file, response){
			button.text('Upload');
			// enable upload button
			this.enable();			
			// Agrega archivo a la lista
			$('#lista').appendTo('.files').text(file);
		}	
	});
	
	
	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

/***************************ALUMNOS*****************************/

$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#btn_aceptar").click(function(){
 
	var codigo=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#txt_codigo").val();
	var nombres=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#txt_nombres").val();
	var apellido_p=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#txt_apellido_p").val();
	var apellido_m=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#txt_apellido_m").val();
	var password=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#txt_password").val();
	var nivel=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_nivel").val();
	var grado=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_grado").val();
	var seccion=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_seccion").val();


		
		if(fun_esblanco(codigo) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m) || fun_esblanco(password)){
			fun_aviso_popup("Debe llenar todos los datos del alumno.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
				
			fun_insertar_alumno(codigo,nombres,apellido_p,apellido_m,password,nivel,grado,seccion);
		}

	
});




$("#menu_vertical #submenu-registros #consultar_alumnos-registros").click(function(){
	var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val();
	var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val();
	var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val();
	
	fun_get_alumnos(nivel,grado,seccion);
});




/***************************PADRES*****************************/


$(AREA_REGISTROS+CONTENEDOR_PADRES+"#btn_aceptar").click(function(){

	var dni=$(AREA_REGISTROS+CONTENEDOR_PADRES+"#txt_dni").val();
	var nombres=$(AREA_REGISTROS+CONTENEDOR_PADRES+"#txt_nombres").val();
	var apellido_p=$(AREA_REGISTROS+CONTENEDOR_PADRES+"#txt_apellido_p").val();
	var apellido_m=$(AREA_REGISTROS+CONTENEDOR_PADRES+"#txt_apellido_m").val();
	var usuario=$(AREA_REGISTROS+CONTENEDOR_PADRES+"#txt_user").val();
	var password=$(AREA_REGISTROS+CONTENEDOR_PADRES+"#txt_password").val();

		
		if(fun_esblanco(dni) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m) || fun_esblanco(usuario) ||  fun_esblanco(password)){
			fun_aviso_popup("Debe llenar todos los datos del alumno.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
				
			fun_insertar_padre(dni,nombres,apellido_p,apellido_m,usuario,password);
		}

	
});




$("#menu_vertical #submenu-registros #consultar_padres-registros").click(function(){
	
	fun_get_padres();
});







/***************************PROFESOR*****************************/


$(AREA_REGISTROS+CONTENEDOR_PROFESORES+"#btn_aceptar").click(function(){

	var dni=$(AREA_REGISTROS+CONTENEDOR_PROFESORES+"#txt_dni").val();
	var nombres=$(AREA_REGISTROS+CONTENEDOR_PROFESORES+"#txt_nombres").val();
	var apellido_p=$(AREA_REGISTROS+CONTENEDOR_PROFESORES+"#txt_apellido_p").val();
	var apellido_m=$(AREA_REGISTROS+CONTENEDOR_PROFESORES+"#txt_apellido_m").val();
	var usuario=$(AREA_REGISTROS+CONTENEDOR_PROFESORES+"#txt_user").val();
	var password=$(AREA_REGISTROS+CONTENEDOR_PROFESORES+"#txt_password").val();


		
		if(fun_esblanco(dni) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m) || fun_esblanco(usuario)|| fun_esblanco(password)){
			fun_aviso_popup("Debe llenar todos los datos del alumno.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
				
			fun_insertar_profesor(dni,nombres,apellido_p,apellido_m,usuario,password);
		}

	
});



$("#menu_vertical #submenu-registros #consultar_profesores-registros").click(function(){
	
	fun_get_profesores();
});






});

