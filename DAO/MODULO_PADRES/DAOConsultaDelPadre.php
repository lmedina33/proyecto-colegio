<?php

require_once("../CONEXION/Conexion.php");

class DAOConsultaDelPadre extends Conexion{
	
	var	$tabla_alumno="portal_alumno";

  	var $nombre_tabla_admin_cursos="admin_cursos";
	var $nombre_tabla_alum_notas="alumno_notas";
	
	var	$nombre_tabla_observacion="observacion_curso";

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
        	
        	
	     	$sql="select *  from $this->tabla_alumno where id_padre='$id_padre'";
			
	        $rs = mysql_query($sql,$cn);
        
        	
			while($fila=mysql_fetch_object($rs)){
				$cursos[]=$fila;
			}    
			
			$respuesta="";
			if($cursos){
					
				foreach($cursos as $q):
					
					$respuesta.=$q->codigo."{".$q->nombres."{".$q->apellido_paterno."{".$q->apellido_materno."{".$q->nivel."{".$q->grado."{".$q->seccion."{";
					
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
	
	
	
	function get_cursos($codigo_alumno,$id_padre){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	
	     	$sql="select c.codigo,c.nombre_curso,p.nombres,p.apellido_paterno,p.apellido_materno  from portal_alumno a, admin_cursos c,portal_profesor p where a.codigo='$codigo_alumno' and a.id_padre='$id_padre' and c.nivel=a.nivel and c.grado = a.grado and c.seccion = a.seccion and c.id_profesor=p.dni";
			
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
	
	
	function consultar_notas($codigo_alumno,$id_padre){
		
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	 $sql="select n.codigo_curso,n.bimestre_1,n.bimestre_2,n.bimestre_3,n.bimestre_4 from $this->nombre_tabla_alum_notas n,$this->tabla_alumno a where n.codigo_alumno='$codigo_alumno' and a.id_padre='$id_padre'and a.codigo=n.codigo_alumno";
        		
			$rs = mysql_query($sql,$cn);
			
			while($fila=mysql_fetch_object($rs)){
				$meto[]=$fila;
			}        	
			
			$respuesta="";
			if($meto){
					
				foreach($meto as $q):
					
					$respuesta.=$q->codigo_curso."{".$q->bimestre_1."{".$q->bimestre_2."{".$q->bimestre_3."{".$q->bimestre_4."{";
					
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
	
	
	function consulta_observacion($codigo_curso,$codigo_alumno,$id_padre){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select o.id,o.codigo_curso,o.codigo_alumno,o.observacion,o.fecha from $this->nombre_tabla_observacion o,$this->tabla_alumno a  where o.codigo_curso='$codigo_curso' and o.codigo_alumno='$codigo_alumno' and a.id_padre='$id_padre' and a.codigo=o.codigo_alumno";
        	
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
	
	
	
	function obtener_cursos_grado($codi_alumno,$id_padre){
		$cn = $this->conexion();
        $cadena_respuesta="";
        if($cn!="no_conexion"){
        	//primero obtenemos las secciones por separado
        	
        	
        		$sql="select * from $this->tabla_alumno  where codigo='$codi_alumno' and id_padre='$id_padre'";
        		
			    $rs = mysql_query($sql,$cn);
			    
        	while($fila=mysql_fetch_object($rs)){
				$alumno=$fila;
			} 
			
			
        	
        		$sql="select seccion from $this->nombre_tabla_admin_cursos  where grado='$alumno->grado' and nivel='$alumno->nivel' group by seccion order by seccion ASC";
        		
			    $rs = mysql_query($sql,$cn);
			    
        	while($fila=mysql_fetch_object($rs)){
				$consulta_seccion[]=$fila;
			} 
			$cadena_respuesta="";
			
        	if($consulta_seccion[0]){
				
				foreach ($consulta_seccion as $c):
					$cadena_respuesta.=$c->seccion."{";
										
				endforeach;
				
			
			$cadena_respuesta.="}";
        	
        	$sql="select * from $this->nombre_tabla_admin_cursos where grado='$alumno->grado' and nivel='$alumno->nivel'  order by  categoria,nombre_curso,seccion ASC";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			} 
			
        	if($consulta[0]){
				
				foreach ($consulta as $c):
					$cadena_respuesta.=$c->nombre_curso."{".$c->seccion."{".$c->id_profesor."{".$c->categoria."{";
										
				endforeach;
				
			} 
			}else{
				$cadena_respuesta="no data";
			}
			mysql_close($cn);
			return $cadena_respuesta;
			
		}else{
		return "mysql_no";
		}
	}
	
}
	/*mysql> ;
    */
?>