var GLOBAL_VEL_FADE=400; // velocidad en la que aparecen los show, hide, fade in, fade out


////////////////////////////////////////////////////////////////////////////////
/////////////////OBTENEMOS LA FECHA ACTUAL DEL ORDENADOR//////////////////////// 

var GLOBAL_HOY= new Date();
var GLOBAL_HOY_DIA=GLOBAL_HOY.getDate();
var GLOBAL_HOY_MES=(GLOBAL_HOY.getMonth()+1);
var GLOBAL_HOY_ANIO=GLOBAL_HOY.getFullYear();
	
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//Estas variables nos sirven al momento de trabajar con la funcion PREVIENE_PRESS. Dicha funci�n sirve para verificar lo que se ingresa en un cuadro de texto
var GLOBAL_TECLA_APRETADA=false; 
var GLOBAL_TCL_APRTD_LENGTH_APOYO=0;
////////////////////////////////////////////////////////////////////////////////

var GLOBAL_PAGINA_CARGADA=0;  //VARIABLE USADA PARA SABER SI UNA PAGINA CARGO LOS DATOS DE LA BASE DE DATOS COMPLETAMENTE

////////////////////////////////////////////////////////////////////////////////
/////////////////////TITULOS PARA POP UPS DE AVISO//////////////////////////////

var GLOBAL_TTL_ACN_INC="Acci&oacute;n incompleta";
var GL_TTL_REGISTRO_EXITO="Registro exitoso";
var GL_TTL_ELIMINA_EXITO="Registro borrado con &eacute;xito";
var GL_TTL_DATO_RPT="Dato repetido";


var GLOBAL_MARGEN_TOP_AVISO=23;