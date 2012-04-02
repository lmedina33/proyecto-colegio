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


function abrir_contenido(contenido,area){ 
		
	$(".contenido-"+area).hide();

	////////////////////////////////////////////////////////////
	$("#contenido-"+contenido+"-"+area).fadeIn(500);
	
		
}


function abrir_area(area){ 
		
		$("#menu_"+opcion).show();
		$("#boton_atras").show();
		$("#escritorio").show();
		$("#area_"+opcion).show();
		$("#menu_inicio").hide();
		$(".submenu").hide();

		
}





//Funcion dinámica para abrir un area ligada a una pestaña del menu principal
/*function abrir_area(opcion){//opcion sera stock, mantenimiento, compras o proveedores
				$(".area").hide();
				$(".menu_pestana").attr("title","Activar");
			
			/////////////////////////////////////////////////////////////
				$("#area_"+opcion).show();
				$("#pest_"+opcion).attr("title","Activada");
			
			
}*/
            

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



function fun_stand_by_sistema(tiempo_microsegundos){
	
	$("#protector_transparente").fadeIn(0);
	$("#protector_transparente").delay(tiempo_microsegundos).fadeOut(0);
	
}





function fun_mostrar_cargando(){
	
	$("#cargando").fadeIn(300);
	$("#div_back3").fadeIn(300);
	
	
}



function fun_quitar_cargando(){
	
	$("#cargando").fadeOut(300);
	$("#div_back3").fadeOut(300);
	
	
}
	
function fun_refresca_combo_box_con_tabla(arg_combo_box,arg_matriz,arg_cont_matriz,arg_indice1,arg_indice2){  //Esta función se encarga de refrescar cualquier combo box con información de una matriz, para esto debemos indicar que indices de cada registro queremos insertar en los values y options del combo box
	var fila="";
	var codigo_html="";
	for(var i=0;i<arg_cont_matriz;i++){
		fila='<option value="'+arg_matriz[i][arg_indice1]+'">'+arg_matriz[i][arg_indice2]+'</option>';
		codigo_html=codigo_html+fila;
	}

	$(arg_combo_box).html(codigo_html);
}

function fun_combobox_opcion_elegida(arg_combo_box){  //devuelve la opcion elegida en el combo box, no el ID del option, sino el HTML
	
	return $(arg_combo_box+' option[value="'+$(arg_combo_box).val()+'"]').html();
}


