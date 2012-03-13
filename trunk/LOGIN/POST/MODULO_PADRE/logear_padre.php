<?php

require_once("../../DAO/MODULO_PADRE/DAOLoginPadre.php");

$logeo=new DAOLoginPadre();



if(empty($_POST['nombre_usuario'])){
	echo "no username";
}else{
	if(empty($_POST['password'])){
		echo "no password";	
	}else{
		
		if($logeo->valida_string_logeo($_POST['nombre_usuario'])==1 && $logeo->valida_string_logeo($_POST['password'])==1){
			
	
		
		$respuesta=$logeo->logear($_POST['nombre_usuario'],$_POST['password']);
		
		$valores=split("{",$respuesta);
												//FALTA DEFINIR LAS VARIABLE DE SESIOOMN
		session_start();
		$_SESSION["usuario"]=$valores[2];
		$_SESSION["modulo"]=$valores[1];
		$_SESSION["nombre_usuario"]=$valores[0];
		$_SESSION["dni_usuario"]=$valores[3];
		
		echo $respuesta;
		
		}else{
			echo "no permitido";
		}
	}
	
}

?>