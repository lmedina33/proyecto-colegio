var BOXSHADOW="nada";


function efecto_presion(id){
	
				if(BOXSHADOW=="nada"){ //se aplica un cambio al box shadow
					BOXSHADOW=$("#"+id).css("box-shadow");
					
				$("#"+id).css("box-shadow","1px 1px 3px #444");
				valores=BOXSHADOW.split(" ");
				ancho_shadow=valores[5];
				valores=ancho_shadow.split("px");
				ancho_shadow_num=parseInt(valores[0]);
			
				ancho_desplazamiento=ancho_shadow_num-3;
			
				$("#"+id).css("margin-left",ancho_desplazamiento+"px");
				$("#"+id).css("margin-top",ancho_desplazamiento+"px");
				$("#"+id).css("margin-right","0px");
				$("#"+id).css("margin-bottom","0px");
				
				
				}else{ // se reestablece su valor					
				$("#"+id).css("box-shadow",BOXSHADOW);
				valores=BOXSHADOW.split(" ");
				ancho_shadow=valores[5];
				valores=ancho_shadow.split("px");
				ancho_shadow_num=parseInt(valores[0]);
			
				ancho_desplazamiento=ancho_shadow_num-3;
			
				$("#"+id).css("margin-left","0px");
				$("#"+id).css("margin-top","0px");
				$("#"+id).css("margin-right",ancho_desplazamiento+"px");
				$("#"+id).css("margin-bottom",ancho_desplazamiento+"px");
				BOXSHADOW="nada";
				}				
            }


//Funcion dinámica para abrir un area ligada a una pestaña del menu principal
function abrir_area(opcion){//opcion sera stock, mantenimiento, compras o proveedores
				
				
				$("#menu_"+opcion).show();
				$("#boton_atras").show();
				$("#escritorio").show();
				$("#area_"+opcion).show();
				$("#menu_inicio").hide();
					
			
			
        }
            
//Funcion dinámica para abrir un contenido de una área específica
function abrir_contenido(contenido,area){ //contenido será la sub opcion (registrar,consultar etc) y el area será compras, stock, etc
		 $(".contenido_"+area).hide();
		 $("#contenido_"+contenido+"_"+area).fadeIn(500);
		 if(area=="stock"){
		  	if(contenido=="general" || contenido=="salidas"){
				$("#menu_vertical").hide();
		     $("#pagina").css("margin-left","12.5%");
		     $("#esquina_adorno_submenu").html('<div id="no_esquina_submenu"></div>');
			}else{
				$("#menu_vertical").show();
				$("#pagina").css("margin-left","2%");
				$("#esquina_adorno_submenu").html('<div id="esquina_submenu"></div>');
			}
		}
}

function area_atras(){
			if($("#menu_stock").css("display")!="none"){
		     $("#menu_vertical").hide();
		     $("#pagina").css("margin-left","12.5%");
		     $("#esquina_adorno_submenu").html('<div id="no_esquina_submenu"></div>');
			 $(".menu_horizontal").hide();			 
			 $("#boton_atras").hide();
			 $(".area").hide();
			 $("#escritorio").hide();
			 
			$("#menu_inicio").show();		
			
			}else{
			 $(".menu_horizontal").hide();			 
			 $("#boton_atras").hide();
			 $(".area").hide();
			 $("#escritorio").hide();
			 
			$("#menu_inicio").show();		
		
			 
			}
			
					
			$("#boton_farmacia").show();	
}            

/*las siguientes funciones se aplican para la sub área de farmacia*/

