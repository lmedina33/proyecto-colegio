


$(document).ready(function(){
 

	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////





$("#cerrar_sesion").click(function(){
	$.ajax({
			url: "../LOGIN/POST/MODULO_PADRE/close_padre.php",
			success: function(data){
				document.location = "../PORTAL/index.php";
			}
	
	});
});

});


function click_opcion_hijo(codigo_alumno){
	parent.document.location="INFO_HIJO/index.php?codigo_alumno="+codigo_alumno;
}