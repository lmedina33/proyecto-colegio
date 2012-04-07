


$(document).ready(function(){
 
	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////


$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").change(function(){
	
	var html_grado="";
	switch($(this).val()){
		
		case "I": html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option>'; break;
		case "P":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>';  break;
		case "S":html_grado='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>';break;
	}
	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").html(html_grado);
	
	var nivel=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").val();
	var grado=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").val();
	
	fun_get_cursos(nivel,grado);
	
	/*
	get_secciones($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").val(),AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel",AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion");*/
	
});


$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").change(function(){

	var nivel=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_nivel").val();
	var grado=$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_grado").val();
	
	fun_get_cursos(nivel,grado);
});




$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").change(function(){
	
	var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());				
	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(profe_a_cargo);
	refresca_tabla_cursos();
	
});


$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").change(function(){
	
	var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());				
	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(profe_a_cargo);
	refresca_tabla_cursos();
});




//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