//Funcion dinámica para abrir un area ligada a una pestaña del menu principal
function farm_abrir_area(opcion){//opcion sera farm_stock, farm_compras o farm_proveedores
				
				if(opcion=="farm_stock"){
					$("#escritorio").show();
					
					$("#menu_"+opcion).show();
					$("#farm_boton_atras").show();
					$("#area_"+opcion).show();
					
					if($("#contenido_farm_categorias_stock").css("display")!="none"){
						$("#farm_menu_vertical").show();
						$("#pagina").css("margin-left","2%");
						$("#esquina_adorno_submenu").html('<div id="esquina_submenu"></div>');
					}
					
					$("#menu_inicio_farmacia").hide();
				}else{
				$("#menu_"+opcion).show();
				$("#farm_boton_atras").show();
				$("#escritorio").show();
				$("#area_"+opcion).show();
				
				$("#menu_inicio_farmacia").hide();
						
				}	
				$("#boton_logistica").hide();		
				$("#boton_farmacia").hide();		
            }
            
//Funcion dinámica para abrir un contenido de una área específica
function farm_abrir_contenido(contenido,area){ //contenido será la sub opcion (registrar,consultar etc) y el area será compras, stock, etc
		 $(".contenido_farm_"+area).hide();
		 $("#contenido_farm_"+contenido+"_"+area).fadeIn(500);
		 if(area=="stock"){
		  	if(contenido=="general" || contenido=="salidas"){
				$("#farm_menu_vertical").hide();
		     $("#pagina").css("margin-left","12.5%");
		     $("#esquina_adorno_submenu").html('<div id="no_esquina_submenu"></div>');
			}else{
				$("#farm_menu_vertical").show();
				$("#pagina").css("margin-left","2%");
				$("#esquina_adorno_submenu").html('<div id="esquina_submenu"></div>');
			}
		}
}

function farm_area_atras(){
			if($("#menu_farm_stock").css("display")!="none"){
		     $("#farm_menu_vertical").hide();
		     $("#pagina").css("margin-left","12.5%");
		     $("#esquina_adorno_submenu").html('<div id="no_esquina_submenu"></div>');
			 $(".menu_horizontal").hide();			 
			 $("#farm_boton_atras").hide();
			 $(".area").hide();
			 $("#escritorio").hide();
			 
			$("#menu_inicio_farmacia").show();		
			
			}else{
			 $(".menu_horizontal").hide();			 
			 $("#farm_boton_atras").hide();
			 $(".area").hide();
			 $("#escritorio").hide();
			 
			$("#menu_inicio_farmacia").show();		
		
			 
			}
			
				
			$("#boton_logistica").show();	
}

            
/************************/



function mostrar_logistica(){
			$("#boton_logistica").hide();
			$("#boton_farmacia").show();
			$("#menu_inicio").show();
			$("#menu_inicio_farmacia").hide();
}

function mostrar_submodulo_farmacia(){
			$("#boton_logistica").show();
			$("#boton_farmacia").hide();
			$("#menu_inicio").hide();
			$("#menu_inicio_farmacia").show();
}

function pestana_activa(pestana,ventana){
		  $(".boton_submenu").css("margin-left","40px");
          $("#pestsecun_"+pestana+"_"+ventana).css("margin-left","70px");
          
}

function pestana_over(pestana,ventana){
				
				
               if($("#pestsecun_"+pestana+"_"+ventana).css("margin-left")=="40px"){
			
                 $("#pestsecun_"+pestana+"_"+ventana).css("margin-left","50px");}
                
             
            }
            

function pestana_out(pestana,ventana){
				
				if($("#pestsecun_"+pestana+"_"+ventana).css("margin-left")=="50px"){
			
                 $("#pestsecun_"+pestana+"_"+ventana).css("margin-left","40px");}
             
            }


function resalta_fila(fila_resaltar,div){


		$("#"+div+" tr").css("color","black");
		$("#"+div+" td").css("background-color","white");
		$("#"+div+" tr").attr("title",'click para seleccionar fila');
		$("#"+div+" #"+fila_resaltar+" td").fadeOut(20);	
		$("#"+div+" #"+fila_resaltar+" td").css("background-color","blue");	
		$("#"+div+" #"+fila_resaltar+" td").each(function(){
		if($(this).css("display")!="none"){
			$(this).fadeIn(400);
		}	
		
		});
			
		$("#"+div+" #"+fila_resaltar).css("color","white");
		$("#"+div+" #"+fila_resaltar).attr("title",'fila seleccionada');
		
		estado_vencimiento(div);
		
}

