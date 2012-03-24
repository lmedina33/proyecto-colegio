


$(document).ready(function(){

	
//////////////////////////////PAGINA PRINCIPAL////////////////////////////////////

$("#menu_vertical .opcion").click(function(){

	/////CHEKEAMOS EL SUBMENU QUE ESTE ABIERTO
	var id=$(this).attr("id");
	//id está compuesto de la palabra opcion-area

	var partes_id=id.split("-");
		
	var id_submenu_abierto;
	
	$("#menu_vertical .submenu").each(function(){
		
		if($(this).css("display")=="block"){
			id_submenu_abierto=$(this).attr("id");
		}
		
	});
	
	
	//ocultamos todas las areas
	$(".area").hide();

//	alert(id_submenu_abierto);

	
	$("#menu_vertical .submenu").slideUp(300);
	
	if("submenu-"+partes_id[1]!=id_submenu_abierto){
	
		$("#menu_vertical #submenu-"+partes_id[1]).slideDown(300);	
	
		////////////////////Se elige la primera subopcion
		$("#menu_vertical .submenu .subopcion").attr("title","Click para seleccionar");
	
		$("#menu_vertical #submenu-"+partes_id[1]+" .subopcion:first-child").attr("title","Seleccionado");
		
		//mostramos el area correspondiente
		$("#area_"+partes_id[1]).show();

	}else{
		$("#menu_vertical .submenu .subopcion").attr("title","Click para seleccionar");
		
	}
	
	////////////////////////////////////////////////////////////////////////////////////
	
	
	
});


$("#menu_vertical .submenu .subopcion").click(function(){
	
	$("#menu_vertical .submenu .subopcion").attr("title","Click para seleccionar");
//	$("#menu_vertical .submenu .subopcion").css("background","red");
	
	
	$(this).attr("title","Seleccionado");
//	$(this).css("background","yellow");
	
});




//////////////////////////////AREA X///////////////////////////////////



//////////////////////////////POP UP X////////////////////////////////////



//////////////////////////////////////////////////////////////////

});
