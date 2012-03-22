<?php
require_once("../CONEXION/Conexion.php");


	//-- 
	//-- Estructura de tabla para la tabla `portal_metodologias`
	//-- 
	//
	//DROP TABLE IF EXISTS `portal_metodologias`;
	//CREATE TABLE `portal_metodologias` (
	//  `id` int(11) NOT NULL,
	//  `nivel` varchar(1) default NULL,
	//  `parrafo` varchar(300) default NULL,
	//  PRIMARY KEY  (`id`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8;



class DAOMetodologia extends Conexion{

  	var $nombre_tabla_metodologia="portal_metodologias";
  
	function insertar_metodologia($nivel,$parrafos){  

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	          
			//Aki va la observacion e executar un aquery q elimine los registro con los campode de grado y nivel similares 
			$sql="delete from $this->nombre_tabla_metodologia where   nivel='$nivel'";
			$rs = mysql_query($sql,$cn); 
			 //AKI TERMINA LA ELIMINACION DEL REGISTRO

			/*
				$valores=split("{",$parrafos);
				$i=0;						
				while($valores[$i]){		
					//$i2=$i+1;
					//$i3=$i+2;
echo "$valores[$i]";
	        		$sql="insert into $this->nombre_tabla_metodologia (nivel,parrafo) values ('$nivel','$valores[$i]')";
	       
	        		$rs = mysql_query($sql,$cn);
				
					$i=$i+1;		
				}*/
		
			$parrafos_split=split('{',$parrafos);
				
				$i=0;
				while($parrafos_split[$i]){
					$sql="insert into $this->nombre_tabla_metodologia (nivel,parrafo) values ('$nivel','$parrafos_split[$i]')";
					$rs = mysql_query($sql,$cn);
					echo"$parrafos_split[$i]";
					$i++;
				}
				
			mysql_close($cn);
			return "mysql_si";
        
		}else{
		return "mysql_no";
		}
    }
	
	
	
	function consultar_metodologia($nivel){
		
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_metodologia  where nivel='$nivel'";	
			$rs = mysql_query($sql,$cn);
			 
			while($fila=mysql_fetch_object($rs)){
				$meto[]=$fila;
			}        	
			
			$respuesta="";
			if($meto){
					
				foreach($meto as $q):
					
					$respuesta.=$q->parrafo."{";
					
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