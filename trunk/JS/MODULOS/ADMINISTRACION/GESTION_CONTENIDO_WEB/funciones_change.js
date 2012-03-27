


$(document).ready(function(){
 
	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////


$(AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#nivel_academico").change(function(){
	
	
	var nivel=$(AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#nivel_academico").val();
	fun_consultar_metodologia(nivel,AREA_PAG_WEB+CONTENEDOR_METODOLOGIAS+"#txt_metodologia");
	
});

$(AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#nivel_academico").change(function(){
	
	
	var nivel=$(AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#nivel_academico").val();
	fun_consultar_actividades(nivel,AREA_PAG_WEB+CONTENEDOR_ACTIVIDADES+"#txt_actividades");
	
});


$(AREA_PAG_WEB+CONTENEDOR_ADMISION+"#nivel_academico").change(function(){
	
	
	var nivel=$(AREA_PAG_WEB+CONTENEDOR_ADMISION+"#nivel_academico").val();
	fun_consultar_admision(nivel,AREA_PAG_WEB+CONTENEDOR_ADMISION+"#txt_admision");
	
});



//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
