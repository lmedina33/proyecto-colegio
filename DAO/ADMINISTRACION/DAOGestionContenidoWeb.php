<?php

require_once("../CONEXION/Conexion.php");

class DAOGestionContenidoWeb extends Conexion{
	
	var	$nombre_tabla_quienes_somos="portal_quienes_somos";
		
	//-- Estructura de tabla para la tabla `portal_quienes_somos`
	//-- 
	//
	//	portal_quienes_somos | CREATE TABLE `portal_quienes_somos` (
	//	`id` int(11) NOT NULL AUTO_INCREMENT,
 	//	`parrafo` varchar(300) DEFAULT NULL,
 	//	PRIMARY KEY (`id`)
 	//	ENGINE=MyISAM DEFAULT CHARSET=utf8 |
	
		
	var	$nombre_tabla_mision_vision="portal_mision_vision";
	
	//-- Estructura de tabla para la tabla `portal_mision_vision`
	//----------------------------------------+
	//	portal_mision_vision | CREATE TABLE `portal_mision_vision` (
  	//	`id` int(11) NOT NULL AUTO_INCREMENT,
  	//	`parrafo` varchar(300) DEFAULT NULL,
  	//	PRIMARY KEY (`id`)
	//	) ENGINE=MyISAM DEFAULT CHARSET=utf8 |
	
	
    function actualizar_quienes_somos($parrafos){ //Vamos a guardar los parrafos ingresados. Los párrafos están separados por llaves de apertura {
   	
				$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="delete from $this->nombre_tabla_quienes_somos ";	//Limpiamos la tabla para insertar los nuevos parrafos
			$rs = mysql_query($sql,$cn);
			
				$parrafos_split=split('{',$parrafos);
				
				$i=0;
				while($parrafos_split[$i]){
					$sql="insert into $this->nombre_tabla_quienes_somos (parrafo) values ('$parrafos_split[$i]')";
					$rs = mysql_query($sql,$cn);
					
					$i++;
				}
		        			
			mysql_close($cn);

			return "mysql_si";
			
		}else{
		return "mysql_no";
		}
	}
	
	function consultar_quienes_somos(){
		
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_quienes_somos ";	//Limpiamos la tabla para insertar los nuevos parrafos
			$rs = mysql_query($sql,$cn);
			 
			while($fila=mysql_fetch_object($rs)){
				$quienes_somos[]=$fila;
			}        	
			
			$respuesta="";
			if($quienes_somos){
					
				foreach($quienes_somos as $q):
					
					$respuesta.=$q->parrafo."{";
					
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
	
	function actualizar_mision_vision($parrafos){ //Vamos a guardar los parrafos ingresados. Los párrafos están separados por llaves de apertura {
   	
				$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="delete from $this->nombre_tabla_mision_vision ";	//Limpiamos la tabla para insertar los nuevos parrafos
			$rs = mysql_query($sql,$cn);
			
        			
				$parrafos_split=split('{',$parrafos);
				
								
				$i=0;
				while($parrafos_split[$i]){
					$sql="insert into $this->nombre_tabla_mision_vision (parrafo) values ('$parrafos_split[$i]')";
					$rs = mysql_query($sql,$cn);
					
					
					$i++;
				}
		        			
				
			
			
			mysql_close($cn);

			return "mysql_si";
			
		}else{
		return "mysql_no";
		}
	}
	
	
	function consultar_mision_vision(){
		
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_mision_vision ";	//Limpiamos la tabla para insertar los nuevos parrafos
			$rs = mysql_query($sql,$cn);
			 
			while($fila=mysql_fetch_object($rs)){
				$mision_vision[]=$fila;
			}        	
			
			$respuesta="";
			if($mision_vision){
					
				foreach($mision_vision as $m):
					
					$respuesta.=$m->parrafo."{";
					
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
	
}
	/*mysql> ;
    */
?>