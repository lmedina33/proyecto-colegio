


$(document).ready(function(){

//FUNCION PARA EL BOTOND DE LOGUEAR ALUMNO

$("#boton_ingresar").click(function(){
var quien=$("#quien_logea").val();

if(fun_esblanco(quien)){
	quien="nadie";
}
	switch(quien){
		case "A":logear_alumno($("#username").val(),$("#password").val());break;  //alumnos
		case "P":logear_padre($("#username").val(),$("#password").val());break;	//padres
		case "PR":logear_profesor($("#username").val(),$("#password").val());break;	//profes
		
		case "nadie":alert("Debe acceder a este sitio mediante la pagina principal y no escribiendo directamente el enlace.");
					parent.document.location="../PORTAL/index.php";		
				
				break;  //alumnos
	}
	

});


});




function logear_profesor(nombre_usuario,password){
	
	$.ajax({
        url: "POST/MODULO_PROFESOR/logear_profesor.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{nombre_usuario:nombre_usuario,password:password},
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
				fun_aviso_popup("Los campos de Usuario y Contrase&ntilde;a no pueden quedar vac&iacute;os","Campos vac&iacute;os",34,22);
			}else{
				
			
			if(data!="no data"){
			
			if(data=="no permitido"){
					fun_aviso_popup("Se han encontrado caracteres no permitidos.<br>Revise el nombre de usuario y la contraseña y vuelva a intentarlo.","Caracteres no permitidos",35,22);
			}else{
				var valores=data.split("{");
				alert("Bienvenido "+valores[0]);
				parent.document.location="../"+valores[1]+"/index.php";		
			}
				
			}else{
				fun_aviso_popup("No es un usuario existente o disponible, o la contrase&ntilde;a es incorrecta.<br>Revise los campos y vuelva a intentarlo.<br>Revise si ha escrito su contrase&ntilde;a tal como fue creada (tomando en cuenta may&uacute;sculas y tildes).<br>Si no recuerda su contrase&ntilde;a, solic&iacute;tela en el &aacute;rea de Gerencia.","Error de logeo",48,22);
			}
			}
			
		}
}
        
});		
}




function logear_alumno(nombre_usuario,password){
	
	$.ajax({
        url: "POST/MODULO_ALUMNO/logear_alumno.php",	
        type: "POST",							//Y EN DATA SE ALOJARAN EN NUEVAS VARIABLES
        data:{nombre_usuario:nombre_usuario,password:password},
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
				fun_aviso_popup("Los campos de Usuario y Contrase&ntilde;a no pueden quedar vac&iacute;os","Campos vac&iacute;os",34,22);
			}else{
				
			
			if(data!="no data"){
			
			if(data=="no permitido"){
					fun_aviso_popup("Se han encontrado caracteres no permitidos.<br>Revise el nombre de usuario y la contraseña y vuelva a intentarlo.","Caracteres no permitidos",35,22);
			}else{
				var valores=data.split("{");
				alert("Bienvenido "+valores[0]);
				parent.document.location="../"+valores[1]+"/index.php";		
			}
				
			}else{
				fun_aviso_popup("No es un usuario existente o disponible, o la contrase&ntilde;a es incorrecta.<br>Revise los campos y vuelva a intentarlo.<br>Revise si ha escrito su contrase&ntilde;a tal como fue creada (tomando en cuenta may&uacute;sculas y tildes).<br>Si no recuerda su contrase&ntilde;a, solic&iacute;tela en el &aacute;rea de Gerencia.","Error de logeo",48,22);
			}
			}
			
		}
}
        
});		
}