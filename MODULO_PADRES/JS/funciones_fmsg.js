////////////////////////// MENSAJES POP UP PERSONALIZADOS

function FMSG_CAMPOS_OBLIGATORIOS(){
	sobreaviso_popup("Debe llenar todos los campos de caracter obligatorio.","Campos obligatorios no llenados",30,22);
}


function FMSG_ERROR_CONEXION(){
	sobreaviso_popup("Hubo un problema en la conexi&oacute;n a la base de datos.<br>Consulte con el &Aacute;rea de Soporte<br>para encontrar una soluci&oacute;n al problema.","Error de conexi&oacute;n",30,22);
}

function FMSG_DEBE_SELEC_OBJETO(objeto){
				sobreaviso_popup("Debe seleccionar un "+objeto+" de la lista.","Requisito",28,22);
}