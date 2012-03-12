VAR GLOBAL_VEL_FADE=400; // velocidad en la que aparecen los show, hide, fade in, fade out


////////////////////////////////////////////////////////////////////////////////
/////////////////OBTENEMOS LA FECHA ACTUAL DEL ORDENADOR//////////////////////// 

VAR GLOBAL_HOY= new Date();
VAR GLOBAL_HOY_DIA=GLOBAL_HOY.getDate();
VAR GLOBAL_HOY_MES=(GLOBAL_HOY.getMonth()+1);
VAR GLOBAL_HOY_ANIO=GLOBAL_HOY.getFullYear();
	
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//Estas variables nos sirven al momento de trabajar con la funcion PREVIENE_PRESS. Dicha función sirve para verificar lo que se ingresa en un cuadro de texto
VAR GLOBAL_TECLA_APRETADA=false; 
VAR GLOBAL_TCL_APRTD_LENGTH_APOYO=0;
////////////////////////////////////////////////////////////////////////////////

var GLOBAL_PAGINA_CARGADA=0;  //VARIABLE USADA PARA SABER SI UNA PAGINA CARGO LOS DATOS DE LA BASE DE DATOS COMPLETAMENTE