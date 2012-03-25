

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////AQUI SE DECLARAN TODAS LAS FUNCIONES POST QUE SERÁN LLAMADAS PARA SU USO EN EL MÓDULO ACTUAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function fun_post_nombre(/*arg_1,arg_2*/){  //esta función es para hacer alguna llamada con ajax mediante post


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