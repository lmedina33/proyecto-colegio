<?php
$uploaddir = "../../IMAGENES/PORTAL/ALBUM_FOTOS/".$_POST['nivel']."/";
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);


//datos del arhivo 
$nombre_archivo = $HTTP_POST_FILES['userfile']['name']; 
$tipo_archivo = $HTTP_POST_FILES['userfile']['type']; 
$tamano_archivo = $HTTP_POST_FILES['userfile']['size']; 
//compruebo si las caracter�sticas del archivo son las que deseo 
if (!((strpos($tipo_archivo, "gif") || strpos($tipo_archivo, "png") || strpos($tipo_archivo, "jpeg") || strpos($tipo_archivo, "jpg")) && ($tamano_archivo < 1000000))) { 
   	echo "La extensi�n o el tama�o de los archivos no es correcta.Se permiten archivos .gif o .jpg se permiten archivos de 1000 Kb m�ximo."; 
}else{ 
   	if (move_uploaded_file($HTTP_POST_FILES['userfile']['tmp_name'], $uploadfile)){
      	 echo "El archivo ha sido cargado correctamente."; 
   	}else{ 
      	 echo "Ocurri� alg�n error al subir el fichero. No pudo guardarse."; 
   	} 
} 

?>