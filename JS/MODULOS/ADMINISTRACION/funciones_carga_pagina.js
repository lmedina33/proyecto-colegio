var GLOBAL_CARGAS=0; //es el numero de funciones que se cargan al cargar una p�gina


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
 
fun_get_profesores();
fun_get_padres(); //para poder llenar el combo de padres necesario para la modificaccion y asignacion a los alumnos
	//Aqu� hacemos las llamadas de las funciones que queremos que se ejecuten una vez cargada la p�gina


fun_carga_combobox_dia(AREA_CURSOS+CONTENEDOR_ASISTENCIAS,"#slc_dia ","#slc_mes ","#txt_anio ");
	
});
