

$(document).ready(function(){


$("#contenedor_menu #menu_vertical .opcion").click(function(){
	//	alert("hola");
	var desplazamiento_y_background=60;
	
	////////////veremos cual es la opcion actualmente seleccionada
	
	var id_selec=$('#menu_vertical .opcion[title="Seleccionada"]').attr("id");
	var id_selec_partes=id_selec.split("-");
	
	////////////Ahora veremos cual es la opcion que fue clicada////////////////
	var id=$(this).attr("id");
	var id_partes=id.split("-");
	
	/////////////////////////////Veamos en que posicion está el background///////////////
	var back_position=$("#menu_vertical").css("background-position");
//	alert(back_position);

	if(!back_position){  //si no lo entiende es porque estamos en IE, entonces se usan las propiedades css  BACKGROUND-POSITION-X   o Y
		back_position=$("#menu_vertical").css("background-position-x")+" "+$("#menu_vertical").css("background-position-y");
	}
//	alert(back_position);
	var back_posi_partes=back_position.split(" "); //con esto tomamos las dos partes de la posicion, pero como solo nos interesa la altura, osea el eje y, tomaremos back_posi_partes[1]
	var back_posi_partes2=back_posi_partes[1].split("px");  //debido a que es un string y posee la unidad px al final hay que quitarla
	
	var posicion_y=parseFloat(back_posi_partes2[0]);
		
	var diferencia=0;
	var nuevo_back_position="0 ";
	if( parseFloat(id_selec_partes[0])< parseFloat(id_partes[0])){ //si la opcion que ya estaba seleccionada es menor que la que se está seleccionando, entonces desplazaremos de forma positiva el background.
	
		diferencia= parseFloat(id_partes[0])-parseFloat(id_selec_partes[0]);
		nuevo_back_position+=((diferencia*desplazamiento_y_background)+posicion_y)+"px";
		
		 var animSpeed=1000; //animation speed
   		 var easeType='easeInOutExpo'; //easing type
		
		 //reset
				
		
		if($("#menu_vertical").css("background-position")){  //significa que lo entienden google chrome o mozila
			
				$("#menu_vertical").css("background-position",nuevo_back_position);
				
		}else{  //significa que estamos en IE
		
				var back_posi_partes_xy=nuevo_back_position.split(" ");
				
					
				$('#menu_vertical').animate({'background-position-y':back_posi_partes_xy[1]});
					/*
				var back_posi_partes_xy=nuevo_back_position.split(" ");
				
				$("#menu_vertical").css("background-position-x",back_posi_partes_xy[0]);
		
				$("#menu_vertical").css("background-position-y",back_posi_partes_xy[1]);*/
		}
		
		
		//alert(nuevo_back_position);
	}else{
		
		if( parseFloat(id_selec_partes[0])> parseFloat(id_partes[0])){ //si la opcion que ya estaba seleccionada es mayor que la que se está seleccionando, entonces desplazaremos de forma negativa el background.
		
			diferencia=parseFloat(id_selec_partes[0])- parseFloat(id_partes[0]);
			nuevo_back_position+=(posicion_y-(diferencia*desplazamiento_y_background))+"px";
		//	alert(nuevo_back_position);
		
			
		 var animSpeed=1000; //animation speed
   		 var easeType='easeInOutExpo'; //easing type
		//$('#menu_vertical').animate({left:30}, animSpeed, easeType); //reset
		
			if($("#menu_vertical").css("background-position")){  //significa que lo entienden google chrome o mozila
				
				$("#menu_vertical").css("background-position",nuevo_back_position);
					//$("#menu_vertical").css("background-position",nuevo_back_position);
			}else{  //significa que estamos en IE
			
			
				var back_posi_partes_xy=nuevo_back_position.split(" ");
				$('#menu_vertical').animate({'background-position-y':back_posi_partes_xy[1]});
			}
			
		} 	
	}
	
	//Debemos cambiar los titles
	$("#menu_vertical .opcion").attr("title","Click para seleccionar");
	$(this).attr("title","Seleccionada");
	

});


});



//////////////////////////////////////


