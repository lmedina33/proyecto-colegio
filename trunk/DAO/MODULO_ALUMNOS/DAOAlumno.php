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
        	
        	
	     	$sql="select c.codigo,c.nombre_curso,p.nombres,p.apellido_paterno,p.apellido_materno  from portal_alumno a, admin_cursos c,portal_profesor p where a.codigo='$codigo_alumno' and c.nivel=a.nivel and c.grado = a.grado and c.seccion = a.seccion and c.id_profesor=p.dni";
			
	        $rs = mysql_query($sql,$cn);
        
        	
			while($fila=mysql_fetch_object($rs)){
				$cursos[]=$fila;
			}    
			
			$respuesta="";
			if($cursos){
					
				foreach($cursos as $q):
					
					$respuesta.=$q->codigo."{".$q->nombre_curso."{".$q->nombres."{".$q->apellido_paterno."{".$q->apellido_materno."{";
					
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