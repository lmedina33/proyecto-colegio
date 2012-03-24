<?php

require_once("../CONEXION/Conexion.php");

class DAOPersonalAdministrativo extends Conexion{
	
	var	$nombre_tabla_personal="portal_planilla_administrativa";
	
	//-- Estructura de tabla para la tabla `portal_planilla_administrativa`
	//-- 
	//
	//CREATE TABLE  `portal_planilla_administrativa` (
	// `id` INT( 11 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
	// `dni` VARCHAR( 10 ) NULL ,
	// `nombres` VARCHAR( 30 ) NULL ,
	// `apellido_paterno` VARCHAR( 15 ) NULL ,
	// `apellido_materno` VARCHAR( 15 ) NULL ,
	// `cargo` VARCHAR( 15 ) NULL
	//) ENGINE = MYISAM ;
	
    function admin_insertar_personal($dni,$nombres,$apellido_p,$apellido_m,$cargo){ //INGRESA UN NUEVO ALUMNO 
				$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_personal where dni='$dni'";	//VERIFICA Q NO EXISTA OTRO CODIGO IGUAL 
			   $rs = mysql_query($sql,$cn);
			
        	if(mysql_num_rows($rs)==0){
				
			
        	$sql="insert into $this->nombre_tabla_personal (dni,nombres,apellido_paterno,apellido_materno,cargo) values ('$dni','$nombres','$apellido_p','$apellido_m','$cargo')";
			    $rs = mysql_query($sql,$cn);
			
			
			mysql_close($cn);			 
			return "mysql_si";
				
			}else{
				mysql_close($cn);
				return "existe";
			}
			//mysql_close($cn)
		}else{
		return "mysql_no";
		}
	}
	
	
    function eliminar_personal($dni){ 	//ELIMINA ALUMNO POR CODIGO
				$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="delete from $this->nombre_tabla_personal where  dni='$dni'";
			$rs = mysql_query($sql,$cn);
			mysql_close($cn);			 
			return "mysql_si";
		
			
		}else{
		return "mysql_no";
		}
	}
					//ESTA FUNCION RECIBE EL COD_ANTERIOR Y TODOS LOS CAMPOS MODIFICADOS
					//EL PRIMER IF VERIFICA LA CONEXION
					//EL SEGUNDO ES PARA SABER SI EL CODIGO NUEVO Q LES ESTOY ASIGNANDO EXISTE O NO
					//EL COD_ANTERIOR SIRVE PARA COMPARAR CON EL CODIGO DE LA TABLA APORTAL_ALUMNO EXISTENTE ANTES DE MODIFICARLOS
	function admin_modificar_personal($dni_anterior,$dni,$nombres,$apellido_p,$apellido_m,$cargo){ 
		$cn = $this->conexion();			
		
		if($cn!="no_conexion"){	
									
			$sql="select * from $this->nombre_tabla_personal where dni='$dni'";  
			$rs = mysql_query($sql,$cn);
			
			if(mysql_num_rows($rs)==0){
				

			
        		$sql="update $this->nombre_tabla_personal set 
dni='$dni',nombres='$nombres',apellido_paterno='$apellido_p',apellido_materno='$apellido_m',cargo='$cargo' where dni='$dni_anterior'";		
			    $rs = mysql_query($sql,$cn);
			
				mysql_close($cn);		 
				return "mysql_si";
				
				}else{
					mysql_close($cn);
					return "existe";
					}
		}else{
		return "mysql_no";
		}
		
	}
	
}
?>