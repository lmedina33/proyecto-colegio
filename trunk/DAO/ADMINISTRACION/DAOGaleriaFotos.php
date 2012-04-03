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
 	//	`numero_foto` varchar(300) DEFAULT NULL,
 	//	`nombre_foto` varchar(300) DEFAULT NULL,
 	//	PRIMARY KEY (`id`)
 	//	ENGINE=MyISAM DEFAULT CHARSET=utf8 |
	
	
	function insertar_foto($categoria,$extension){
		
		$cn = $this->conexion();
        		//$uno=1;
        if($cn!="no_conexion"){
        	
        	$sql="select max(numero_foto) numero from  $this->nombre_tabla_galeriafotos where categoria='$categoria'";
        	$rs = mysql_query($sql,$cn);
        	
        	if(mysql_num_rows($rs)>0){
        	
				$fila=mysql_fetch_object($rs);
				$next=1+$fila->numero;
        	}else{
        		$next=1;
        	}
			        $nombre_foto=$next.".".$extension;	
        	$sql="insert into $this->nombre_tabla_galeriafotos (categoria,numero_foto,nombre_foto) values ('$categoria',$next,'$nombre_foto')";	//Limpiamos la tabla para insertar los nuevos parrafos        
			$rs = mysql_query($sql,$cn);
		
			mysql_close($cn);

			return $nombre_foto;
		}else{
		return "mysql_no";
		}
	}
	
	
	function eliminar_foto($categoria,$nombre_foto){
		$cn = $this->conexion();
        	
        if($cn!="no_conexion"){
        	
        	$sql="delete from  $this->nombre_tabla_galeriafotos where categoria='$categoria' and nombre_foto='$nombre_foto'";
        	$rs = mysql_query($sql,$cn);
        	
			mysql_close($cn);

			return $nombre_foto;
		}else{
		return "mysql_no";
		}
	}
	
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