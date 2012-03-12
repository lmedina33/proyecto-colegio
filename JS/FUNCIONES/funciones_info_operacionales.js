
function fun_limpia_array(arg_arreglo){  //me devuelve el arreglo pero sin elementos repetidos

	var nuevo_arreglo=new Array();
	var cont=0;
	var valor;
	var existe;
	for(var i=0;i<arg_arreglo.length;i++){
			
		valor=arg_arreglo[i];
		existe=0;
		for(var j=0;j<cont;j++){
			if(nuevo_arreglo[j]==valor){
				existe=1;
			}
		}
		if(existe==0){
			nuevo_arreglo[cont]=valor;
			cont++;
		}
	}
	return nuevo_arreglo;
}


////////////////////////////estas funciones se vuelven �tiles cuando se generan pesta�as con nombres de variables, ya que si uno crea una pesta�a con un valor llamado   articulo abc, al momento de crear el id, se necesita un valor como id="articulo_abc" ya que separado por espacios es un valor inv�lido de id
function fun_guiones_por_espacios(arg_cadena){
	var nueva_cadena="";
	var sub_val=arg_cadena.split("_");
			
			for(var j=0;sub_val[j];j++){
				nueva_cadena+=sub_val[j];
				if(sub_val[j+1]){
					nueva_cadena+=" ";
				}
			}
    return nueva_cadena;
}


function fun_espacios_por_guiones(arg_cadena){
	nueva_cadena="";
	sub_val=arg_cadena.split(" ");
			
			for(var j=0;sub_val[j];j++){
				nueva_cadena+=sub_val[j];
				if(sub_val[j+1]){
					nueva_cadena+="_";
				}
			}
    return nueva_cadena;
}


////////////////////////////////////////////////

function fun_get_objeto(arg_arreglo,arg_id,arg_celda){ /// Se har�n comparaciones del objeto arg_id en los objetos del arreglo arg_arreglo, pero en el campo de cada objeto en la celda arg_celda (este es un indice secundario, ya que se supone que estamos tratando de un array de estructuras o mejor dicho, de objetos.) Si en caso hay varias concurrencias en el array, solo devolver� el objeto encontrado por primera vez.
	var objeto;
	var fin=0;

	for(var i=0;i<arg_arreglo.length && fin!=1;i++){
	//	alert("compara  "+arreglo[i][0]+"   "+id);
		if(arg_arreglo[i][arg_celda]==arg_id){
		//	alert("hola");
			fin=1;
			objeto=arg_arreglo[i];
		}
	}
	
	
	
	return objeto;
}

////////////////////////////////////////////////////////


function fun_pasar_numeracion_string(arg_numero,arg_num_cifras){  //se encarga de pasar un numero a una numeracion en string donde se le anteponen tantos ceros como se necesiten para completar el numero de cifras que se necesiten
     var cadena_ceros="";
     
     var num_string=arg_numero+" ";
     
     for(var i=0;i<arg_num_cifras-num_string.length+1;i++){
		cadena_ceros=cadena_ceros+"0";
	}
	return cadena_ceros+arg_numero;
}



function fun_restar_divs(arg_div_minuendo,arg_div_sustraendo,arg_div_diferencia){
	var m=parseFloat($(arg_div_minuendo).val());
	var s=parseFloat($(arg_div_sustraendo).val());

	if(isNaN(m)){
		m=0;
	}
		
	if(isNaN(s)){
		s=0;
	}
	
	$(arg_div_diferencia).val((m-s).toFixed(2));
		
}



function fun_sumar_divs(arg_div_sumando1,arg_div_sumando2,arg_div_suma){
	var s1=parseFloat($(arg_div_sumando1).val());
	var s2=parseFloat($(arg_div_sumando2).val());
	
	if(isNaN(s1)){
		s1=0;
	}
	
	if(isNaN(s2)){
		s2=0;
	}
	
	$(arg_div_suma).val((s1+s2).toFixed(2));
		
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//LAS SIGUIENTES FUNCIONES EST�N HECHAS PARA TRATAR CARACTERES ESPECIALES
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////





function fun_tratamiento_tildes(arg_palabra){  // ESTA FUNCION CONVIERTE TODOS LOS CARACTERES USADOS EN NUESTRO IDIOMA A SU RESPECTIVA EXPRECION ACUTE (O CODIFICACION HTML) PARA QUE PUEDAN SER GUARDADOS EN LA BASE DE DATOS Y NO TENER PROBLEMAS CON EL IDIOMA DE LA BASE DE DATOS
	var nueva_palabra="";
	cont=0;
	
	for(var i=0;arg_palabra[i];i++){
	
		if(arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=="�" || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' || arg_palabra[i]=='�' ){
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&aacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&eacute;";
			}
			
			if(arg_palabra[i]=="�"){
				nueva_palabra=nueva_palabra+"&iacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&oacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&uacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&Aacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&Eacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&Iacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&Oacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&Uacute;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&Ntilde;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&ntilde;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&uuml;";
			}
			
			if(arg_palabra[i]=='�'){
				nueva_palabra=nueva_palabra+"&Uuml;";
			}
			
			
		}else{
			nueva_palabra=nueva_palabra+arg_palabra[i];
		}
	}
	
	return nueva_palabra;
	
}

//////////////////////////////////////////LAS SIGUIENTES 2 FUNCIONES TRABAJAN JUNTAS


function fun_invierte_tratamiento_tildes(arg_palabra){   //ESTA FUNCION SE ENCARGA DE TRANSFORMAR TODOS LOS ACUTES EN SU RESPECTIVO CARACTER, SE UTILIZA PARA IMPRIMIR LOS CARACTERES EN CAMPOS INPUT, YA QUE EN ESTOS LA TRADUCCION POR PARTE DE HTML NO ES AUTOM�TICA

	var indice_ini=1,indice_fin;
	
	while(indice_ini!=-1){
		indice_ini=arg_palabra.indexOf("&");
		indice_fin=arg_palabra.indexOf(";");
		
		if(indice_ini!=-1){
			letra_equivalente=fun_caracter_equiv(arg_palabra.substring(indice_ini,indice_fin+1));
			
			arg_palabra=arg_palabra.substring(0,indice_ini)+letra_equivalente+arg_palabra.substring(indice_fin+1,arg_palabra.length);
			
		}
	}
	return arg_palabra;
}

	
function fun_caracter_equiv(arg_codigo){
	
	switch(arg_codigo){
		case "&aacute;":return "�"; break;
		case "&eacute;":return "�"; break;
		case "&iacute;":return "�"; break;
		case "&oacute;":return "�"; break;
		case "&uacute;":return "�"; break;
		case "&Aacute;":return "�"; break;
		case "&Eacute;":return "�"; break;
		case "&Iacute;":return "�"; break;
		case "&Oacute;":return "�"; break;
		case "&Uacute;":return "�"; break;
		case "&ntilde;":return "�"; break;
		case "&Ntilde;":return "�"; break;
		case "&uuml;":return "�"; break;
		case "&Uuml;":return "�"; break;
	}
	

	}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////