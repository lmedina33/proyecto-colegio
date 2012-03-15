var GLOBAL_CARGAS=0; //es el numero de funciones que se cargan al cargar una página


window.onload = function(){

//La siguiente llamada es para hacer la actualizacion de datos cada 10000 microsegundos, el tiempo se puede cambiar
//	setInterval(fun_actualizacion_datos,10000);


$("#menu_vertical .opcion").click(function(){
	
	var desplazamiento_y_background=60;
	
	////////////veremos cual es la opcion actualmente seleccionada
	
	var id_selec=$('#menu_vertical .opcion[title="Seleccionada"]').attr("id");
	var id_selec_partes=id_selec.split("-");
	
	////////////Ahora veremos cual es la opcion que fue clicada////////////////
	var id=$(this).attr("id");
	var id_partes=id.split("-");
	
	/////////////////////////////Veamos en que posicion está el background///////////////
	var back_position=$("#menu_vertical").css("background-position");
	var back_posi_partes=back_position.split(" "); //con esto tomamos las dos partes de la posicion, pero como solo nos interesa la altura, osea el eje y, tomaremos back_posi_partes[1]
	var back_posi_partes2=back_posi_partes[1].split("px");  //debido a que es un string y posee la unidad px al final hay que quitarla
	
	var posicion_y=parseFloat(back_posi_partes2[0]);
		
	var diferencia=0;
	var nuevo_back_position="0 ";
	if( parseFloat(id_selec_partes[0])< parseFloat(id_partes[0])){ //si la opcion que ya estaba seleccionada es menor que la que se está seleccionando, entonces desplazaremos de forma positiva el background.
	
		diferencia= parseFloat(id_partes[0])-parseFloat(id_selec_partes[0]);
		nuevo_back_position+=((diferencia*desplazamiento_y_background)+posicion_y)+"px";
		$("#menu_vertical").css("background-position",nuevo_back_position);
		//alert(nuevo_back_position);
	}else{
		
		if( parseFloat(id_selec_partes[0])> parseFloat(id_partes[0])){ //si la opcion que ya estaba seleccionada es mayor que la que se está seleccionando, entonces desplazaremos de forma negativa el background.
		
			diferencia=parseFloat(id_selec_partes[0])- parseFloat(id_partes[0]);
			nuevo_back_position+=(posicion_y-(diferencia*desplazamiento_y_background))+"px";
		//	alert(nuevo_back_position);
			$("#menu_vertical").css("background-position",nuevo_back_position);
			
		} 	
	}
	
	//Debemos cambiar los titles
	$("#menu_vertical .opcion").attr("title","Click para seleccionar");
	$(this).attr("title","Seleccionada");
	
});


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
			
			if(data_nombre=="no_data"){
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