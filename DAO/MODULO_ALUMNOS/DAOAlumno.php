<?php

require_once("../CONEXION/Conexion.php");

class DAOAlumno extends Conexion{
	
	var	$nombre_alumno="portal_alumno";
	
	
	
	
	var	$nombre_admin_cursos="admin_cursos";
	//	| admin_cursos | CREATE TABLE `admin_cursos` (
	//	  `codigo` varchar(20) NOT NULL,
	//	  `grado` int(1) default NULL,
	//	  `nivel` varchar(1) default NULL,
	//	  `nombre_curso` varchar(15) default NULL,
	//	  `seccion` varchar(1) default NULL,
	//	  `id_profesor` varchar(10) default NULL,
	//	  PRIMARY KEY  (`codigo`)
	//	) ENGINE=MyISAM DEFAULT CHARSET=utf8 |    ;
	
	
	function get_cursos($codigo_alumno){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	
	     	$sql=" select c.nombre_curso,p.dni,p.nombres,p.apellido_paterno,p.apellido_materno  from portal_alumno a, admin_cursos c,portal_profesor p where a.codigo='$codigo_alumno' and c.nivel=a.nivel and c.grado = a.grado and c.seccion = a.seccion and c.id_profesor=p.dni";
			
	        $rs = mysql_query($sql,$cn);
        
        	
			while($fila=mysql_fetch_object($rs)){
				$cursos[]=$fila;
			}    
			
			$respuesta="";
			if($entrada){
					
				foreach($entrada as $q):
					
					$respuesta.=$q->nombre_curso."{".$q->entrada."{".$q->fecha."{".$q->hora."{";
					
				endforeach;	
				
			}else{
				$respuesta="no data";
			}
			
			mysql_close($cn);

			return  "mysql_si";
		}else{
		return "mysql_no";
		}
	}

	function alumno_consulta_entrada($codigo_profesor,$codigo_alumno){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_blog where codigo_profesor='$codigo_profesor' and codigo_alumno='$codigo_alumno'";	
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
	
	function alumno_consulta_entrada_por_fecha($codigo_profesor,$codigo_alumno,$fecha){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
          $sql="select * from $this->nombre_tabla_blog where codigo_profesor='$codigo_profesor' and codigo_alumno='$codigo_alumno' and fecha='$fecha'";	
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