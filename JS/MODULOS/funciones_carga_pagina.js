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
 

	//Aquí hacemos las llamadas de las funciones que queremos que se ejecuten una vez cargada la página

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