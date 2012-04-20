<?php

require_once("../CONEXION/Conexion.php");

class DAOGestionBlogAlumnos extends Conexion{
	
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
	

	function alumno_registra_entrada($codigo_curso,$codigo_alumno,$entrada){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="update $this->nombre_tabla_blog set eliminable=0 where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno'";
        	
        	$rs = mysql_query($sql,$cn);
        	
	     	$sql="insert into $this->nombre_tabla_blog (codigo_curso,codigo_alumno,entrada,persona_responde,fecha,hora) values ('$codigo_curso','$codigo_alumno','$entrada','A',curdate(),curtime() )";
			
	        $rs = mysql_query($sql,$cn);
        
			mysql_close($cn);

			return  "mysql_si";
		}else{
		return "mysql_no";
		}
	}
	
	
	function alumno_elimina_entrada($codigo_curso,$codigo_alumno){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_blog where id=( select max(id) from blog where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno') and eliminable=1 ";
        	$rs = mysql_query($sql,$cn);
        	
        	
        	$resultado="";
        	if(mysql_num_rows($rs)>0){
        		
        		
        		$sql="select max(id) id from blog where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno'";
				$rs = mysql_query($sql,$cn);
				
				
				while($fila=mysql_fetch_object($rs)){
					$entrada=$fila;
				}        
					
        		$sql="delete from $this->nombre_tabla_blog where id=$entrada->id ";
			   	$rs = mysql_query($sql,$cn);
			  
				///////////////////Ahora revisaremos si el alumno le pertenece al alumno para poder desbloquearlo y que sea eliminable		   
				   			   	
				   	$sql="select * from $this->nombre_tabla_blog where id=( select max(id) from blog where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno')";
        			$rs = mysql_query($sql,$cn);
        			
        			if(mysql_num_rows($rs)>0){
        				
        				///CONSULTAMOS CUAL ES EL MÁX de los que se encuentran en el blog
			        		$sql="select max(id) id from blog where codigo_curso='$codigo_curso' and codigo_alumno='$codigo_alumno'";
							$rs = mysql_query($sql,$cn);
							
							
							while($fila=mysql_fetch_object($rs)){
								$entrada=$fila;
							}      
				
        				$sql="update $this->nombre_tabla_blog set eliminable=1 where id=$entrada->id";
        	
        				$rs = mysql_query($sql,$cn);
        				
        			}
	        	$resultado="mysql_si";
        	}else{
        		$resultado="no realiza";
        	}
        	
			mysql_close($cn);

			return  $resultado;
		}else{
		return "mysql_no";
		}
	}


	function alumno_consulta_entrada($codigo_curso,$codigo_alumno){
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
					
					$respuesta.=$q->persona_responde."{".$q->entrada."{".$q->fecha."{".$q->hora."{".$q->eliminable."{";
					
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
	
	function alumno_consulta_entrada_por_fecha($codigo_curso,$codigo_alumno,$fecha){
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