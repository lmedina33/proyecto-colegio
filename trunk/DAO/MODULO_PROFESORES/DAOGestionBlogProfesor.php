<?php

require_once("../CONEXION/Conexion.php");

class DAOGestionBlogProfesor extends Conexion{
	
	var	$nombre_tabla_blog="blog";
	
	//-- 
	//-- Estructura de tabla para la tabla `blog`
	//-- 
	//
	//CREATE TABLE `blog` (
	//  `id` int(11) NOT NULL auto_increment,
	//  `codigo_curso` varchar(20) default NULL,
	//  `codigo_alumno` varchar(20) default NULL,
	//  `entrada` varchar(300) default NULL,
	//  `persona_responde` varchar(1) default NULL,
	//  `fecha` date default NULL,
	//  `hora` time NOT NULL,
	//  PRIMARY KEY  (`id`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	

	function profesor_registra_entrada($codigo_curso,$codigo_alumno,$entrada){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="update $this->nombre_tabla_blog set eliminable=0 where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno'";
        	
        	$rs = mysql_query($sql,$cn);
        	
	        $sql="insert into $this->nombre_tabla_blog (codigo_curso,codigo_alumno,entrada,persona_responde,fecha,hora) values ('$codigo_curso','$codigo_alumno','$entrada','P',curdate(),curtime())";
	        $rs = mysql_query($sql,$cn);
        
			mysql_close($cn);

			return  "mysql_si";
		}else{
		return "mysql_no";
		}
	}

	function profesor_consulta_entrada($codigo_curso,$codigo_alumno){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_blog where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno'";	
			$rs = mysql_query($sql,$cn);
			 
			while($fila=mysql_fetch_object($rs)){
				$entrada[]=$fila;
			}        	
			
			$respuesta="";
			if($entrada){
					
				foreach($entrada as $q):
					
					$respuesta.=$q->persona_responde."{".$q->entrada."{".$q->fecha."{".$q->hora."{";
					
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
	
	function profesor_consulta_entrada_por_fecha($codigo_curso,$codigo_alumno,$fecha){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
          $sql="select * from $this->nombre_tabla_blog where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno' and fecha='$fecha'";	
			$rs = mysql_query($sql,$cn);
			 
			while($fila=mysql_fetch_object($rs)){
				$entrada[]=$fila;
			}        	
			
			$respuesta="";
			if($entrada){
					
				foreach($entrada as $q):
					
					$respuesta.=$q->persona_responde."{".$q->entrada."{".$q->hora."{";
					
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