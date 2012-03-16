


$(document).ready(function(){
 
	//Aquí se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en áreas de modo que se puedan ubicar fácilmente. Las áreas serán las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////







//La siguiente función permitirá ver el contenido que corresponda a la subopcion elegida. Se mostrará la información en el DIV CONTENEDOR
$("#menu_vertical .submenu .subopcion").click(function(){
		
	var id=$(this).attr("id");
	
	var partes_id=id.split("-");  //hemos separado el ide en 2 partes separadas por el guion medio
	//la parte 0 contiene el contenido y la parte 1 contiende el área
	abrir_contenido(partes_id[0],partes_id[1]);	  //pasamos los valores a la funcion abrir_contenido para que lo abra
});

//////////////////////////////AREA X///////////////////////////////////



//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
