


$(document).ready(function(){

//FUNCION PARA EL BOTOND DE LOGUEAR ALUMNO

$("#boton_ingresar_alumno").click(function(){


	$.ajax({
        url: "POST/MODULO_ALUMNO/logear_alumno.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{nombre_usuario:$("#username").val(),password:$("#password").val()},
        async:true,
        beforeSend: 
		function(objeto){
        	
		//	$("#cargando").show();
			
        },
        
	success: function(data){
//	alert(data);
	if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();	
				
		}else{
			
			if(data=="no username" || data=="no password"){
				aviso_popup("Los campos de Usuario y Contrase&ntilde;a no pueden quedar vac&iacute;os","Campos vac&iacute;os",34,22);
			}else{
				
			
			if(data!="no data"){
			
			if(data=="no permitido"){
					aviso_popup("Se han encontrado caracteres no permitidos.<br>Revise el nombre de usuario y la contraseña y vuelva a intentarlo.","Caracteres no permitidos",35,22);
			}else{
				var valores=data.split("{");
				alert("Bienvenido "+valores[0]);
				parent.document.location="../"+valores[1]+"/index.php";		//FALTA REVISAR!!!!!
			}
				
			}else{
			aviso_popup("No es un usuario existente o la contrase&ntilde;a es incorrecta.<br>Revise los campos y vuelva a intentarlo.<br>Revise si ha escrito su contrase&ntilde;a tal como fue creada (tomando en cuenta may&uacute;sculas y tildes).<br>Si no recuerda su contrase&ntilde;a, solic&iacute;tela en el &aacute;rea de Gerencia.","Error de logeo",48,22);
			}
			}
			
		}
}
        
});		

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCION PARA EL BOTOND DE LOGUEAR PADRE

$("#boton_ingresar_padre").click(function(){


	$.ajax({
        url: "POST/MODULO_PADRE/logear_padre.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{nombre_usuario:$("#username").val(),password:$("#password").val()},
        async:true,
        beforeSend: 
		function(objeto){
        	
		//	$("#cargando").show();
			
        },
        
	success: function(data){
//	alert(data);
	if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();	
				
		}else{
			
			if(data=="no username" || data=="no password"){
				aviso_popup("Los campos de Usuario y Contrase&ntilde;a no pueden quedar vac&iacute;os","Campos vac&iacute;os",34,22);
			}else{
				
			
			if(data!="no data"){
			
			if(data=="no permitido"){
					aviso_popup("Se han encontrado caracteres no permitidos.<br>Revise el nombre de usuario y la contraseña y vuelva a intentarlo.","Caracteres no permitidos",35,22);
			}else{
				var valores=data.split("{");
				alert("Bienvenido "+valores[0]);
				parent.document.location="../"+valores[1]+"/index.php";		//FALTA REVISAR!!!!!
			}
				
			}else{
			aviso_popup("No es un usuario existente o la contrase&ntilde;a es incorrecta.<br>Revise los campos y vuelva a intentarlo.<br>Revise si ha escrito su contrase&ntilde;a tal como fue creada (tomando en cuenta may&uacute;sculas y tildes).<br>Si no recuerda su contrase&ntilde;a, solic&iacute;tela en el &aacute;rea de Gerencia.","Error de logeo",48,22);
			}
			}
			
		}
}
        
});		

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCION PARA EL BOTOND DE LOGUEAR PROFESOR

$("#boton_ingresar_profesor").click(function(){


	$.ajax({
        url: "POST/MODULO_PROFESOR/logear_profesor.php",		
        type: "POST",									//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{nombre_usuario:$("#username").val(),password:$("#password").val()},
        async:true,
        beforeSend: 
		function(objeto){
        	
		//	$("#cargando").show();
			
        },
        
	success: function(data){
//	alert(data);
	if(data=="mysql_no"){
				FMSG_ERROR_CONEXION();	
				
		}else{
			
			if(data=="no username" || data=="no password"){
				aviso_popup("Los campos de Usuario y Contrase&ntilde;a no pueden quedar vac&iacute;os","Campos vac&iacute;os",34,22);
			}else{
				
			
			if(data!="no data"){
			
			if(data=="no permitido"){
					aviso_popup("Se han encontrado caracteres no permitidos.<br>Revise el nombre de usuario y la contraseña y vuelva a intentarlo.","Caracteres no permitidos",35,22);
			}else{
				var valores=data.split("{");
				alert("Bienvenido "+valores[0]);
				parent.document.location="../"+valores[1]+"/index.php";		//FALTA REVISAR!!!!!
			}
				
			}else{
			aviso_popup("No es un usuario existente o la contrase&ntilde;a es incorrecta.<br>Revise los campos y vuelva a intentarlo.<br>Revise si ha escrito su contrase&ntilde;a tal como fue creada (tomando en cuenta may&uacute;sculas y tildes).<br>Si no recuerda su contrase&ntilde;a, solic&iacute;tela en el &aacute;rea de Gerencia.","Error de logeo",48,22);
			}
			}
			
		}
}
        
});		

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

});//fin de $(document).ready
