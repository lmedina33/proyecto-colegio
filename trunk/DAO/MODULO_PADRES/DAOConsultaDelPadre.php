<?php

require_once("../CONEXION/Conexion.php");

class DAOConsultaDelPadre extends Conexion{
	
	var	$nombre_alumno="portal_alumno";


	//-- 
	//-- Estructura de tabla para la tabla `portal_alumno`
	//-- 
	//
	//CREATE TABLE `portal_alumno` (
	//  `codigo` varchar(10) NOT NULL,
	//  `nombres` varchar(20) default NULL,
	//  `apellido_paterno` varchar(20) default NULL,
	//  `apellido_materno` varchar(20) default NULL,
	//  `edad` int(11) default NULL,
	//  `password` varchar(25) default NULL,
	//  `disponible` int(1) default '1',
	//  `id_padre` varchar(10) default NULL,
	//  `grado` int(1) default NULL,
	//  `nivel` varchar(1) default NULL,
	//  `seccion` varchar(1) default NULL,
	//  PRIMARY KEY  (`codigo`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8;
	
	
	function padres_consultan_hijos($id_padre){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	
	     	$sql="select *  from $this->nombre_alumno where id_padre='$id_padre'";
			
	        $rs = mysql_query($sql,$cn);
        
        	
			while($fila=mysql_fetch_object($rs)){
				$cursos[]=$fila;
			}    
			
			$respuesta="";
			if($cursos){
					
				foreach($cursos as $q):
					
					$respuesta.=$q->codigo."{";
					
				endforeach;	
				
			}else{
				$respuesta="no data";
			}
			
			mysql_close($cn);

			return  $respuesta;
		}else{
		return "mysql_no";
		}
	}
	
}
	/*mysql> ;
    */
?>