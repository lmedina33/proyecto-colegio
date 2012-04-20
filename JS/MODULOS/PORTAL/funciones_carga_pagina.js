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
 

	//Vamos a actualizar el contenido de quienes somos desde que abrimos la pagina web
		fun_consultar_quienes_somos("#contenido #cara_1 #contenido-cara_1 #contenido-quienes_somos-cara_1 #quienes_somos");
		fun_consultar_mision_vision("#contenido #cara_1 #contenido-cara_1 #contenido-mision_vision-cara_1 #mision_vision");
		fun_consultar_servicios("#contenido #cara_1 #contenido-cara_1 #contenido-servicios-cara_1 #servicios");
		//fun_consultar_galeria("inicial");
		fun_consultar_metodologia("I","#contenido #cara_1 #contenido-inicial-1 #contenido-metodologia-inicial #metodologia");
		fun_consultar_metodologia("P","#contenido #cara_2 #contenido-primaria-1 #contenido-metodologia-primaria #metodologia");
		fun_consultar_metodologia("S","#contenido #cara_3 #contenido-secundaria-1 #contenido-metodologia-secundaria #metodologia");
		
		//CARGAMOS LAS ACTIVIDADES
		
		fun_consultar_actividades("I","#contenido #contenido-inicial-2 #contenido-actividades-inicial #actividades");
		fun_consultar_actividades("P","#contenido #contenido-primaria-2 #contenido-actividades-primaria #actividades");
		fun_consultar_actividades("S","#contenido #contenido-secundaria-2 #contenido-actividades-secundaria #actividades");
		
		//CARGAMOS LAS ADMISIONES
		
		fun_consultar_admision("I","#contenido #contenido-inicial-2 #contenido-admisiones-inicial #admisiones");
		fun_consultar_admision("P","#contenido #contenido-primaria-2 #contenido-admisiones-primaria #admisiones");
		fun_consultar_admision("S","#contenido #contenido-secundaria-2 #contenido-admisiones-secundaria #admisiones");
		
		//CARGAMOS PLANILLA
		fun_consultar_planilla("#contenido #cara_1 #contenido-cara_1 #contenido-plana_docente_administrativa-cara_1 #planilla");
});

function fun_ini_nombre(){
	 
	
	$.ajax({
        url: "POST/algun archivo.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        
			
        },
        
	success: function(data_nombre){
			
		
		if(data_nombre=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_nombre=="no data"){
				//accion
			}else{
				//accion
			}
		
		
			if(GLOBAL_PAGINA_CARGADA==GLOBAL_CARGAS){
				$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
				$("#cargando").fadeOut(GLOBAL_VEL_FADE);
			}
			
		}
}
        
		
});	
}