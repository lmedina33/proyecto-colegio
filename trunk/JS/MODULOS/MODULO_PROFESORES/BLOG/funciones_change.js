


$(document).ready(function(){
 
	//Aqu� se declaran todos los eventos click que existen haciendo las llamadas a los eventos o funciones que correspondan, las funciones se dividen en �reas de modo que se puedan ubicar f�cilmente. Las �reas ser�n las principales, zonas de trabajo, popups, etc.
	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

$("#cuerpo-pagina #contenido-pagina #elegir_alumno #slc_alumno").change(function(){

		var cod_curso=$("#cuerpo-pagina #contenido-pagina #codigo_curso_elegido").val();
		var cod_alumno=$("#cuerpo-pagina #contenido-pagina #elegir_alumno #slc_alumno").val();
		
		fun_cargar_blog(cod_curso,cod_alumno);
});





//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
