

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SER�N LLAMADAS PARA SU USO EN EL M�DULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_post_nombre(/*arg_1,arg_2*/){  //esta funci�n es para hacer alguna llamada con ajax mediante post


	$.ajax({
        url: "POST/algun archivo.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        $("#div_back_cargando").fadeIn(GLOBAL_VEL_FADE);
		$("#cargando").fadeIn(GLOBAL_VEL_FADE);
			
        },
        
	success: function(data_nombre){
			
		$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
		$("#cargando").fadeOut(GLOBAL_VEL_FADE);
		
		
		if(data_nombre=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_nombre=="no data"){
				//accion
			}else{
				//accion
			}
		
		
		}
	}
	        
			
	});	
	
}