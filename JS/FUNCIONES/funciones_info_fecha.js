// se necesita de la funcion externa fun_limpiaarray en las funciones fecha_custom


///////////////////////////////////////FUNCION DE COMPARACIÓN ENTRE FECHAS
function fun_compara_fechas(arg_fecha1,arg_fecha2){ 
	//Las fechas están en formato STRING  y además están en formato normal  dia-mes-año
	//si retorna 1, fecha1>fecha2, si retorna 2, fecha2 > fecha1, si retorna 0, son iguales
	
	var vals=arg_fecha1.split("-");
	var dia1=parseFloat(vals[0]);
	var mes1=parseFloat(vals[1]);
	var anio1=parseFloat(vals[2]);
	
	vals=arg_fecha2.split("-");
	var dia2=parseFloat(vals[0]);
	var mes2=parseFloat(vals[1]);
	var anio2=parseFloat(vals[2]);
	
	if(anio2>anio1){
		return 2;
	}else{
		if(anio1>anio2){
			return 1;
		}else{ //anios iguales
			if(mes2>mes1){
				return 2;
			}else{
				if(mes1>mes2){
					return 1;
				}else{ // meses iguales
					if(dia2>dia1){
						return 2;
					}else{
						if(dia1>dia2){
							return 1;
						}else{ //fechas iguales
							return 0;
						}
					}
				}
			}
		}
	}
}

//////////////////////////////////////////FUNCION QUE OBTIENE EL NÚMERO DE AÑOS HASTA EL DÍA DE HOY.
/// SI LA FECHA QUE SE INGRESA EN EL ARGUMENTO ES MENOR QUE HOY SE OBTENDRÁ UN NÚMERO POSITIVO, SI ES MAYOR SE OBTENDRÁ UN NÚMERO NEGATIVO.

function fun_anios_hasta_hoy(arg_dia,arg_mes,arg_anio){ // los datos pueden ser numéricos o strings

	var _hoy= new Date();
	var _hoy_dia=_hoy.getDate();
	var _hoy_mes=(_hoy.getMonth()+1);
	var _hoy_anio=_hoy.getFullYear();
	
	var _dia=parseFloat(arg_dia);
	var _mes=parseFloat(arg_mes);
	var _anio=parseFloat(arg_anio);

	var edad=_hoy_anio-_anio;
	if(_hoy_mes>_mes){
		return edad;
	}else{
		if(_hoy_mes<_mes){
			return edad-1;
		}else{
			if(_hoy_dia>=_dia){
				return edad;
			}else{
				return edad-1;
			}
		}
		
	}
}

//////////////////////////////////////////////////////////////////////

/////////////////////  LAS SIGUIENTES FUNCIONES SE ENCARGAN DE MANIPULAR LOS COMBOBOX DE FECHAS, DE MODO QUE SI CAMBIAMOS DE MESES Y AÑOS Y LOS NUMERO DE DÍAS EN DICHO MES SON MODIFICADOS, SIGUEN LAS REGLAS DE AÑOS BISIESTOS, MESES CON 30 DIAS, 31 DIAS, ETC.

function fun_carga_combobox_dia(arg_div_contenedor,arg_id_dia,arg_id_mes,arg_id_anio){ 
	//ejemplo div_contenedor="#AREA_COMPRAS"   id_mes="#mes_vencimiento" 
     // el div contenedor es cualquier combinacion embedida como por ejemplo "#div1 #div2"
     
		var cadena2='<option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option>'+
					'<option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option>'+
					'<option value="9" >9</option><option value="10" >10</option><option value="11" >11</option>'+
					'<option value="12" >12</option><option value="13" >13</option><option value="14" >14</option>'+
					'<option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option>'+
					'<option value="19" >19</option><option value="20" >20</option><option value="21" >21</option>'+
					'<option value="22" >22</option><option value="23" >23</option><option value="24" >24</option>'+
					'<option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option>';
				
				switch($(arg_div_contenedor+" "+arg_id_mes).val()){
					case "1":case "3":case "5":
					case "7":case "8":case "10":
					case "12":					
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option><option value="31" >31</option>');
					
					break;
					case "4":case "6":case "9":
					case "11": 
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option>');
					break;
					case "2":
					if(parseInt($(arg_div_contenedor+" "+arg_id_anio).val())%4==0){
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option>');
					}else{
						$(arg_div_contenedor+" "+arg_id_dia).html(cadena2);
					}
					break;
				}	
								
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_combobox_mes_change(arg_div_contenedor,arg_id_dia,arg_id_mes,arg_id_anio){
	
	var cadena2='<option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option>'+
					'<option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option>'+
					'<option value="9" >9</option><option value="10" >10</option><option value="11" >11</option>'+
					'<option value="12" >12</option><option value="13" >13</option><option value="14" >14</option>'+
					'<option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option>'+
					'<option value="19" >19</option><option value="20" >20</option><option value="21" >21</option>'+
					'<option value="22" >22</option><option value="23" >23</option><option value="24" >24</option>'+
					'<option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option>';
					
				switch($(arg_div_contenedor+" "+arg_id_mes).val()){
					case "1":case "3":case "5":
					case "7":case "8":case "10":
					case "12":					
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option><option value="31" >31</option>');
					
					break;
					case "4":case "6":case "9":
					case "11":
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option>');
					break;
					case "2":
					if(parseInt($(arg_div_contenedor+" "+arg_id_anio).val())%4==0){
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option>');
					}else{
						$(arg_div_contenedor+" "+arg_id_dia).html(cadena2);
					}
					break;
				}	
}	


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_combobox_anio_change(arg_div_contenedor,arg_id_dia,arg_id_mes,arg_id_anio){
	var cadena2='<option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option>'+
					'<option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option>'+
					'<option value="9" >9</option><option value="10" >10</option><option value="11" >11</option>'+
					'<option value="12" >12</option><option value="13" >13</option><option value="14" >14</option>'+
					'<option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option>'+
					'<option value="19" >19</option><option value="20" >20</option><option value="21" >21</option>'+
					'<option value="22" >22</option><option value="23" >23</option><option value="24" >24</option>'+
					'<option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option>';
					
		if(parseInt($(arg_div_contenedor+" "+arg_id_anio).val())%4==0 && $(arg_div_contenedor+" "+arg_id_mes).val()=="2"){
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2+'<option value="29" >29</option>');
					}
		if(parseInt($(arg_div_contenedor+" "+arg_id_anio).val())%4!=0 && $(arg_div_contenedor+" "+arg_id_mes).val()=="2"){
					$(arg_div_contenedor+" "+arg_id_dia).html(cadena2);
					}
}

