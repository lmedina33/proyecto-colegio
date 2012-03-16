<?php

require_once("../CONEXION/Conexion.php");

class DAOGaleriaFotos extends Conexion{
	
	var	$nombre_tabla_galeriafotos="portal_galeriafotos";
		
	//-- Estructura de tabla para la tabla `portal_quienes_somos`
	//-- 
	//
	//	portal_galeriafotos | CREATE TABLE `portal_galeriafotos` (
	//	`id` int(11) NOT NULL AUTO_INCREMENT,
 	//	`categoria` varchar(300) DEFAULT NULL,
 	//	`nombre_foto` varchar(300) DEFAULT NULL,
 	//	PRIMARY KEY (`id`)
 	//	ENGINE=MyISAM DEFAULT CHARSET=utf8 |
	
	
	
    function consultar_fotos($tipo_consulta){ //El tipo de consulta indica si es de inicial, primaria, secundaria, o general
   	
				$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_galeriafotos where categoria='$tipo_consulta'";	//Limpiamos la tabla para insertar los nuevos parrafos
        
			$rs = mysql_query($sql,$cn);
			
				while($fila=mysql_fetch_object($rs)){
					$consulta[]=$fila;
				}
				
			$respuesta="";
			
			if($consulta){
				
				foreach($consulta as $a):
			
					$respuesta.=$a->nombre_foto."{";
				
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