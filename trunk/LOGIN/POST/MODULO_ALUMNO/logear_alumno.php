<?php
session_start();
require_once("../../DAO/MODULO_ALUMNO/DAOLoginAlumno.php");

$logeo=new DAOLoginAlumno();



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
		$_SESSION["codigo"]=$_POST['nombre_usuario'];
		$_SESSION["modulo"]="MODULO_ALUMNOS";
		$_SESSION["nombre_usuario"]=$valores[0];
		$_SESSION["nivel"]=$valores[1];
		$_SESSION["grado"]=$valores[2];
		$_SESSION["seccion"]=$valores[3];
		
		
		echo $valores[0]."{"."MODULO_ALUMNOS";
		
		}else{
		echo	$respuesta;
		}
		}else{
			echo "no permitido";
		}
	}
}

?>