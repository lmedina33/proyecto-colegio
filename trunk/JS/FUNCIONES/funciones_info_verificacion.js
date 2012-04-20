
///////////////funcion que verifica si una cadena está en blanco.
function fun_esblanco(arg_cadena){
	var valores= arg_cadena.split(" ");
	var blanco=true;

	for(var i=0;i<valores.length;i++){
		if(valores[i]){
			blanco=false;
		}
	}
	return blanco;
	
}



/************************************************************************************************************************************************EL SIGUIENTE CONJUNTO DE FUNCIONES SE ENCARGA DE VERIFICAR SI UN DATO PASADO ES UN STRING, O UN FLOAT O UN ENTERO.
PARA ESTO SE USA LA FUNCIÓN FUN_PREVIENE_PRESS CON SUS RESPECTIVOS PARÁMETROS***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/

function fun_validaMonto(arg_id){
			
                    if($(arg_id).val()!="."){
            var num = $(arg_id).val();   //num es un STRING y está representando al valor del input
        	var numlet=num.length;
        	var decimal=0;
    		var contdecimal;      										
        	var porcion=num.substring(0,numlet-1);	
        	if(porcion.indexOf('.')==-1){
				decimal==0;
			}else{
				decimal=1;
				contdecimal=numlet-porcion.indexOf('.')-1;
			}
         								 					 
            var cifra= parseInt(num.charAt(numlet-1));
        													   
            if(isNaN(cifra)){			
            if(num.charAt(numlet-1)=='.' && decimal==0){
				decimal=1;
			}else{
				num=num.substring(0,numlet-1);			
			}
            }else{
				if(decimal==1){
					if(contdecimal<=2){
					contdecimal++;
					}else{
					num=num.substring(0,numlet-1);
					}
				}				
			}
            
        	$(arg_id).val(num);	
        		}else{
					$(arg_id).val("");
				}
}

function fun_validaEntero(arg_id){
    
            var num = $(arg_id).val();   //num es un STRING y está representando al valor del input
      
        	var cifra=num.substring(num.length-1,num.length);  	
			
        	if(isNaN(cifra)){
				num=num.substring(0,num.length-1);
			}
        	
        	$(arg_id).val(num);		
}

function fun_validaCadena(arg_id){
    
            var valor = $(arg_id).val();   //num es un STRING y está representando al valor del input
      
        	var caracter=valor.substring(valor.length-1,valor.length);  	
			
        	if(caracter=="{" || caracter=="}" || caracter=="<" || caracter==">"){
				valor=valor.substring(0,valor.length-1);
			}
        	
        	$(arg_id).val(valor);		
}

function fun_escadenaValida(arg_cadena){
	
	var valores=arg_cadena.split("");
	var esvalida=true;
	for(var i=0;i<valores.length;i++){
		if(valores[i]=="{" || valores[i]=="}" || valores[i]=="<" || valores[i]==">"){
				esvalida=false;
				i=valores.length;
		}		
	}
	return esvalida;
}

function fun_esnumeroValido(arg_cadena){
	var valores=arg_cadena.split("");
	var esvalida=true;
	for(var i=0;i<valores.length;i++){
		if(isNaN(valores[i]) || valores[i]==" "){
			
				esvalida=false;
				i=valores.length;	
			
				
		}		
	}
	return esvalida;
}

function fun_esfloatValido(arg_cadena){
		var valores=arg_cadena.split("");
	var esvalida=true;
	var primerpunto=false;
	for(var i=0;i<valores.length;i++){
		if(isNaN(valores[i]) || valores[i]==" "){
			if(valores[i]=="."){
			if(primerpunto){
				esvalida=false;
				i=valores.length;
			}else{
				if(i==0){
				esvalida=false;
				i=valores.length;	
				primerpunto=true;	
				}else{
				primerpunto=true;	
				}
				
			}
			}else{
				
				esvalida=false;
				i=valores.length;
			}
				
		}		
	}
	return esvalida;
}


function fun_previene_press(arg_id,arg_evento,arg_validacion){ //validacion toma los valores Float, Entero y Cadena
	//	alert("hola");
		if(arg_evento=="down"){
			if(!GLOBAL_TECLA_APRETADA){
			GLOBAL_TECLA_APRETADA=true;
			var cadena=$(arg_id).val();
			if(cadena){
				GLOBAL_TCL_APRTD_LENGTH_APOYO=cadena.length;
			}else{
				GLOBAL_TCL_APRTD_LENGTH_APOYO=0;
			}
			}
		}else{
			
		
			var cadena=$(arg_id).val();
		
			if(cadena.length==GLOBAL_TCL_APRTD_LENGTH_APOYO+1){
				switch(arg_validacion){
					case "float":fun_validaMonto(arg_id);
					cadena=$(arg_id).val();
					
					/*alert(cadena);
					alert(fun_esfloatValido(cadena));*/
					if(!fun_esfloatValido(cadena)){
						$(arg_id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(arg_id).val("");
						}/*else{
							$(id).val(parseFloat(cadena));
						}*/
							
					}
					 break;
					case "entero":fun_validaEntero(arg_id); 
					cadena=$(arg_id).val();
					/*alert(cadena);
					alert(fun_esnumeroValido(cadena));*/
					if(!fun_esnumeroValido(cadena)){
						$(arg_id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(arg_id).val("");
						}else{
							$(arg_id).val(parseFloat(cadena));
						}
							
					}
					break;
					case "cadena":fun_validaCadena(arg_id);
					cadena=$(arg_id).val();
					if(!fun_escadenaValida(cadena)){
						$(arg_id).val("");
					}
					break;
				}
	
			}else{
				switch(arg_validacion){
					case "float":
					/*alert(cadena);
					alert(fun_esfloatValido(cadena));*/
					if(!fun_esfloatValido(cadena)){
						$(arg_id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(arg_id).val("");
						}/*else{
							$(id).val(parseFloat(cadena));
						}*/
							
					}
					 break;
					case "entero":
					
					/*alert(cadena);
					alert(fun_esnumeroValido(cadena));*/
					if(!fun_esnumeroValido(cadena)){
						$(arg_id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(arg_id).val("");
						}else{
							$(arg_id).val(parseFloat(cadena));
						}
							
					}
					 break;
					case "cadena":
			
					if(!fun_escadenaValida(cadena)){
						$(arg_id).val("");
					}
					break;
				}
				
			}
			GLOBAL_TECLA_APRETADA=false;
		}
}


