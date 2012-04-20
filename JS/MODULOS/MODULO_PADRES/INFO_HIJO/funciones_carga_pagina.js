var GLOBAL_CARGAS=0; //es el numero de funciones que se cargan al cargar una página


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

	//Aquí hacemos las llamadas de las funciones que queremos que se ejecuten una vez cargada la página
fun_inicializa_cursos($("#codigo_alumno").val());
fun_get_cursos_notas($("#codigo_alumno").val());

});
