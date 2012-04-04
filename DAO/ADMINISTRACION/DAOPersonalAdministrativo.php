<?php

require_once("../CONEXION/Conexion.php");

class DAOPersonalAdministrativo extends Conexion{
	
	var	$nombre_tabla_personal="portal_planilla_administrativa";
	var	$nombre_tabla_planilla_docente="portal_planilla_docente";
	var $nombre_tabla_profesor="portal_profesor";
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
	
	//-- 
	//-- Estructura de tabla para la tabla `portal_planilla_docente`
	//-- 
	//
	//CREATE TABLE `portal_planilla_docente` (
	//  `id` int(11) NOT NULL auto_increment,
	//  `dni` varchar(10) default NULL,
	//  `nivel` varchar(1) default NULL,
	//  PRIMARY KEY  (`id`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	
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
	
	function registrar_personal_docente_planilla($dni,$nivel){
				$cn = $this->conexion();
        		
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_planilla_docente where dni='$dni'";	//VERIFICA Q NO EXISTA OTRO CODIGO IGUAL 
			   $rs = mysql_query($sql,$cn);
			
        	if(mysql_num_rows($rs)==0){
				
			
        	$sql="insert into $this->nombre_tabla_planilla_docente (dni,nivel) values ('$dni','$nivel')";
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
	
	function consultar_planilla_profesores(){
		  $cn = $this->conexion();
        $cadena_respuesta="";
        if($cn!="no_conexion"){
        	$sql="select * from $this->nombre_tabla_profesor";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			} 
			
        	if($consulta[0]){
				
				foreach ($consulta as $c):
					$cadena_respuesta.=$c->nombres."{".$c->apellido_paterno."{".$c->apellido_materno."{";
					$var_dni=$c->dni;
					$sql="select * from $this->nombre_tabla_planilla_docente where dni='$var_dni'";
				    $rs = mysql_query($sql,$cn);
					while($fila2=mysql_fetch_object($rs)){
						$consulta2[]=$fila2;
					}		
					if($consulta2[0]){
						foreach ($consulta2 as $c2):
							$cadena_respuesta.=$c2->nivel."{";
						endforeach;
						}
					$fila2=null;
					$consulta2=null;
					$c2=null;
				endforeach;
			}
			
			$cadena_respuesta.="}";
			
			$sql="select * from $this->nombre_tabla_personal";
			$rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta_imp[]=$fila;
			} 
			
				if($consulta_imp){
						foreach ($consulta_imp as $c):
					$cadena_respuesta.=$c->nombres."{".$c->apellido_paterno."{".$c->apellido_materno."{".$c->cargo."{";
										
				endforeach;
				}
			
				return $cadena_respuesta;
			
			   
		}else{
		return "mysql_no";
		}
	}
	
	function consultar_planilla(){
		  $cn = $this->conexion();
        $cadena_respuesta="";
        if($cn!="no_conexion"){
        				
			$sql="select * from $this->nombre_tabla_personal";
			$rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta_imp[]=$fila;
			} 
			
				if($consulta_imp){
						foreach ($consulta_imp as $c):
					$cadena_respuesta.=$c->dni."{".$c->nombres."{".$c->apellido_paterno."{".$c->apellido_materno."{".$c->cargo."{";
										
				endforeach;
				}
			
				return $cadena_respuesta;
			
			   
		}else{
		return "mysql_no";
		}
	}
	
}
?>