


$(document).ready(function(){
 

	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

$("#cuerpo-pagina #btn_cursos ").click(function(){
	
	parent.document.location="CURSOS/index.php";
});


$("#cuerpo-pagina #btn_blog ").click(function(){
	
	parent.document.location="BLOG/index.php";
});


$("#cerrar_sesion").click(function(){
	$.ajax({
			url: "../LOGIN/POST/MODULO_ALUMNO/close_alumno.php",
			success: function(data){
				document.location = "../PORTAL/index.php";
			}
	
	});
});


});
