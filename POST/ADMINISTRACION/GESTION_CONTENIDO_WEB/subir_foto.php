<?php

require_once("../../../DAO/ADMINISTRACION/DAOGaleriaFotos.php");

$galeria=new DAOGaleriaFotos();


//datos del arhivo 
$nombre_archivo = $HTTP_POST_FILES['userfile']['name']; 
$tipo_archivo = $HTTP_POST_FILES['userfile']['type']; 
$tamano_archivo = $HTTP_POST_FILES['userfile']['size']; 
//compruebo si las caracter�sticas del archivo son las que deseo 
if (!((strpos($tipo_archivo, "gif") || strpos($tipo_archivo, "png") || strpos($tipo_archivo, "jpeg") || strpos($tipo_archivo, "jpg")) && ($tamano_archivo < 1000000))) { 
	
   	echo "La extensi�n o el tama�o de los archivos no es correcta.Se permiten archivos .gif o .jpg se permiten archivos de 1000 Kb m�ximo."; 
}else{ 
	
	
	$partes=split("/",$tipo_archivo);
	$extension=$partes[1];

	$respuesta=$galeria->insertar_foto($_POST['nivel'],$extension);

	if($respuesta!="mysql_no"){
			
		$uploaddir = "../../../IMAGENES/PORTAL/ALBUM_FOTOS/".$_POST['nivel']."/";
		$uploadfile = $uploaddir.$respuesta;
		
	   	if (move_uploaded_file($HTTP_POST_FILES['userfile']['tmp_name'], $uploadfile)){
	      	 echo "El archivo ha sido cargado correctamente."; 
	   	}else{ 
	   		
	   		$respuesta=$galeria->eliminar_foto($_POST['nivel'],$respuesta);
	   		
	      	 echo "Ocurri� alg�n error al subir el fichero. No pudo guardarse."; 
	   	} 
	}	else{
		
		}
} 

?>