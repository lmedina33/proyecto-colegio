<?php
session_start();
require_once("../../DAO/MODULO_PROFESOR/DAOLoginPadre.php");

$logeo=new DAOLoginPadre();



if(empty($_POST['nombre_usuario'])){
	echo "no username";
}else{
	if(empty($_POST['password'])){
		echo "no password";	
	}else{
		
if($logeo->valida_string_logeo($_POST['nombre_usuario'])==1 && $logeo->valida_string_logeo($_POST['password'])==1){
			
	
		
		$respuesta=$logeo->logear($_POST['nombre_usuario'],$_POST['password']);
		
		if($respuesta!="no data"){
			$valores=split("{",$respuesta);
			
							//FALTA DEFINIR Q VARIABLE S DE SESION SE REQUIEREN!!!!!!!!!!
			$_SESSION["codigo"]=$valores[0];
			$_SESSION["modulo"]="MODULO_PADRES";
			$_SESSION["nombre_usuario"]=$valores[1];
			
			
			echo $valores[1]."{"."MODULO_PADRES";
			}else{
		echo	$respuesta;
		}
		
		
		}else{
			echo "no permitido";
		}
	}
}

?>