
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


////////////////////////////estas funciones se vuelven útiles cuando se generan pestañas con nombres de variables, ya que si uno crea una pestaña con un valor llamado   articulo abc, al momento de crear el id, se necesita un valor como id="articulo_abc" ya que separado por espacios es un valor inválido de id
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

function fun_get_objeto(arg_arreglo,arg_id,arg_celda){ /// Se harán comparaciones del objeto arg_id en los objetos del arreglo arg_arreglo, pero en el campo de cada objeto en la celda arg_celda (este es un indice secundario, ya que se supone que estamos tratando de un array de estructuras o mejor dicho, de objetos.) Si en caso hay varias concurrencias en el array, solo devolverá el objeto encontrado por primera vez.
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
//LAS SIGUIENTES FUNCIONES ESTÁN HECHAS PARA TRATAR CARACTERES ESPECIALES
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////





function fun_tratamiento_tildes(arg_palabra){  // ESTA FUNCION CONVIERTE TODOS LOS CARACTERES USADOS EN NUESTRO IDIOMA A SU RESPECTIVA EXPRECION ACUTE (O CODIFICACION HTML) PARA QUE PUEDAN SER GUARDADOS EN LA BASE DE DATOS Y NO TENER PROBLEMAS CON EL IDIOMA DE LA BASE DE DATOS
	var nueva_palabra="";
	cont=0;
	
	for(var i=0;arg_palabra[i];i++){
	
		if(arg_palabra[i]=='á' || arg_palabra[i]=='é' || arg_palabra[i]=="í" || arg_palabra[i]=='ó' || arg_palabra[i]=='ú' || arg_palabra[i]=='Á' || arg_palabra[i]=='É' || arg_palabra[i]=='Í' || arg_palabra[i]=='Ó' || arg_palabra[i]=='Ú' || arg_palabra[i]=='ñ' || arg_palabra[i]=='Ñ' || arg_palabra[i]=='ü' || arg_palabra[i]=='Ü' ){
			
			if(arg_palabra[i]=='á'){
				nueva_palabra=nueva_palabra+"&aacute;";
			}
			
			if(arg_palabra[i]=='é'){
				nueva_palabra=nueva_palabra+"&eacute;";
			}
			
			if(arg_palabra[i]=="í"){
				nueva_palabra=nueva_palabra+"&iacute;";
			}
			
			if(arg_palabra[i]=='ó'){
				nueva_palabra=nueva_palabra+"&oacute;";
			}
			
			if(arg_palabra[i]=='ú'){
				nueva_palabra=nueva_palabra+"&uacute;";
			}
			
			if(arg_palabra[i]=='Á'){
				nueva_palabra=nueva_palabra+"&Aacute;";
			}
			
			if(arg_palabra[i]=='É'){
				nueva_palabra=nueva_palabra+"&Eacute;";
			}
			
			if(arg_palabra[i]=='Í'){
				nueva_palabra=nueva_palabra+"&Iacute;";
			}
			
			if(arg_palabra[i]=='Ó'){
				nueva_palabra=nueva_palabra+"&Oacute;";
			}
			
			if(arg_palabra[i]=='Ú'){
				nueva_palabra=nueva_palabra+"&Uacute;";
			}
			
			if(arg_palabra[i]=='Ñ'){
				nueva_palabra=nueva_palabra+"&Ntilde;";
			}
			
			if(arg_palabra[i]=='ñ'){
				nueva_palabra=nueva_palabra+"&ntilde;";
			}
			
			if(arg_palabra[i]=='ü'){
				nueva_palabra=nueva_palabra+"&uuml;";
			}
			
			if(arg_palabra[i]=='Ü'){
				nueva_palabra=nueva_palabra+"&Uuml;";
			}
			
			
		}else{
			nueva_palabra=nueva_palabra+arg_palabra[i];
		}
	}
	
	return nueva_palabra;
	
}

//////////////////////////////////////////LAS SIGUIENTES 2 FUNCIONES TRABAJAN JUNTAS


function fun_invierte_tratamiento_tildes(arg_palabra){   //ESTA FUNCION SE ENCARGA DE TRANSFORMAR TODOS LOS ACUTES EN SU RESPECTIVO CARACTER, SE UTILIZA PARA IMPRIMIR LOS CARACTERES EN CAMPOS INPUT, YA QUE EN ESTOS LA TRADUCCION POR PARTE DE HTML NO ES AUTOMÁTICA

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
		case "&aacute;":return "á"; break;
		case "&eacute;":return "é"; break;
		case "&iacute;":return "í"; break;
		case "&oacute;":return "ó"; break;
		case "&uacute;":return "ú"; break;
		case "&Aacute;":return "Á"; break;
		case "&Eacute;":return "É"; break;
		case "&Iacute;":return "Í"; break;
		case "&Oacute;":return "Ó"; break;
		case "&Uacute;":return "Ú"; break;
		case "&ntilde;":return "ñ"; break;
		case "&Ntilde;":return "Ñ"; break;
		case "&uuml;":return "ü"; break;
		case "&Uuml;":return "Ü"; break;
	}
	

	}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////