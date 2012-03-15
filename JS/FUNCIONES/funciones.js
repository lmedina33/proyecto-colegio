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
				$(".area").hide();
				$(".menu_pestana").attr("title","Activar");
			
			/////////////////////////////////////////////////////////////
				$("#area_"+opcion).show();
				$("#pest_"+opcion).attr("title","Activada");
			
}
            

function pestana_activa(pestana,ventana){
		  $(".boton_submenu").css("margin-left","40px");
          $("#pestsecun_"+pestana+"_"+ventana).css("margin-left","70px");
          
}

function pestana_over(opcion){				
               
			$("#pest_"+opcion).css("font-weight","bold");
			$("#pest_"+opcion+" table tr td").css("text-decoration","underline");
}
            

function pestana_out(opcion){
				
				
			$("#pest_"+opcion).css("font-weight","");
			$("#pest_"+opcion+" table tr td").css("text-decoration","");
             
}



function fun_stand_by_sistema(tiempo_microsegundos){  //esta función sirve para proteger toda la interfaz y no permitir ningun movimiento por el tiempo en microsegundos planteado. Se necesita la declaración del div protector_transparente.
	
	$("#protector_transparente").fadeIn(0);
	$("#protector_transparente").delay(tiempo_microsegundos).fadeOut(0);
	
}
	
	
function estado_vencimiento(div){
/*
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
	}*/
}



