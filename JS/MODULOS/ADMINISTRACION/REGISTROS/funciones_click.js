
var AREA_REGISTROS="#area_registros ";
var CONTENEDOR_ALUMNOS="#contenido-alumnos-registros ";
var CONTENEDOR_CONSULTAS_ALUMNOS="#contenido-consultar_alumnos-registros ";
var CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO="#contenido-consultar_alumnos_no_dispo-registros ";
var CONTENEDOR_PADRES="#contenido-padres-registros ";
var CONTENEDOR_CONSULTAS_PADRES="#contenido-consultar_padres-registros ";
var CONTENEDOR_PROFESORES="#contenido-profesores-registros ";
var CONTENEDOR_CONSULTAS_PROFESORES="#contenido-consultar_profesores-registros ";

	
$(document).ready(function(){

	
	
	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

/***************************ALUMNOS*****************************/

$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#btn_aceptar").click(function(){
 
	var codigo=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#txt_codigo").val();
	var id_padre=$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_padre").val();
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
				
			fun_insertar_alumno(codigo,id_padre,nombres,apellido_p,apellido_m,password,nivel,grado,seccion);
		}

	
});




$("#menu_vertical #submenu-registros #consultar_alumnos-registros").click(function(){
	var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val();
	var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val();
	var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val();
	
	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion","carga-alumnos",0);
});
	
	
	

$("#menu_vertical #submenu-registros #consultar_alumnos_no_dispo-registros").click(function(){
		
	fun_get_alumnos_no_dispo();
});
	

	


$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#btn_modificar").click(function(){
 
	var codigo_anterior=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista");
	
	var disponible=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_habilitado").val();
	var codigo=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_codigo").val();
	var nombres=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_nombres").val();
	var apellido_p=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_apellido_p").val();
	var apellido_m=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_apellido_m").val();
	var password=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#txt_password").val();
	var id_padre=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_padre").val();
	
	var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel_modif").val();
	var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif").val();
	var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion_modif").val();

	var repitente;
	
	
	repitente=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#chk_repitencia").val();
	
		if(fun_esblanco(codigo) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m) || fun_esblanco(password)){
			fun_aviso_popup("Debe llenar todos los datos del alumno.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
				
			
			fun_modificar_alumno(codigo_anterior,codigo,id_padre,nombres,apellido_p,apellido_m,password,nivel,grado,seccion,disponible,"normal",repitente);
		}

	
});



$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#btn_eliminar").click(function(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#lista .lista");
				
		if(codigo=="nada"){
			FMSG_DEBE_SELEC_OBJETO("alumno");
		}else{
				
				var allumno=fun_get_objeto(GL_ALUMNOS,codigo,0);
			fun_pregunta_popup("¿Est&aacute; Ud. seguro de eliminar los datos<br>del alumno '"+fun_tratamiento_tildes(allumno[1])+" "+fun_tratamiento_tildes(allumno[2])+" "+fun_tratamiento_tildes(allumno[3])+"'?","Eliminar alumno","eliminar alumno",34,GLOBAL_MARGEN_TOP_AVISO);
		}
		
});


$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#btn_modificar").click(function(){
 
	var codigo_anterior=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#lista .lista");
	
	var disponible=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_habilitado").val();
	var codigo=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_codigo").val();
	var nombres=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_nombres").val();
	var apellido_p=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_apellido_p").val();
	var apellido_m=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_apellido_m").val();
	var password=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#txt_password").val();
	var id_padre=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_padre").val();
	
	var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_nivel_modif").val();
	var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_grado_modif").val();
	var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#slc_seccion_modif").val();

		var repitente;
	
	repitente=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#chk_repitencia").val();
				
					
		if(fun_esblanco(codigo) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m) || fun_esblanco(password)){
			fun_aviso_popup("Debe llenar todos los datos del alumno.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			
			fun_modificar_alumno(codigo_anterior,codigo,id_padre,nombres,apellido_p,apellido_m,password,nivel,grado,seccion,disponible,"no dispo",repitente);
			
		}

	
});



