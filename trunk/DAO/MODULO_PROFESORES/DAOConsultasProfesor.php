<?php

require_once("../CONEXION/Conexion.php");

class DAOConsultasProfesor extends Conexion{
	
	var	$nombre_tabla_admin_cursos="admin_cursos";
	var	$nombre_tabla_alumnos="portal_alumno";
	var	$nombre_tabla_blog="blog";
	//var $nombre_tabla_profesor="portal_profesor";
	
	//-- 
	//-- Estructura de tabla para la tabla `admin_cursos`
	//-- 
	//
	//CREATE TABLE `admin_cursos` (
	//  `codigo` varchar(20) NOT NULL,
	//  `grado` int(1) default NULL,
	//  `nivel` varchar(1) default NULL,
	//  `nombre_curso` varchar(15) default NULL,
	//  `seccion` varchar(1) default NULL,
	//  `id_profesor` varchar(10) default NULL,
	//  PRIMARY KEY  (`codigo`)
	//) ENGINE=MyISAM  DEFAULT CHARSET=utf8;
	
	//-- 
	//-- Estructura de tabla para la tabla `portal_alumno`
	//-- 

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
	
	function consultar_curso_dicta($id_profesor){
		  $cn = $this->conexion();
        $cadena_respuesta="";
        if($cn!="no_conexion"){
        	$sql="select * from $this->nombre_tabla_admin_cursos where id_profesor='$id_profesor'";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			} 
			
        	if($consulta[0]){
				
				foreach ($consulta as $c):
					$cadena_respuesta.=$c->codigo."{".$c->nombre_curso."{";
			    endforeach;
			}
			return $cadena_respuesta;
			   
		}else{
		return "mysql_no";
		}
	}
	
	function consultar_alumnos_curso_dicta($codigo){
		  $cn = $this->conexion();
        //$cadena_respuesta="";
        if($cn!="no_conexion"){
        	$sql="select * from $this->nombre_tabla_admin_cursos where codigo='$codigo'";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			}
			
        	if($consulta[0]){
				
				foreach ($consulta as $c):
					//$cadena_respuesta.=$c->nombres."{".$c->apellido_paterno."{".$c->apellido_materno."{";
					$var_grado=$c->grado;
					$var_nivel=$c->nivel;
					$var_seccion=$c->seccion;
					$sql="select * from $this->nombre_tabla_alumnos where grado='$var_grado' and nivel='$var_nivel' and seccion='$var_seccion'  and disponible=1";
				    $rs = mysql_query($sql,$cn);
					while($fila2=mysql_fetch_object($rs)){
						$consulta2[]=$fila2;
					}		
					if($consulta2[0]){
						foreach ($consulta2 as $c2):
							$cadena_respuesta.=$c2->codigo."{".$c2->nombres."{".$c2->apellido_paterno."{".$c2->apellido_materno."{";
						endforeach;
						}
					$fila2=null;
					$consulta2=null;
					$c2=null;
				endforeach;
			}
			
			return $cadena_respuesta;
			
			   
		}else{
		return "mysql_no";
		}
	}
	
	
	function consultar_alumnos_curso_blog($codigo){
		  $cn = $this->conexion();
        //$cadena_respuesta="";
        if($cn!="no_conexion"){
        	$sql="select codigo_alumno from $this->nombre_tabla_blog where codigo_curso='$codigo' group by codigo_alumno";
			    $rs = mysql_query($sql,$cn);
				 
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			}
			
        	if($consulta[0]){
				
				foreach ($consulta as $c):
					//$cadena_respuesta.=$c->nombres."{".$c->apellido_paterno."{".$c->apellido_materno."{";
					$codigo_alumno=$c->codigo_alumno;
					
					$sql="select * from $this->nombre_tabla_alumnos where codigo='$codigo_alumno'  and disponible=1";
				    $rs = mysql_query($sql,$cn);
					while($fila2=mysql_fetch_object($rs)){
						$consulta2[]=$fila2;
					}		
					if($consulta2[0]){
						foreach ($consulta2 as $c2):
							$cadena_respuesta.=$c2->codigo."{".$c2->nombres."{".$c2->apellido_paterno."{".$c2->apellido_materno."{";
						endforeach;
						}
					$fila2=null;
					$consulta2=null;
					$c2=null;
				endforeach;
			}else{
				$cadena_respuesta="no data";
			}
			
			return $cadena_respuesta;
			
			   
		}else{
		return "mysql_no";
		}
	}
	
}
?>