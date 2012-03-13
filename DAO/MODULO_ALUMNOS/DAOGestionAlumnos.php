<?php

require_once("../Conexion.php");

class DAOGestionAlumnos extends Conexion{
	
	var	$nombre_tabla_alumnos="portal_alumno";
	
    function admin_insertar_alumno($codigo,$nombres,$apellido_p,$apellido_m,$edad,$password){ //INGRESA UN NUEVO ALUMNO 
				$cn = $this->conexion();
        		$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_usuarios where codigo='$codigo'";	//VERIFICA Q NO EXISTA OTRO CODIGO IGUAL 
			   $rs = mysql_query($sql,$cn);
			
        	if(mysql_num_rows($rs)==0){
				
			
        	$sql="insert into $this->nombre_tabla_alumnos (codigo,nombres,apellido_paterno,apellido_materno,edad,password,disponible) values ('$codigo','$nombres','$apellido_p','$apellido_m',$edad,'$password','$uno')";
			    $rs = mysql_query($sql,$cn);
			
						 
			return "mysql_si";
				
			}else{
				
				return "existe";
			}
		}else{
		return "mysql_no";
		}
	}
	
	
    function eliminar_alumno($codigo){ 	//ELIMINA ALUMNO POR CODIGO
				$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="delete from $this->nombre_tabla_alumnos where  codigo='$codigo'";
			$rs = mysql_query($sql,$cn);
						 
			return "mysql_si";
		
			
		}else{
		return "mysql_no";
		}
	}
					//ESTA FUNCION RECIBE EL COD_ANTERIOR Y TODOS LOS CAMPOS MODIFICADOS
					//EL PRIMER IF VERIFICA LA CONEXION
					//EL SEGUNDO ES PARA SABER SI EL CODIGO NUEVO Q LES ESTOY ASIGNANDO EXISTE O NO
					//EL COD_ANTERIOR SIRVE PARA COMPARAR CON EL CODIGO DE LA TABLA APORTAL_ALUMNO EXISTENTE ANTES DE MODIFICARLOS
	function admin_modificar_alumno($codigo_anterior,$codigo,$nombres,$apellido_p,$apellido_m,$edad,$password){ 
		$cn = $this->conexion();			
		
		if($cn!="no_conexion"){	
									
			$sql="select * from $this->nombre_tabla_usuarios where codigo='$codigo'";  
			$rs = mysql_query($sql,$cn);
			
			if(mysql_num_rows($rs)==0){
				
			
        		$sql="update $this->nombre_tabla_alumnos set 
codigo='$codigo',nombres='$nombres',apellido_paterno='$apellido_p',apellido_materno='$apellido_m',edad='$edad',password='$password' where codigo='$codigo_anterior'";		
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
	
	function cambiar_disponibilidad($codigo,$disponible){
		$uno=1;
		$cero=0;
		$cn = $this->conexion();
		if($cn!="no_conexion"){
			if($disponible=="disponible"){
				$sql="update $this-->nombre_tabla_alumnos set disponible='$uno' where codigo='$codigo'";
				$rs = mysql_query($sql,$cn);
			}else{
					if($cn=="no_disponible"){
						$sql="update $this-->nombre_tabla_alumnos set disponible='$cero' where codigo='$codigo'";
						$rs = mysql_query($sql,$cn);
						}
				}
			return "mysql_si";
		}else{
			return "mysql_no";
			}
	}
		
	
	//FUNCION MODIFICAR PASSSWORD --> RECIBE EL PASSWORD NUEVO MAS EL CODIGO Y PASS ANTIGUO
									//PARA PODER USARLOS DE CONDICION ANTES DE MODIFICAR EL PASSWORD
	
	function alumno_modificar_password($codigo,$password,$nuevo_password){
				$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="update $this-->nombre_tabla_alumnos  set password='$nuevo_password' where  codigo='$codigo' and password='$nuevo_password'";
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