/*
$(document).ready(function() {
	var autoPlayTime=5000;
	autoPlayTimer = setInterval( autoPlay, autoPlayTime);
	
	function autoPlay(){
		Slidebox('next');
	}
	
	$('#slidebox .next').click(function () {
		Slidebox('next','stop');
	});
	
	$('#slidebox .previous').click(function () {
		Slidebox('previous','stop');
	});
	
	var yPosition=($('#slidebox').height()-$('#slidebox .next').height())/2;
	$('#slidebox .next').css('top',yPosition);
	$('#slidebox .previous').css('top',yPosition);
	$('#slidebox .thumbs a:first-child').removeClass('thumb').addClass('selected_thumb');
	
	
	$("#slidebox .content").each(function(i){
		slideboxTotalContent=i*$('#slidebox').width();	
		$('#slidebox .container').css("width",slideboxTotalContent+$('#slidebox').width());
	});
});


function Slidebox(slideTo,autoPlay){
    var animSpeed=1000; //animation speed
    var easeType='easeInOutExpo'; //easing type
	var sliderWidth=$('#slidebox').width();
	var leftPosition=$('#slidebox .container').css("left").replace("px", "");
	if( !$("#slidebox .container").is(":animated")){
		if(slideTo=='next'){ //next
			if(autoPlay=='stop'){
				clearInterval(autoPlayTimer);
			}
			if(leftPosition==-slideboxTotalContent){
				  var animSpeed=1000; //animation speed
   				 var easeType='easeInOutExpo'; //easing type
				$('#slidebox .container').animate({left: 0}, animSpeed, easeType); //reset
				
				
				$('#slidebox .thumbs a:first-child').removeClass('thumb').addClass('selected_thumb');
				$('#slidebox .thumbs a:last-child').removeClass('selected_thumb').addClass('thumb');
			} else {
				$('#slidebox .container').animate({left: '-='+sliderWidth}, animSpeed, easeType); //next
				$('#slidebox .thumbs .selected_thumb').next().removeClass('thumb').addClass('selected_thumb');
				$('#slidebox .thumbs .selected_thumb').prev().removeClass('selected_thumb').addClass('thumb');
			}
		} else if(slideTo=='previous'){ //previous
			if(autoPlay=='stop'){
				clearInterval(autoPlayTimer);
			}
			if(leftPosition=='0'){
				$('#slidebox .container').animate({left: '-'+slideboxTotalContent}, animSpeed, easeType); //reset
				
				$('#slidebox .thumbs a:last-child').removeClass('thumb').addClass('selected_thumb');
				$('#slidebox .thumbs a:first-child').removeClass('selected_thumb').addClass('thumb');
			} else {
				$('#slidebox .container').animate({left: '+='+sliderWidth}, animSpeed, easeType); //previous
				
				$('#slidebox .thumbs .selected_thumb').prev().removeClass('thumb').addClass('selected_thumb');
				$('#slidebox .thumbs .selected_thumb').next().removeClass('selected_thumb').addClass('thumb');
			}
		} else {
			var slide2=(slideTo-1)*sliderWidth;
			if(leftPosition!=-slide2){
				clearInterval(autoPlayTimer);
				$('#slidebox .container').animate({left: -slide2}, animSpeed, easeType); //go to number
				$('#slidebox .thumbs .selected_thumb').removeClass('selected_thumb').addClass('thumb');
				var selThumb=$('#slidebox .thumbs a').eq((slideTo-1));
				selThumb.removeClass('thumb').addClass('selected_thumb');
			}
		}
	}
}


*/


//////////////////////////////////////////////////////////





function fun_actualizacion_datos(){
/*
Aca ponemos los datos que queremos sean actualizados cada cierto tiempo.
*/
}


function fun_ini_nombre(){
	 
	
	$.ajax({
        url: "POST/algun archivo.php",
        type: "POST",
        data:{},
        async:true,
        beforeSend: function(objeto){
        	
        
			
        },
        
	success: function(data_nombre){
			
		
		if(data_nombre=="mysql_no"){
			FMSG_ERROR_CONEXION();
		}else{
			
			if(data_nombre=="no_data"){
				//accion
			}else{
				//accion
			}
		
		
			if(GLOBAL_PAGINA_CARGADA==GLOBAL_CARGAS){
				$("#div_back_cargando").fadeOut(GLOBAL_VEL_FADE);
				$("#cargando").fadeOut(GLOBAL_VEL_FADE);
			}
			
		}
}
        
		
});	
}