//////////////////////////////////////////////////////////////////



////////////////////////////////FUNCIONES QUE TIENEN QUE VER CON LOS FORMATOS DE FECHA, YA SEA DE ARMADO DE FECHAS, O DE CAMBIO DE FORMATO A SQL O NORMAL

function fun_arma_fecha_sql(arg_dia,arg_mes,arg_anio){ //los numeros pueden venir en STRING o enteros

var _dia=parseFloat(arg_dia);
var _mes=parseFloat(arg_mes);
var _anio=parseFloat(arg_anio);

var fecha=_anio;

if(_mes<10){
fecha=fecha+"-0"+_mes;	
}
else{	
fecha=fecha+"-"+_mes;
}

if(_dia<10){	
fecha=fecha+"-0"+_dia;
}
else{
	
fecha=fecha+"-"+_dia;
}
return fecha;  //LA FECHA ES DEVUELTA EN FORMATO ANIO-MES-DIA
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_fecha_invierte_formato(arg_fecha){ // el dato debe estar en formato string
	
	//esta funcion solo invierte el formato de una fecha  si es ANIO-MES-DIA ->DIA-MES-ANIO Y viceversa
	
	var valores_f=arg_fecha.split("-");
	return valores_f[2]+"-"+valores_f[1]+"-"+valores_f[0]; 
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_oracion_fecha(arg_fecha){ //formato string dd/mm/aaaa
	var valores=arg_fecha.split("-");
	var anio=valores[2];
	// se hace una llamada a la funcion nombre_mes
	var mes=fun_nombre_mes(valores[1]);
	var dia=parseFloat(valores[0]);
	
	return dia+" de "+mes+" del "+anio;
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_nombre_mes(arg_numero){
	var _num=parseFloat(arg_numero);
	switch(_num){
		case 1:return "Enero";break;
		case 2:return "Febrero";break;
		case 3:return "Marzo";break;
		case 4:return "Abril";break;
		case 5:return "Mayo";break;
		case 6:return "Junio";break;
		case 7:return "Julio";break;
		case 8:return "Agosto";break;
		case 9:return "Septiembre";break;
		case 10:return "Octubre";break;
		case 11:return "Noviembre";break;
		case 12:return "Diciembre";break;
		
	}
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_nombre_dia(arg_numero){
	var _num=parseFloat(arg_numero);
	switch(_num){
		case 1:return "Lunes";break;
		case 2:return "Martes";break;
		case 3:return "Miércoles";break;
		case 4:return "Jueves";break;
		case 5:return "Viernes";break;
		case 6:return "Sábado";break;
		case 7:return "Domingo";break;
	
		
	}
}

//////////////FUNCIONES QUE SE ENCARGAN DE LLENAR LOS COMBOBOX QUE SOLO MUESTRAN CIERTAS FECHAS PERSONALIZADAS (QUIZÁ SOLO DE UNOS DÍAS TRABAJADOS, O DÍAS EN LOS QUE SE USÓ CIERTA FUNCIONALIDAD DEL SISTEMA)

// ES MUY IMPORTANTE TENER EN CUENTA QUE EL ARRAY DE FECHAS,CONTIENE LAS FECHAS EN FORMATO STRING Y EN FORMATO SQL  AAAA-MM-DD
function fun_cargar_anio_fecha_custom(arg_array_fechas,arg_div_contenedor,arg_div_anio){
	var select_html="";
	var array_anios=new Array();
	var sub_valores;
	
	for(var i=0;i<arg_array_fechas.length;i++){
		
		fecha_aux=arg_array_fechas[i]; // se ha cambiado la linea de codigo fecha_aux=arg_array_fechas[i]+""; por fecha_aux=arg_array_fechas[i];
		sub_valores=(fecha_aux).split("-");
		array_anios[i]=sub_valores[0];
	}
	
	var array_anios_limpio=fun_limpia_array(array_anios);
	var cont=0;
	for(var i=0;i<array_anios_limpio.length;i++){
		opcion='<option value="'+array_anios_limpio[i]+'">'+array_anios_limpio[i]+'</option>';
		select_html+=opcion;
		cont++;
	}
	$(arg_div_contenedor+" "+arg_div_anio).html(select_html);
	
	$(arg_div_contenedor+" "+arg_div_anio).val(array_anios_limpio[cont-1]);
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_cargar_mes_fecha_custom(arg_array_fechas,arg_div_contenedor,arg_div_mesarg_div_anio){
	
	var select_html="";
	var array_meses=new Array();
	var anio_elegido=$(arg_div_contenedor+" "+arg_div_anio).val();
	var subvalores;
	var cont=0;
	for(var i=0;i<arg_array_fechas.length;i++){
		fecha_aux=arg_array_fechas[i];// se ha cambiado la linea de codigo fecha_aux=arg_array_fechas[i]+""; por fecha_aux=arg_array_fechas[i];
		sub_valores=(fecha_aux).split("-");
		if(sub_valores[0]==anio_elegido){
			array_meses[cont]=sub_valores[1];
			cont++;
		}
	}
	
	var array_meses_limpio=fun_limpia_array(array_meses);
	cont=0;
	for(var i=0;i<array_meses_limpio.length;i++){
		opcion='<option value="'+array_meses_limpio[i]+'">'+nombre_mes(parseFloat(array_meses_limpio[i]))+'</option>';
		select_html+=opcion;
		cont++;
	}
	$(arg_div_contenedor+" "+arg_div_mes).html(select_html);
	
	$(arg_div_contenedor+" "+arg_div_mes).val(array_meses_limpio[cont-1]);
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function fun_cargar_dia_fecha_custom(arg_array_fechas,arg_div_contenedor,arg_div_dia,arg_div_mes,arg_div_anio){
	
	var select_html="";
	var array_dias=new Array();
	var mes_elegido=$(arg_div_contenedor+" "+arg_div_mes).val();
	var anio_elegido=$(arg_div_contenedor+" "+arg_div_anio).val();
	var sub_valores;
	
	var cont=0;
	
	for(var i=0;i<arg_array_fechas.length;i++){
		fecha_aux=arg_array_fechas[i]; // se ha cambiado la linea de codigo fecha_aux=arg_array_fechas[i]+""; por fecha_aux=arg_array_fechas[i];
		sub_valores=(fecha_aux).split("-");
		if(sub_valores[0]==anio_elegido && sub_valores[1]==mes_elegido){
			array_dias[cont]=sub_valores[2];
			cont++;
		}
	}
	
	
	var array_dias_limpio=fun_limpia_array(array_dias);
	
	cont=0;
	for(var i=0;i<array_dias_limpio.length;i++){
		opcion='<option value="'+array_dias_limpio[i]+'">'+array_dias_limpio[i]+'</option>';
		select_html+=opcion;
		cont++;
	}

	$(arg_div_contenedor+" "+arg_div_mes).html(select_html);
	
	$(arg_div_contenedor+" "+arg_div_mes).val(array_dias_limpio[cont-1]);
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


function fun_carga_combobox_anio_personalizado(arg_div_contenedor,arg_id_anio,arg_inicio,arg_fin,arg_tipo){//esta funcion nos servirá para tener valores de un año a otro y pasarlo a un combo box ya sea de tipo ascendente o descendente.
	
	var _hoy= new Date();
	var _hoy_anio=_hoy.getFullYear();
	
	var _inicio=parseFloat(arg_inicio);
	var _fin=parseFloat(arg_fin);
	
	var cadena="";
	
	var detecta_hoy=0;
	
	if(arg_tipo=="asc" || arg_tipo=="ASC"){
	for(var i=_inicio;i<=_fin;i++){
		if(i==_hoy_anio){
			detecta_hoy=1;
		}
		cadena=cadena+'<option value="'+i+'">'+i+'</option>';		
	}	
	}else{
	for(var i=_fin;i>=_inicio;i--){
		if(i==_hoy_anio){
			detecta_hoy=1;
		}
		cadena=cadena+'<option value="'+i+'">'+i+'</option>';
	}
	}
		$(arg_div_contenedor+" "+arg_id_anio).html(cadena);
		
		if(detecta_hoy==1){
			$(arg_div_contenedor+" "+arg_id_anio).val(_hoy_anio);		
		}
}


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


function fun_oracion_hora(arg_hora){  // se le ingresa una hora, puede ser un entero o un string

	var hora=parseFloat(arg_hora);
	var _hora=parseInt(hora);
	if(_hora==0){
		return "Media noche";
	}else{
		
		if(_hora==12){
			return "Medio día";
		}else{
			
			if(_hora>11){
				_hora-=12;
				return _hora+" PM";
			}else{
				return _hora+" AM";
			}
			
		}
	}
}