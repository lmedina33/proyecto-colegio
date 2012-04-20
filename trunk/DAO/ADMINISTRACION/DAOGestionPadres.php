<?php

require_once("../CONEXION/Conexion.php");

class DAOGestionPadre extends Conexion{
	
	var	$nombre_tabla_padre="portal_padre";
	
	//-- Estructura de tabla para la tabla `portal_padre`
	//-- 
	//
	//CREATE TABLE `portal_padre` (
	//  `dni` varchar(10) NOT NULL,
	//  `nombres` varchar(20) default NULL,
	//  `apellido_paterno` varchar(20) default NULL,
	//  `apellido_materno` varchar(20) default NULL,
	//  `username` varchar(25) default NULL,
	//  `password` varchar(25) default NULL,
	//  `disponible` int(1) default 1,
	//  PRIMARY KEY  (`dni`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8;
	
    function admin_insertar_padre($dni,$nombres,$apellido_p,$apellido_m,$username,$password){ //INGRESA UN NUEVO PADRE 
				$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_padre where dni='$dni'";	//VERIFICA Q NO EXISTA OTRO DNI IGUAL 
			   $rs = mysql_query($sql,$cn);
			
        	if(mysql_num_rows($rs)==0){
        		$sql="select * from $this->nombre_tabla_padre where username='$username'";	//VERIFICA Q NO EXISTA OTRO DNI IGUAL 
				$rs = mysql_query($sql,$cn);
				
	        	if(mysql_num_rows($rs)==0){
				
			
        	$sql="insert into $this->nombre_tabla_padre (dni,nombres,apellido_paterno,apellido_materno,username,password,disponible) values ('$dni','$nombres','$apellido_p','$apellido_m','$username','$password',1)";
			    $rs = mysql_query($sql,$cn);
			
			mysql_close($cn);			 
			return "mysql_si";
				}else{
					mysql_close($cn);
					return "existe user";
				}
			}else{
				mysql_close($cn);
				return "existe";
			}
		}else{
		return "mysql_no";
		}
	}
	
	
	
	
	function admin_get_padres(){
		
		$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){

        	$sql="select * from $this->nombre_tabla_padre order by disponible DESC";	
			   $rs = mysql_query($sql,$cn);

			while($fila=mysql_fetch_object($rs)){
				
				$consulta[]=$fila;
								
			}
			
			$respuesta="";
			if($consulta){
				foreach($consulta as $c):
				
				$respuesta.=$c->dni."{".$c->nombres."{".$c->apellido_paterno."{".$c->apellido_materno."{".$c->username."{".$c->password."{".$c->disponible."{";
				
				endforeach;
			}else{
				$respuesta="no data";
			}
			
			mysql_close($cn);
			return $respuesta;
		}else{
		return "mysql_no";
		}
	}


	
    function eliminar_padre($dni){ 	//ELIMINA PADRE POR DNI
				$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="delete from $this->nombre_tabla_padre where  dni='$dni'";
			$rs = mysql_query($sql,$cn);
			mysql_close($cn);			 
			return "mysql_si";
		
			
		}else{
		return "mysql_no";
		}
	}
					//ESTA FUNCION RECIBE EL DNI_ANTERIOR Y TODOS LOS CAMPOS MODIFICADOS
					//EL PRIMER IF VERIFICA LA CONEXION
					//EL SEGUNDO ES PARA SABER SI EL CODIGO NUEVO Q LES ESTOY ASIGNANDO EXISTE O NO
					//EL DNI_ANTERIOR SIRVE PARA COMPARAR CON EL DNI DE LA TABLA APORTAL_PADRE EXISTENTE ANTES DE MODIFICARLOS
	function admin_modificar_padre($dni_anterior,$dni,$nombres,$apellido_p,$apellido_m,$username,$password,$disponible){ 
		$cn = $this->conexion();			
		
		if($cn!="no_conexion"){	
									
			$sql="select * from $this->nombre_tabla_padre where dni='$dni' and dni<>'$dni_anterior'";  
			$rs = mysql_query($sql,$cn);
			
			if(mysql_num_rows($rs)==0){
				
				$sql="select * from $this->nombre_tabla_padre where username='$username' and dni<>'$dni_anterior'";	//VERIFICA Q NO EXISTA OTRO DNI IGUAL 
				$rs = mysql_query($sql,$cn);
				
				if(mysql_num_rows($rs)==0){
					
	        		$sql="update $this->nombre_tabla_padre set 	dni='$dni',nombres='$nombres',apellido_paterno='$apellido_p',apellido_materno='$apellido_m',username='$username',password='$password',disponible=$disponible where dni='$dni_anterior'";		
	
					
	
				    $rs = mysql_query($sql,$cn);
				
					mysql_close($cn);		 
					return "mysql_si";
					
				}else{
					mysql_close($cn);
					return "existe user";
					}
					
				
				}else{
					mysql_close($cn);
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
				$sql="update $this-->nombre_tabla_padre set disponible=1 where dni='$dni'";
				$rs = mysql_query($sql,$cn);
			}else{
					if($disponible=="no_disponible"){
						$sql="update $this->nombre_tabla_padre set disponible=0 where dni='$dni'";
						$rs = mysql_query($sql,$cn);
						}
				}
			mysql_close($cn);
			return "mysql_si";
		}else{
			return "mysql_no";
			}
	}
		
	
	//FUNCION MODIFICAR USUARIO --> RECIBE EL USERNAME Y PASSWORD NUEVO MAS EL USERNAME Y PASS ANTIGUO
									//PARA PODER USARLOS DE CONDICION ANTES DE MODIFICAR EL USERNAME Y PASSWORD
	
	function padre_modificar_password($username,$password,$nuevo_password){
				$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="update $this->nombre_tabla_padre set password='$nuevo_password' where  username='$username' and password='$password'";
			$rs = mysql_query($sql,$cn);
						 
			mysql_close($cn);			 
			return "mysql_si";
		
			
		}else{
		return "mysql_no";
		}
	}
}
	/*mysql> ;
    */
?>