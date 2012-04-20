

function fun_pintar_deshabilitados(div_tabla){
	
	$(div_tabla+" tr").each(function(){

		switch($(this).find('td:last').html()){
			case "0":

			 if($(this).find('td:last').css("background-color")=="white" || $(this).find('td:last').css("background-color") =="rgba(0, 0, 0, 0)"){
							$(this).find("td").each(function(){
							
								$(this).css("opacity",".30");
								
							});
						}
			 		break;
		}
	});


}


