


$(document).ready(function(){
 
	//Aqu� se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en �reas de modo que se puedan ubicar f�cilmente. Las �reas ser�n las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////


$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").change(function(){
	
	var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());				
	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(profe_a_cargo);
	
});


$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").change(function(){
	
	var profe_a_cargo=get_profesor_a_cargo($(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_curso ").val(),$(AREA_CURSOS+CONTENEDOR_CURSOS+"#slc_seccion ").val());				
	$(AREA_CURSOS+CONTENEDOR_CURSOS+"#txt_profesor ").val(profe_a_cargo);
	
});




//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
