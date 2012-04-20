


$(document).ready(function(){
 
	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////


$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_nivel").change(function(){
	var html_grado="";
	switch($(this).val()){
		
		case "I": html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option>'; break;
		case "P":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>';  break;
		case "S":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>';break;
	}
	$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_grado").html(html_grado);
	
	get_secciones($(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_nivel").val(),$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_grado").val(),AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_nivel",AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_seccion","",0);
});


$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_grado").change(function(){

	get_secciones($(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_nivel").val(),$(AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_grado").val(),AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_grado",AREA_REGISTROS+CONTENEDOR_ALUMNOS+"#slc_seccion","",0);
});




$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").change(function(){
	var html_grado="";
	
	switch($(this).val()){
		
		case "I": html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option>'; break;
		case "P":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>';  break;
		case "S":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>';break;
	}
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").html(html_grado);
			
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif").html(html_grado);
	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion","carga-alumnos",0);
	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion_modif","",0);
	
	
	
});


$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").change(function(){

	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion","carga-alumnos",0);
	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion_modif","",0);
});



$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").change(function(){
	var nivel=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel").val();
	var grado=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado").val();
	var seccion=$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion").val();
	
	fun_get_alumnos(nivel,grado,seccion);
});






$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel_modif").change(function(){
	var html_grado="";
	switch($(this).val()){
		
		case "I": html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option>'; break;
		case "P":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>';  break;
		case "S":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>';break;
	}
	$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif").html(html_grado);
	
	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel_modif").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel_modif",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion_modif","",0);
});


$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif").change(function(){

	get_secciones($(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_nivel_modif").val(),$(AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif").val(),AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_grado_modif",AREA_REGISTROS+CONTENEDOR_CONSULTAS_ALUMNOS+"#slc_seccion_modif","",0);
});




//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
