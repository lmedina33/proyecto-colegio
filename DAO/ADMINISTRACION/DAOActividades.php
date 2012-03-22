<?php
require_once("../CONEXION/Conexion.php");


	//-- 
	//-- Estructura de tabla para la tabla `portal_actividades`
	//-- 
	//
	//DROP TABLE IF EXISTS `portal_actividades`;
	//CREATE TABLE `portal_actividades` (
	//  `id` int(11) NOT NULL auto_increment,
	//  `titulo` varchar(30) default NULL,
	//  `parrafo` varchar(300) default NULL,
	//  `nivel` varchar(1) default NULL,
	//  PRIMARY KEY  (`id`)
	//) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;



class DAOActividades extends Conexion{

  	var $nombre_tabla_actividades="portal_actividades";
  
	function insertar_actividad($nivel,$titulo,$parrafos){  

        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	          
			//Aki va la observacion e executar un aquery q elimine los registro con los campode de grado y nivel similares 
			$sql="delete from $this->nombre_tabla_actividades where   nivel='$nivel'";
			$rs = mysql_query($sql,$cn); 
			 //AKI TERMINA LA ELIMINACION DEL REGISTRO

		
			$parrafos_split=split('{',$parrafos);
			$titulos_split=split('{',$titulo);
				
				$i=0;
				while($parrafos_split[$i] || $titulos_split[$i]){
					$sql="insert into $this->nombre_tabla_actividades (nivel,titulo,parrafo) values ('$nivel','$titulos_split[$i]','$parrafos_split[$i]')";
					$rs = mysql_query($sql,$cn);
					//echo"$parrafos_split[$i]";
					$i++;
				}
				
			mysql_close($cn);
			return "mysql_si";
        
		}else{
		return "mysql_no";
		}
    }
	
	
	
	function consultar_actividad($nivel){
		
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	
        	$sql="select * from $this->nombre_tabla_actividades  where nivel='$nivel'";	
			$rs = mysql_query($sql,$cn);
			 
			while($fila=mysql_fetch_object($rs)){
				$meto[]=$fila;
			}        	
			
			$respuesta="";
			if($meto){
					
				foreach($meto as $q):
					
					$respuesta.=$q->titulo."{".$q->parrafo."{";
					
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