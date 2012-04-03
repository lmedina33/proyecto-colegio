<?php

require_once("../../../DAO/ADMINISTRACION/DAOGaleriaFotos.php");

$galeria=new DAOGaleriaFotos();

if(unlink("../../../IMAGENES/PORTAL/ALBUM_FOTOS/".$_POST['nivel']."/".$_POST['nombre'])){
	
$respuesta=$galeria->eliminar_foto($_POST['nivel'],$_POST['nombre']);
	   		
echo $respuesta;
}else{
	
echo "no elimina";
}


?>