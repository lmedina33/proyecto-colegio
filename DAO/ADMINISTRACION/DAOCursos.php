<?php
require_once("../CONEXION/Conexion.php");


	//	-- 
	//-- Estructura de tabla para la tabla `admin_cursos`
	//-- 

	//CREATE TABLE `admin_cursos` (
	//  `id` int(11) NOT NULL auto_increment,
	//  `grado` int(2) default NULL,
	//  `nivel` varchar(1) default NULL,
	//  `nombre_curso` varchar(30) default NULL,
	//  `seccion` varchar(1) default NULL,
	//	  `id_profesor` varchar(10) default NULL,
	//  PRIMARY KEY  (`id`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


class DAOCursos extends Conexion{

  	var $nombre_tabla_admin_cursos="admin_cursos";
  
	function insertar_dao_cursos($grado,$nivel,$grado_cursos){  

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	          
			//Aki va la observacion e executar un aquery q elimine los registro con los campode de grado y nivel similares 
			$sql="delete from $this->nombre_tabla_admin_cursos where  grado='$grado' and nivel='$nivel'";
			$rs = mysql_query($sql,$cn); 
			 //AKI TERMINA LA ELIMINACION DEL REGISTRO

			
				$valores=split("{",$grado_cursos);
				$i=0;
				while($valores[$i]){		
					$i2=$i+1;
					$i3=$i+2;

	        		$sql="insert into $this->nombre_tabla_admin_cursos (grado,nivel,nombre_curso,seccion,id_profesor) values ($grado,'$nivel','$valores[$i]','$valores[$i2]','$valores[$i3]')";
	       
	        		$rs = mysql_query($sql,$cn);
				
					$i=$i+3;		
				}
				mysql_close($cn);
				return "mysql_si";
        
		}else{
		return "mysql_no";
		}
    }
	
	function modificar_nombre_grado_cursos($grado,$nivel,$nombre_curso,$nuevo_nombre_curso){  

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	          
  				$sql="update $this->nombre_tabla_admin_cursos set nombre_curso = '$nuevo_nombre_curso' where grado='$grado' and nivel='$nivel' and nombre_curso='$nombre_curso'";
				
				$rs = mysql_query($sql,$cn);	
				mysql_close($cn);
				return "mysql_si";
        
		}else{
		return "mysql_no";
		}
    }
	
	function cambiar_profesor($grado,$nivel,$nombre_curso,$seccion,$nuevo_profesor){  

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	          
  				$sql="update $this->nombre_tabla_admin_cursos set id_profesor = '$nuevo_profesor' where grado='$grado' and nivel='$nivel' and nombre_curso='$nombre_curso' and seccion='$seccion'";
				
				$rs = mysql_query($sql,$cn);
				mysql_close($cn);
				return "mysql_si";
        
		}else{
		return "mysql_no";
		}
    }
	
	function obtener_cursos_grado($grado,$nivel){
		$cn = $this->conexion();
        $cadena_respuesta="";
        if($cn!="no_conexion"){
        	$sql="select * from $this->nombre_tabla_admin_cursos where grado='$grado' and nivel='$nivel'";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			} 
			
        	if($consulta[0]){
				
				foreach ($consulta as $c):
					$cadena_respuesta.=$c->nombre_curso."{".$c->seccion."{".$c->id_profesor."{";
										
				endforeach;
				
			} 
			
			mysql_close($cn);
			return $cadena_respuesta;
			
		}else{
		return "mysql_no";
		}
	}

	
}

?>