function obtener_id_fila_restaltada(div){ //div que contiene la tabla
	id="nada";
	$("#"+div+" table tr").each(function(){
		if($(this).children().css("background")=="blue"){
			subcadenas=$(this).html().split(">");
			subcadenas2=subcadenas[1].split("<");
			id=subcadenas2[0];
		}
	});
	return id;
}

function estado_vencimiento(div){

	if(div=="tabla_detalles_stock"){
	
		cont=0;	
		$("#tabla_detalles_stock tr").each(function(){
			
			
			resultado=compara_fechas(cambia_formato_fecha(DETALLES_STOCK[cont][4],"normal"),cambia_formato_fecha(fecha_string(HOY_DIA,HOY_MES,HOY_ANIO),"normal"));
		
			if(resultado==0 || resultado==2){
				$(this).children().each(function(){
				
				 if($(this).css("background-color")=="white" || $(this).css("background-color")=="rgba(0, 0, 0, 0)"){
					$(this).css("background-color","red")
					$(this).css("color","white")
										
				}
				});
				//alert($(this "td").css("background-color"));
				
			}
			cont++;
		});
	}
}

function compara_fechas(fecha1,fecha2){ //si retorna 1, fecha1>fecha2, si retorna 2, fecha2 > fecha1, si retorna 0, son iguales
	
	vals=fecha1.split("-");
	dia1=parseFloat(vals[0]);
	mes1=parseFloat(vals[1]);
	anio1=parseFloat(vals[2]);
	
	vals=fecha2.split("-");
	dia2=parseFloat(vals[0]);
	mes2=parseFloat(vals[1]);
	anio2=parseFloat(vals[2]);
	
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
function mostrar_id_oculto(id){ //muestra un id que está oculto
			$('#'+id).show();								
}

            
function ocultar_id(id){ //oculta un id visible
			$('#'+id).hide();								
}

function mostrar_id_oculto_slide(id){ //muestra un id que está oculto
			$('#'+id).show(300);								
}

            
function ocultar_id_slide(id){ //oculta un id visible
			$('#'+id).hide(300);								
}

function carga_combobox_anio(div_contenedor,id_anio,inicio,fin){
	var cadena="";
	for(var i=fin;i>=inicio;i--){
		cadena=cadena+'<option value="'+i+'">'+i+'</option>';
	}
		$(div_contenedor+" "+id_anio).html(cadena);
		$(div_contenedor+" "+id_anio).val(fin);
		
}

function armar_fecha(mes,dia,anio){
		
fecha=anio;
if(mes<10){
fecha=fecha+"-0"+mes;	
}
else{	
fecha=fecha+"-"+mes;
}

if(dia<10){	
fecha=fecha+"-0"+dia;
}
else{
	
fecha=fecha+"-"+dia;
}
return fecha;
}


function carga_combobox_dia(div_contenedor,id_mes,id_dia,id_anio){ //ejemplo div_contenedor=#AREA_COMPRAS   id_mes="#mes_vencimiento" 

		var cadena2='<option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option>'+
					'<option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option>'+
					'<option value="9" >9</option><option value="10" >10</option><option value="11" >11</option>'+
					'<option value="12" >12</option><option value="13" >13</option><option value="14" >14</option>'+
					'<option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option>'+
					'<option value="19" >19</option><option value="20" >20</option><option value="21" >21</option>'+
					'<option value="22" >22</option><option value="23" >23</option><option value="24" >24</option>'+
					'<option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option>';
				
				switch($(div_contenedor+" "+id_mes).val()){
					case "1":case "3":case "5":
					case "7":case "8":case "10":
					case "12":					
					$(div_contenedor+" "+id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option><option value="31" >31</option>');
					
					break;
					case "4":case "6":case "9":
					case "11": 
					$(div_contenedor+" "+id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option>');
					break;
					case "2":
					if(parseInt($(div_contenedor+" "+id_anio).val())%4==0){
					$(div_contenedor+" "+id_dia).html(cadena2+'<option value="29" >29</option>');
					}else{
						$(div_contenedor+" "+id_dia).html(cadena2);
					}
					break;
				}	
								
}

function combobox_mes_change(div_contenedor,id_mes,id_dia,id_anio){
	
	var cadena2='<option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option>'+
					'<option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option>'+
					'<option value="9" >9</option><option value="10" >10</option><option value="11" >11</option>'+
					'<option value="12" >12</option><option value="13" >13</option><option value="14" >14</option>'+
					'<option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option>'+
					'<option value="19" >19</option><option value="20" >20</option><option value="21" >21</option>'+
					'<option value="22" >22</option><option value="23" >23</option><option value="24" >24</option>'+
					'<option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option>';
					
				switch($(div_contenedor+" "+id_mes).val()){
					case "1":case "3":case "5":
					case "7":case "8":case "10":
					case "12":					
					$(div_contenedor+" "+id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option><option value="31" >31</option>');
					
					break;
					case "4":case "6":case "9":
					case "11":
					$(div_contenedor+" "+id_dia).html(cadena2+'<option value="29" >29</option><option value="30" >30</option>');
					break;
					case "2":
					if(parseInt($(div_contenedor+" "+id_anio).val())%4==0){
					$(div_contenedor+" "+id_dia).html(cadena2+'<option value="29" >29</option>');
					}else{
						$(div_contenedor+" "+id_dia).html(cadena2);
					}
					break;
				}	
}	

function combobox_anio_change(div_contenedor,id_mes,id_dia,id_anio){
	var cadena2='<option value="1" >1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option>'+
					'<option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option>'+
					'<option value="9" >9</option><option value="10" >10</option><option value="11" >11</option>'+
					'<option value="12" >12</option><option value="13" >13</option><option value="14" >14</option>'+
					'<option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option>'+
					'<option value="19" >19</option><option value="20" >20</option><option value="21" >21</option>'+
					'<option value="22" >22</option><option value="23" >23</option><option value="24" >24</option>'+
					'<option value="25" >25</option><option value="26" >26</option><option value="27" >27</option><option value="28" >28</option>';
					
		if(parseInt($(div_contenedor+" "+id_anio).val())%4==0 && $(div_contenedor+" "+id_mes).val()=="2"){
					$(div_contenedor+" "+id_dia).html(cadena2+'<option value="29" >29</option>');
					}
		if(parseInt($(div_contenedor+" "+id_anio).val())%4!=0 && $(div_contenedor+" "+id_mes).val()=="2"){
					$(div_contenedor+" "+id_dia).html(cadena2);
					}
}

function fecha_string(dia,mes,anio){
	s_dia="";
	s_mes="";
	s_anio="";
	if(dia<10){
		s_dia="0"+dia;		
	}else{
		s_dia=dia;
	}
	if(mes<10){
		s_mes="0"+mes;
	}else{
		s_mes=mes;
	}
	
	return anio+"-"+s_mes+"-"+s_dia;
	
}

function cambia_formato_fecha(fecha,tipo){ //la fecha ke se ingresa ya tiene este formato 2011-05-03, se pasa a tipo normal o codigo

	valores_f=fecha.split("-");
	return valores_f[2]+"-"+valores_f[1]+"-"+valores_f[0]; //retorna el formato dia-mes-anio
}

function limpia_array(arreglo){  //me devuelve el arreglo pero sin elementos repetidos

	var nuevo_arreglo=new Array();
	var cont=0;

	for(var i=0;arreglo[i];i++){
			
		valor=arreglo[i];
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


function esblanco(cadena){
	var valores= cadena.split(" ");
	var blanco=true;
	for(var i=0;i<valores.length;i++){
		if(valores[i]){
			blanco=false;
		}
	}
	return blanco;
	
}

function backgroundblanco(id){
	$("#"+id).css("background","white");
	$("#"+id).css("color","black");
	
}


function aviso_popup(texto,titulo,ancho,top){

	$("#popup_aviso #texto_aviso").html(texto);
	$("#popup_aviso #titulo_aviso").html(titulo);
	$("#popup_aviso").css("min-width",ancho+"%");
	$("#popup_aviso").css("left",((100-ancho)/2)+"%");
	$("#popup_aviso").css("top",top+"%");
	
	
	$("#div_back").fadeIn(500);
	$("#popup_aviso").fadeIn(500);
	
}

function cerrar_aviso(){
	$("#div_back").fadeOut(500);
	$("#popup_aviso").fadeOut(500);
}


function sobreaviso_popup(texto,titulo,ancho,top){

	$("#popup_aviso2 #texto_aviso").html(texto);
	$("#popup_aviso2 #titulo_aviso").html(titulo);
	$("#popup_aviso2").css("width",ancho+"%");
	$("#popup_aviso2").css("left",((100-ancho)/2)+"%");
	$("#popup_aviso2").css("top",top+"%");
	
	
	$("#div_back2").fadeIn(500);
	$("#popup_aviso2").fadeIn(500);
	
}
function cerrar_sobreaviso(){
	$("#div_back2").fadeOut(500);
	$("#popup_aviso2").fadeOut(500);
}

function quita_guiones(cadena){
	nueva_cadena="";
	sub_val=cadena.split("_");
			
			for(var j=0;sub_val[j];j++){
				nueva_cadena+=sub_val[j];
				if(sub_val[j+1]){
					nueva_cadena+=" ";
				}
			}
    return nueva_cadena;
}

function reemplaza_espacioxguiones(cadena){
	nueva_cadena="";
	sub_val=cadena.split(" ");
			
			for(var j=0;sub_val[j];j++){
				nueva_cadena+=sub_val[j];
				if(sub_val[j+1]){
					nueva_cadena+="_";
				}
			}
    return nueva_cadena;
}

function nombre_mes(numero){
	var num=parseFloat(numero);
	switch(num){
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

function edad_fecha_hoy(dia_nac,mes_nac,anio_nac){

	var edad=HOY_ANIO-anio_nac;
	if(HOY_MES>mes_nac){
		return edad;
	}else{
		if(HOY_MES<mes_nac){
			return edad-1;
		}else{
			if(HOY_DIA>=dia_nac){
				return edad;
			}else{
				return edad-1;
			}
		}
		
	}
}

function oracion_fecha(fecha){ //formato aaaa/mm/dd
	var valores=fecha.split("-");
	var anio=valores[0];
	var mes=nombre_mes(parseFloat(valores[1]));
	var dia=parseFloat(valores[2]);
	
	return dia+" de "+mes+" del "+anio;
}

function oracion_hora(hora){
	var oracion="";
	if(hora==0){
		return "Media noche";
	}else{
		
		if(hora==12){
			return "Medio día";
		}else{
			
			if(hora>11){
				hora-=12;
				return hora+" PM";
			}else{
				return hora+" AM";
			}
			
		}
	}
}

/////////////////////////////////////////////////////
function escadenaValida(cadena){
	
	var valores=cadena.split("");
	var esvalida=true;
	for(var i=0;i<valores.length;i++){
		if(valores[i]=="{" || valores[i]=="}" || valores[i]=="<" || valores[i]==">"){
				esvalida=false;
				i=valores.length;
		}		
	}
	return esvalida;
}

function esnumeroValido(cadena){
	var valores=cadena.split("");
	var esvalida=true;
	for(var i=0;i<valores.length;i++){
		if(isNaN(valores[i]) || valores[i]==" "){
			
				esvalida=false;
				i=valores.length;	
			
				
		}		
	}
	return esvalida;
}

function esfloatValido(cadena){
		var valores=cadena.split("");
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

function previene_press(id,evento,validacion){ //validacion toma los valores Float, Entero y Cadena
	//	alert("hola");
		if(evento=="down"){
			if(!VARIABLE_APRETADO){
			VARIABLE_APRETADO=true;
			var cadena=$(id).val();
			if(cadena){
				VARIABLE_LENGTH_APOYO=cadena.length;
			}else{
				VARIABLE_LENGTH_APOYO=0;
			}
			}
		}else{
			
		
			var cadena=$(id).val();
		
			if(cadena.length==VARIABLE_LENGTH_APOYO+1){
				switch(validacion){
					case "float":validaMonto(id);
					cadena=$(id).val();
					
					/*alert(cadena);
					alert(esfloatValido(cadena));*/
					if(!esfloatValido(cadena)){
						$(id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(id).val("");
						}/*else{
							$(id).val(parseFloat(cadena));
						}*/
							
					}
					 break;
					case "entero":validaEntero(id); 
					cadena=$(id).val();
					/*alert(cadena);
					alert(esnumeroValido(cadena));*/
					if(!esnumeroValido(cadena)){
						$(id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(id).val("");
						}else{
							$(id).val(parseFloat(cadena));
						}
							
					}
					break;
					case "cadena":validaCadena(id);
					cadena=$(id).val();
					if(!escadenaValida(cadena)){
						$(id).val("");
					}
					break;
				}
	
			}else{
				switch(validacion){
					case "float":
					/*alert(cadena);
					alert(esfloatValido(cadena));*/
					if(!esfloatValido(cadena)){
						$(id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(id).val("");
						}/*else{
							$(id).val(parseFloat(cadena));
						}*/
							
					}
					 break;
					case "entero":
					
					/*alert(cadena);
					alert(esnumeroValido(cadena));*/
					if(!esnumeroValido(cadena)){
						$(id).val("");
					}else{
						if(isNaN(parseFloat(cadena))){
							$(id).val("");
						}else{
							$(id).val(parseFloat(cadena));
						}
							
					}
					 break;
					case "cadena":
			
					if(!escadenaValida(cadena)){
						$(id).val("");
					}
					break;
				}
				
			}
			VARIABLE_APRETADO=false;
		}
}



function validaMonto(id){

                    if($(id).val()!="."){
            var num = $(id).val();   //num es un STRING y está representando al valor del input
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
            
        	$(id).val(num);	
        		}else{
					$(id).val("");
				}
}

function validaEntero(id){
    
            var num = $(id).val();   //num es un STRING y está representando al valor del input
      
        	var cifra=num.substring(num.length-1,num.length);  	
			
        	if(isNaN(cifra)){
				num=num.substring(0,num.length-1);
			}
        	
        	$(id).val(num);		
}

function validaCadena(id){
    
            var valor = $(id).val();   //num es un STRING y está representando al valor del input
      
        	var caracter=valor.substring(valor.length-1,valor.length);  	
			
        	if(caracter=="{" || caracter=="}" || caracter=="<" || caracter==">"){
				valor=valor.substring(0,valor.length-1);
			}
        	
        	$(id).val(valor);		
}

////////////////////////////////////////////////////

function sumar_divs(div_sumando1,div_sumando2,div_suma){
	var s1=parseFloat($(div_sumando1).val());
	var s2=parseFloat($(div_sumando2).val());
	
	if(isNaN(s1)){
		s1=0;
	}
	
	if(isNaN(s2)){
		s2=0;
	}
	
	$(div_suma).val((s1+s2).toFixed(2));
		
}




function pregunta_popup(texto,titulo,accion,accion_cerrar,ancho,top){
	
	$("#popup_pregunta #texto_aviso").html(texto);
	$("#popup_pregunta #titulo_aviso").html(titulo);
	$("#popup_pregunta").css("min-width",ancho+"%");
	$("#popup_pregunta").css("left",((100-ancho)/2)+"%");
	$("#popup_pregunta").css("top",top+"%");
	
	$("#popup_pregunta #pregunta_decision_opcion").val(accion);
	$("#popup_pregunta #pregunta_decision_cerrar").val(accion_cerrar);
	
	
	$("#div_back2").fadeIn(300);
	$("#popup_pregunta").fadeIn(300);
}

function cerrar_popup_pregunta(){
	$("#div_back2").fadeOut(300);
	$("#popup_pregunta").fadeOut(300);
}







function tratamiento_tildes(palabra){
	var nueva_palabra="";
	cont=0;
	
	for(var i=0;palabra[i];i++){
	
		if(palabra[i]=='á' || palabra[i]=='é' || palabra[i]=="í" || palabra[i]=='ó' || palabra[i]=='ú' || palabra[i]=='Á' || palabra[i]=='É' || palabra[i]=='Í' || palabra[i]=='Ó' || palabra[i]=='Ú' || palabra[i]=='ñ' || palabra[i]=='Ñ' || palabra[i]=='ü' || palabra[i]=='Ü' ){
			
			if(palabra[i]=='á'){
				nueva_palabra=nueva_palabra+"&aacute;";
			}
			
			if(palabra[i]=='é'){
				nueva_palabra=nueva_palabra+"&eacute;";
			}
			
			if(palabra[i]=="í"){
				nueva_palabra=nueva_palabra+"&iacute;";
			}
			
			if(palabra[i]=='ó'){
				nueva_palabra=nueva_palabra+"&oacute;";
			}
			
			if(palabra[i]=='ú'){
				nueva_palabra=nueva_palabra+"&uacute;";
			}
			
			if(palabra[i]=='Á'){
				nueva_palabra=nueva_palabra+"&Aacute;";
			}
			
			if(palabra[i]=='É'){
				nueva_palabra=nueva_palabra+"&Eacute;";
			}
			
			if(palabra[i]=='Í'){
				nueva_palabra=nueva_palabra+"&Iacute;";
			}
			
			if(palabra[i]=='Ó'){
				nueva_palabra=nueva_palabra+"&Oacute;";
			}
			
			if(palabra[i]=='Ú'){
				nueva_palabra=nueva_palabra+"&Uacute;";
			}
			
			if(palabra[i]=='Ñ'){
				nueva_palabra=nueva_palabra+"&Ntilde;";
			}
			
			if(palabra[i]=='ñ'){
				nueva_palabra=nueva_palabra+"&ntilde;";
			}
			
			if(palabra[i]=='ü'){
				nueva_palabra=nueva_palabra+"&uuml;";
			}
			
			if(palabra[i]=='Ü'){
				nueva_palabra=nueva_palabra+"&Uuml;";
			}
			
			
		}else{
			nueva_palabra=nueva_palabra+palabra[i];
		}
	}
	
	return nueva_palabra;
	
}




function invierte_tratamiento_tildes(palabra){
	var nueva_palabra="";
	var indice_ini=1,indice_fin;
	
	while(indice_ini!=-1){
		indice_ini=palabra.indexOf("&");
		indice_fin=palabra.indexOf(";");
		
		if(indice_ini!=-1){
			letra_equivalente=letra_tilde_equiv(palabra.substring(indice_ini,indice_fin+1));
			
			palabra=palabra.substring(0,indice_ini)+letra_equivalente+palabra.substring(indice_fin+1,palabra.length);
			
		}
	}
	return palabra;
}

	
function letra_tilde_equiv(codigo){
	
	switch(codigo){
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