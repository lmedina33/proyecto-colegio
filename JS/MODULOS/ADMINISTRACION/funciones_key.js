
var GLOBAL_AREA="DIV_AREA";

$(document).ready(function(){
 
	//Aqu� se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en �reas de modo que se puedan ubicar f�cilmente. Las �reas ser�n las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

$("div contenedor").keyup(function(){
		
});


$("div contenedor").keydown(function(){
		
});


//////////////////////////////////////////////////////////////////////
$(GLOBAL_AREA+"div contenedor").keydown(function(){
	previene_press(GLOBAL_AREA+"div contenedor","down","cadena");  // en lugar de cadena puede ser entero, o float
});

$(GLOBAL_AREA+"div contenedor").keyup(function(){
	previene_press(GLOBAL_AREA+"div contenedor","up","cadena");
	
});         
//////////////////////////////////////////////////////////////////////


//////////////////////////////AREA X///////////////////////////////////



//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