$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#btn_eliminar").click(function(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS_NO_DISPO+"#lista .lista");
				
		if(codigo=="nada"){
			FMSG_DEBE_SELEC_OBJETO("alumno");
		}else{
				
				var allumno=fun_get_objeto(GL_ALUMNOS_NO_DISPO,codigo,0);
			fun_pregunta_popup("¿Est&aacute; Ud. seguro de eliminar los datos<br>del alumno '"+fun_tratamiento_tildes(allumno[1])+" "+fun_tratamiento_tildes(allumno[2])+" "+fun_tratamiento_tildes(allumno[3])+"'?","Eliminar alumno","eliminar alumno no dispo",34,GLOBAL_MARGEN_TOP_AVISO);
		}
		
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




$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#btn_modificar").click(function(){
 
	var dni_anterior=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista");
	
	
	var disponible=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#slc_habilitado").val();
	
	var dni=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_codigo").val();
	var nombres=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_nombres").val();
	var apellido_p=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_apellido_p").val();
	var apellido_m=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_apellido_m").val();
	var usuario=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_user").val();
	var password=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#txt_password").val();
	

		
		if(fun_esblanco(dni) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m) || fun_esblanco(password) || fun_esblanco(usuario)){
			fun_aviso_popup("Debe llenar todos los datos del alumno.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			
			fun_modificar_padre(dni_anterior,dni,nombres,apellido_p,apellido_m,usuario,password,disponible);
		}

	
});


$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#btn_eliminar").click(function(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PADRES+"#lista .lista");
				
		if(codigo=="nada"){
			FMSG_DEBE_SELEC_OBJETO("alumno");
		}else{
				
			var padre=fun_get_objeto(GL_PADRES,codigo,0);
			fun_pregunta_popup("¿Est&aacute; Ud. seguro de eliminar los datos<br>del se&ntilde;or '"+fun_tratamiento_tildes(padre[1])+" "+fun_tratamiento_tildes(padre[2])+" "+fun_tratamiento_tildes(padre[3])+"'?","Eliminar padre","eliminar padre",34,GLOBAL_MARGEN_TOP_AVISO);
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



$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#btn_modificar").click(function(){
 
	var dni_anterior=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista");
	
	
	var disponible=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#slc_habilitado").val();
	
	var dni=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_codigo").val();
	var nombres=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_nombres").val();
	var apellido_p=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_apellido_p").val();
	var apellido_m=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_apellido_m").val();
	var usuario=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_user").val();
	var password=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#txt_password").val();
	

		
		if(fun_esblanco(dni) || fun_esblanco(nombres) || fun_esblanco(apellido_p) || fun_esblanco(apellido_m) || fun_esblanco(password) || fun_esblanco(usuario)){
			fun_aviso_popup("Debe llenar todos los datos del alumno.",GLOBAL_TTL_ACN_INC,35,GLOBAL_MARGEN_TOP_AVISO);
		}else{
			
			fun_modificar_profesor(dni_anterior,dni,nombres,apellido_p,apellido_m,usuario,password,disponible);
		}

	
});




$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#btn_eliminar").click(function(){
	
	var codigo=fun_obtener_id_fila_restaltada(AREA_REGISTROS+CONTENEDOR_CONSULTAS_PROFESORES+"#lista .lista");
				
		if(codigo=="nada"){
			FMSG_DEBE_SELEC_OBJETO("alumno");
		}else{
				
			var profesor=fun_get_objeto(GL_PROFESORES,codigo,0);
			fun_pregunta_popup("¿Est&aacute; Ud. seguro de eliminar los datos<br>del profesor '"+fun_tratamiento_tildes(profesor[1])+" "+fun_tratamiento_tildes(profesor[2])+" "+fun_tratamiento_tildes(profesor[3])+"'?","Eliminar profesor","eliminar profesor",34,GLOBAL_MARGEN_TOP_AVISO);
		}
		
});




$("#menu_vertical #submenu-registros #consultar_profesores-registros").click(function(){
	
	fun_get_profesores();
});






});

