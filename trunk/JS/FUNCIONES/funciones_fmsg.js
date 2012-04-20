////////////////////////// MENSAJES POP UP PERSONALIZADOS

function FMSG_CAMPOS_OBLIGATORIOS(){
	fun_aviso_popup3("Debe llenar todos los campos de caracter obligatorio.","Campos obligatorios no llenados",30,22);
}


function FMSG_ERROR_CONEXION(){
	fun_aviso_popup3("Hubo un problema en la conexi&oacute;n a la base de datos.<br>Consulte con el &Aacute;rea de Soporte<br>para encontrar una soluci&oacute;n al problema.","Error de conexi&oacute;n",30,22);
}

function FMSG_DEBE_SELEC_OBJETO(arg_objeto){
	fun_aviso_popup3("Debe seleccionar un "+arg_objeto+" de la lista.","Requisito",28,22);
}