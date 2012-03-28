<?php
require_once("../CONEXION/Conexion.php");


	//	-- 
	//-- Estructura de tabla para la tabla `admin_cursos`
	//-- 

	//CREATE TABLE `admin_cursos` (
	//  `codigo` varchar(20) NOT NULL,
	//  `grado` int(2) default NULL,
	//  `nivel` varchar(1) default NULL,
	//  `nombre_curso` varchar(15) default NULL,
	//  `seccion` varchar(1) default NULL,
	//	`id_profesor` varchar(10) default NULL,
	//	`categoria` varchar(1) default NULL,
	//  PRIMARY KEY  (`id`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
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
	//  `disponible` int(1) default 1,
	//  `id_padre` varchar(10) default NULL,
	//  PRIMARY KEY  (`codigo`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8;
	
	//-- Estructura de tabla para la tabla `alumno_notas`
	//-- 
	//
	//CREATE TABLE `alumno_notas` (
	//  `codigo_alumno` varchar(10) NOT NULL,
	//  `codigo_curso` varchar(20) NOT NULL,
	//  `bimestre_1` float default '0',
	//  `bimestre_2` float default '0',
	//  `bimestre_3` float default '0',
	//  `bimestre_4` float default '0',
	//  PRIMARY KEY  (`codigo_alumno`,`codigo_curso`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8;


class DAOCursos extends Conexion{

  	var $nombre_tabla_admin_cursos="admin_cursos";
	var $nombre_tabla_alum_notas="alumno_notas";
	var	$nombre_tabla_alumnos="portal_alumno";
	
	//EL CAMPO CODIGO SE RA  IGUAL A = NIVEL+GRADO+NOMBRE+SECCION
  
	function insertar_dao_cursos($grado,$nivel,$grado_cursos,$categoria){  

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
					
					$codigo=$nivel.$grado.$valores[$i].$valores[$i2];
					
	        		$sql="insert into $this->nombre_tabla_admin_cursos (codigo,grado,nivel,nombre_curso,seccion,id_profesor,categoria) values ('$codigo',$grado,'$nivel','$valores[$i]','$valores[$i2]','$valores[$i3]','$categoria')";
	       
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
        //$cadena_respuesta="";
        if($cn!="no_conexion"){
	          
			  	/*$codigo=$nivel.$grado.$nuevo_nombre_curso;
				
  				$sql="update $this->nombre_tabla_admin_cursos set codigo='$codigo', nombre_curso = '$nuevo_nombre_curso' where grado='$grado' and nivel='$nivel' and nombre_curso='$nombre_curso'";
				
				$rs = mysql_query($sql,$cn);	*/
				$sql="select * from $this->nombre_tabla_admin_cursos where grado='$grado' and nivel='$nivel' and nombre_curso='$nombre_curso'";
			    $rs = mysql_query($sql,$cn);
				
				while($fila=mysql_fetch_object($rs)){
					$consulta[]=$fila;
				} 
			
        		if($consulta[0]){
				
					foreach ($consulta as $c):
						//$cadena_respuesta.=$c->nombre_curso."{".$c->seccion."{".$c->id_profesor."{";
						$codigo=$nivel.$grado.$nuevo_nombre_curso.$c->seccion;
						$sql="update $this->nombre_tabla_admin_cursos set codigo='$codigo', nombre_curso ='$nuevo_nombre_curso' where grado='$grado' and nivel='$nivel' and nombre_curso='$nombre_curso'";
				
						$rs = mysql_query($sql,$cn);
						
					endforeach;
				
				} 
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
	
	function actualizar_nota($codigo_alumno,$codigo_curso,$bimestre,$nota){

		$cn = $this->conexion();
		if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_alum_notas where codigo_alumno='$codigo_alumno' and codigo_curso='$codigo_curso'";	
			$rs = mysql_query($sql,$cn);
			
        	if(mysql_num_rows($rs)==0){
				
				$sql="insert into $this->nombre_tabla_alum_notas (codigo_alumno,codigo_curso) values ('$codigo_alumno','$codigo_curso')";
				$rs = mysql_query($sql,$cn);
			}
			switch($bimestre){
						case 1:	
								$sql="update $this->nombre_tabla_alum_notas set bimestre_1=$nota where  codigo_alumno='$codigo_alumno' and codigo_curso='$codigo_curso'";
			    				$rs = mysql_query($sql,$cn);
								break;
						case 2:	
								$sql="update $this->nombre_tabla_alum_notas set bimestre_2=$nota where  codigo_alumno='$codigo_alumno' and codigo_curso='$codigo_curso'";
			    				$rs = mysql_query($sql,$cn);
								break;
						case 3:	
								$sql="update $this->nombre_tabla_alum_notas set bimestre_3=$nota where  codigo_alumno='$codigo_alumno' and codigo_curso='$codigo_curso'";
			    				$rs = mysql_query($sql,$cn);
								break;
						case 4:	
								$sql="update $this->nombre_tabla_alum_notas set bimestre_4=$nota where  codigo_alumno='$codigo_alumno' and codigo_curso='$codigo_curso'";
			    				$rs = mysql_query($sql,$cn);
								break;
					}
			mysql_close($cn);			 
			return "mysql_si";
			/*else{
				
				$sql="insert into $this->nombre_tabla_alumnos (codigo,nombres,apellido_paterno,apellido_materno,edad,password,disponible,id_padre,grado,nivel,seccion) values ('$codigo','$nombres','$apellido_p','$apellido_m',$edad,'$password',1,'$id_padre','$grado','$nivel','$seccion')";
			    $rs = mysql_query($sql,$cn);
				mysql_close($cn);
				return "existe";
			}*/
			//mysql_close($cn)
		}else{
		return "mysql_no";
		}
	}
	
	function consultar_notas($codigo_alumno){
		
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_alum_notas  where codigo_alumno='$codigo_alumno'";	
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

	
}

?>