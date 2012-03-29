<?php

require_once("../CONEXION/Conexion.php");

class DAOGestionObservacion extends Conexion{
	
	var	$nombre_tabla_observacion="observacion_curso";
	
	//-- 
	//-- Estructura de tabla para la tabla `observacion_curso`
	//-- 
	//
	//CREATE TABLE `observacion_curso` (
	//  `id` int(11) NOT NULL auto_increment,
	//  `codigo_curso` varchar(20) default NULL,
	//  `codigo_alumno` varchar(20) default NULL,
	//  `observacion` varchar(300) default NULL,
	//  `fecha` date default NULL,
	//  PRIMARY KEY  (`id`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	

	function registrar_observacion($codigo_curso,$codigo_alumno,$observacion){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	
	     	$sql="insert into $this->nombre_tabla_observacion (codigo_curso,codigo_alumno,observacion,fecha) values ('$codigo_curso','$codigo_alumno','$observacion',curdate())";
			
	        $rs = mysql_query($sql,$cn);
        
			mysql_close($cn);

			return  "mysql_si";
		}else{
		return "mysql_no";
		}
	}

	function eliminar_observacion($id){ 	//ELIMINA observacion
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="delete from $this->nombre_tabla_observacion where  id='$id'";
			$rs = mysql_query($sql,$cn);
			mysql_close($cn);			 
			return "mysql_si";
		
			
		}else{
		return "mysql_no";
		}
	}

	function consulta_observacion($codigo_curso,$codigo_alumno){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_observacion where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno'";	
			$rs = mysql_query($sql,$cn);
			 
			while($fila=mysql_fetch_object($rs)){
				$entrada[]=$fila;
			}        	
			
			$respuesta="";
			if($entrada){
					
				foreach($entrada as $q):
					
					$respuesta.=$q->id."{".$q->codigo_curso."{".$q->codigo_alumno."{".$q->observacion."{".$q->fecha."{";
					
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