<?php

require_once("../CONEXION/Conexion.php");

class DAOGestionProfesores extends Conexion{
	
	var	$nombre_tabla_profesor="portal_profesor";
	
	//-- Estructura de tabla para la tabla `portal_profesor`
	//CREATE TABLE `portal_profesor` (
	//  `dni` varchar(10) NOT NULL,
	//  `nombres` varchar(20) default NULL,
	//  `apellido_paterno` varchar(20) default NULL,
	//  `apellido_materno` varchar(20) default NULL,
	//  `username` varchar(25) default NULL,
	//  `password` varchar(25) default NULL,
	//  `disponible` int(1) default 1,
	//  PRIMARY KEY  (`dni`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8;
	
	//CUANDO SE INSERTA UN PROFESOR, AUTOMATICAMNETE ESTARÁ DISPONIBLE !!!!
	
    function admin_insertar_profesor($dni,$nombres,$apellido_p,$apellido_m,$username,$password){ //INGRESA UN NUEVO PROFESOR 
				$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_profesor where dni='$dni'";	//VERIFICA Q NO EXISTA OTRO DNI IGUAL 
			   $rs = mysql_query($sql,$cn);
			
        	if(mysql_num_rows($rs)==0){
				
			
        	$sql="insert into $this->nombre_tabla_profesor (dni,nombres,apellido_paterno,apellido_materno,username,password,disponible) values ('$dni','$nombres','$apellido_p','$apellido_m','$username','$password',1)";
			    $rs = mysql_query($sql,$cn);
			
						 
			return "mysql_si";
				
			}else{
				
				return "existe";
			}
		}else{
		return "mysql_no";
		}
	}
	
	
    function eliminar_profesor($dni){ 	//ELIMINA PROFESOR POR DNI
				$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="delete from $this->nombre_tabla_profesor where  dni='$dni'";
			$rs = mysql_query($sql,$cn);
						 
			return "mysql_si";
		
			
		}else{
		return "mysql_no";
		}
	}
					//ESTA FUNCION RECIBE EL DNI_ANTERIOR Y TODOS LOS CAMPOS MODIFICADOS
					//EL PRIMER IF VERIFICA LA CONEXION
					//EL SEGUNDO ES PARA SABER SI EL DNI NUEVO Q LES ESTOY ASIGNANDO EXISTE O NO
					//EL DNI_ANTERIOR SIRVE PARA COMPARAR CON EL DNI DE LA TABLA A PORTAL_PROFESOR EXISTENTE ANTES DE MODIFICARLOS
	function admin_modificar_profesor($dni_anterior,$dni,$nombres,$apellido_p,$apellido_m,$username,$password){ 
		$cn = $this->conexion();			
		
		if($cn!="no_conexion"){	
									
			$sql="select * from $this->nombre_tabla_profesor where dni='$dni'";  
			$rs = mysql_query($sql,$cn);
			
			if(mysql_num_rows($rs)==0){
				
			
        		$sql="update $this->nombre_tabla_profesor set 
dni='$dni',nombres='$nombres',apellido_paterno='$apellido_p',apellido_materno='$apellido_m',username='$username',password='$password' where dni='$dni_anterior'";		
			    $rs = mysql_query($sql,$cn);
			
						 
				return "mysql_si";
				
				}else{
				
					return "existe";
					}
		}else{
		return "mysql_no";
		}
		
	}
	
	//ESTA FUNCION DE CAMBIAR DISPONIBILIDAD, RECIBE UN STRING $DISPONIBLE Q PUEDE TENER 2 VALORES --> "DISPONIBLE" O "NO_DISPONIBLE"
	//SI ES DISPONIBLE SE ACTUALIZA SU VALOR A 1
	//EN CASO CONTRARIO SE ESTABLECE A 0
	
	function cambiar_disponibilidad($dni,$disponible){
		//$uno=1;
		//$cero=0;
		$cn = $this->conexion();
		if($cn!="no_conexion"){
			if($disponible=="disponible"){
				$sql="update $this->nombre_tabla_profesor set disponible=1 where dni='$dni'";
				$rs = mysql_query($sql,$cn);
			}else{
					if($disponible=="no_disponible"){
						$sql="update $this->nombre_tabla_profesor set disponible=0 where dni='$dni'";
						$rs = mysql_query($sql,$cn);
						}
				}
			return "mysql_si";
		}else{
			return "mysql_no";
			}
	}
		
	
	//FUNCION MODIFICAR USUARIO --> RECIBE EL USERNAME Y EL PASSWORD NUEVO MAS EL USERNAME Y PASS ANTIGUO
									//PARA PODER USARLOS DE CONDICION ANTES DE MODIFICAR EL USERNAME Y EL PASSWORD
	
	function profesor_modificar_usuario($username,$username_nuevo,$password,$nuevo_password){
				$cn = $this->conexion();
        
        if($cn!="no_conexion"){
			
           $sql="update $this->nombre_tabla_profesor set username='$username_nuevo',password='$nuevo_password' where  username='$username' and password='$password'";
		   $rs = mysql_query($sql,$cn);
						 
						 
			return "mysql_si";
		
			
		}else{
		return "mysql_no";
		}
	}
}
	/*mysql> ;
    */
?>