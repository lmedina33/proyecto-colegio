var GLOBAL_CARGAS=0; //es el numero de funciones que se cargan al cargar una página


window.onload = function(){

//La siguiente llamada es para hacer la actualizacion de datos cada 10000 microsegundos, el tiempo se puede cambiar
//	setInterval(fun_actualizacion_datos,10000);



}

function fun_actualizacion_datos(){
/*
Aca ponemos los datos que queremos sean actualizados cada cierto tiempo.
*/
}


$(document).ready(function(){
 
fun_inicializa_cursos();
	//Aquí hacemos las llamadas de las funciones que queremos que se ejecuten una vez cargada la página

});

function fun_inicializa_cursos(){
	 
	
	$.ajax({
        url: "../../POST/MODULO_PROFESORES/ConsultarCursoProfesor.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        
			
        },
        
	success: function(data_cursos){
			
	
		if(data_cursos=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_cursos!="no data"){
				
				var valores=data_cursos.split("{");
				var num_campos=2;
				
				var html_cursos='<div id="titulo_menu">Mis Cursos</div>';
				
				GL_ARRAY_CURSOS=new Array();
				GL_CONT_CURSOS=0;
				for (var i=0;valores[i];i+=num_campos){
					
					GL_ARRAY_CURSOS[GL_CONT_CURSOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4]);
					GL_CONT_CURSOS++;
					
					html_cursos+='<div id="'+valores[i]+'" class="opcion" onclick="click_opcion_curso('+"'"+valores[i]+"'"+')"><div class="texto_pestana" >'+valores[i+1]+'</div></div>';
										
				}
				
				$("#cuerpo-pagina #menu_vertical").html(html_cursos);
				
				click_opcion_curso(valores[0]);
				
			}
		
			
		}
}
        
		
});	
}