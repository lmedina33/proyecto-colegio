var GLOBAL_CARGAS=0; //es el numero de funciones que se cargan al cargar una página


function fun_actualizacion_datos(){
/*
Aca ponemos los datos que queremos sean actualizados cada cierto tiempo.
*/
}


$(document).ready(function(){
 
fun_inicializa_hijos();
	//Aquí hacemos las llamadas de las funciones que queremos que se ejecuten una vez cargada la página

});

function fun_inicializa_hijos(){
	 
	
	$.ajax({
        url: "../POST/MODULO_PADRES/ConsultarHijos.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        
			
        },
        
	success: function(data_hijos){
			
		if(data_hijos=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_hijos!="no data"){
				
				var valores=data_hijos.split("{");
				var num_campos=7;
				/*
				<div id="codigo" title="Haga click para ver la situaci&oacute;n escolar de su hijo" class="cuadro_hijo">
		<div class="nombre">Luis Roman Concha</div>
		<div class="datos_matricula">3er grado de nivel Primaria - Secci&oacute;n A</div>
	</div>
	
	*/
				var html_cursos='<div id="titulo">Hijos matriculados</div>';
				/*
				GL_ARRAY_CURSOS=new Array();
				GL_CONT_CURSOS=0;*/
				for (var i=0;valores[i];i+=num_campos){
					/*
					GL_ARRAY_CURSOS[GL_CONT_CURSOS]=new Array(valores[i],valores[i+1],valores[i+2],valores[i+3],valores[i+4]);
					GL_CONT_CURSOS++;
					*/
					html_cursos+='<div id="'+valores[i]+'" title="Haga click para ver la situaci&oacute;n escolar de su hijo"  class="cuadro_hijo" onclick="click_opcion_hijo('+"'"+valores[i]+"'"+')"><div class="nombre">'+valores[i+1]+" "+valores[i+2]+" "+valores[i+3]+'</div> <div class="datos_matricula" >'+fun_armar_oracion_grado_nivel(valores[i+4],valores[i+5],valores[i+6])+'</div></div>';
										
				}
				
				$("#cuerpo-pagina").html(html_cursos);
				
				
				
			}else{
				var html_cursos='<div id="titulo">No hay hijos matriculados</div>';
				$("#cuerpo-pagina").html(html_cursos);
			}
		
			
		}
}
        
		
});	
}

function fun_armar_oracion_grado_nivel(nivel,grado,seccion){
	
	var prefijo_grado="";
	
	if(nivel=="P"){
		
		nivel="Primaria";
		prefijo_grado="grado";
		
	}else{
			
		if(nivel=="S"){
			
			nivel="Secundaria";
			prefijo_grado="grado";
			
		}else{
			
			nivel="Inicial";
			prefijo_grado="grado";
			
		}
	}
	
	var numerativo="";
	
	switch(parseInt(grado)){
		case 1:numerativo="Primer"; break;
		case 2:numerativo="Segundo";break;
		case 3:numerativo="Tercer";break;
		case 4:numerativo="Cuarto";break;
		case 5:numerativo="Quinto";break;
		case 6:numerativo="Sexto";break;
	}
	
	var oracion=numerativo+" "+prefijo_grado+" de nivel "+nivel+" - Secci&oacute;n "+seccion+".";
	return oracion;
}
