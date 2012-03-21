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

  	var nombre_tabla_admin_cursos="admin_cursos";
  
	function insertar_dao_cursos($grado,$nivel,$grado_cursos){  
  		//los datos estan ordenados y vienen con un split de tipo {, en datos proforma impresion vienen dados por grupos id_venta_impresion,cantidad,dimension_alto,dimension_ancho
  		// mientras que en datos porforma pos estan ordenados en id_venta_pov, cantidad y dimension
        $cn = $this->conexion();
        
        if($cn!="no_conexion"){
	          
			//Aki va la observacion e executar un aquery q elimine los registro con los campode de grado y nivel similares 
			$sql="delete from $this->nombre_tabla_admin_cursos where  grado='$grado' and nivel='$nivel'";
			$rs = mysql_query($sql,$cn); 
			 //AKI TERMINA LA ELIMINACION DEL REGISTRO
			 
			 //DANTE ESTO FALTA CORRIGIR IO LO CORRIGO MAS RATO
			//			 ES Q TENGO Q SALIR
			
	        $sql="insert into ventas_proforma (diseno,nombre_archivo,id_servicio_diseno,transporte,costo_transporte,nombre_cliente,telefono,email) values ($diseno,'$nombre_archivo',$id_servicio_diseno,$transporte,$costo_transporte,'$cliente_nombre','$cliente_telefono','$cliente_email')";
	       
	        $rs = mysql_query($sql,$cn);
	        
	        if(mysql_affected_rows($cn)>0){
			
			
			$id_proforma=mysql_insert_id($cn); 
			
			//insertamos los detalles impresion
			
			$valores=split("{",$datos_proforma_impresion);
			$i=0;
			while($valores[$i]){
				$i2=$i+1;
				$i3=$i+2;
				$i4=$i+3;
				$i5=$i+4;
	        $sql="insert into ventas_proforma_impresion (id_venta_impresion,id_proforma,cantidad,dimension_ancho,dimension_alto,tipo_cobro) values ($valores[$i],$id_proforma,$valores[$i2],$valores[$i3],$valores[$i4],$valores[$i5])";
	       
	        $rs = mysql_query($sql,$cn);
				
				$i=$i+4;
			}
			
			//ahora insertaremos los detalles pos
			
			$valores2=split("{",$datos_proforma_pos);
			$i=0;
			
			while($valores2[$i]){
				$i2=$i+1;
				$i3=$i+2;
				$i4=$i+3;
				$i5=$i+4;
			
	        $sql="insert into ventas_proforma_pos(id_venta_pov,id_proforma,cantidad,dimension,descripcion,tipo_cobro) values ($valores2[$i],$id_proforma,$valores2[$i2],$valores2[$i3],'$valores2[$i4]',$valores[$i5])";
	       
	        $rs = mysql_query($sql,$cn);
				
				$i=$i+4;
			}
				
			 	return "mysql_si";
			
			}else{
				return "mysql_no";
			}
	        
		}else{
		return "mysql_no";
		}
    }
	
	function consultar_proforma($numero_proforma){
		  $cn = $this->conexion();
        $cadena_respuesta="";
        if($cn!="no_conexion"){
        	$sql="select * from ventas_proforma where id=$numero_proforma";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			} 
			
        	if($consulta[0]){
				
				foreach ($consulta as $c):
					$cadena_respuesta=$c->diseno."{".$c->nombre_archivo."{".$c->id_servicio_diseno."{".$c->transporte."{".$c->costo_transporte."{";
										
				endforeach;
				
				/// ahora consultamos las proformas_impresion
				
				$sql="select * from ventas_proforma_impresion where id_proforma=$numero_proforma";
			    $rs = mysql_query($sql,$cn);
				$cadena_respuesta=$cadena_respuesta.mysql_num_rows($rs)."{";
			while($fila=mysql_fetch_object($rs)){
				$consulta_imp[]=$fila;
			} 
			
				if($consulta_imp){
						foreach ($consulta_imp as $c):
					$cadena_respuesta=$cadena_respuesta.$c->id_venta_impresion."{".$c->cantidad."{".$c->dimension_ancho."{".$c->dimension_alto."{".$c->tipo_cobro."{";
										
				endforeach;
				}
			
			
			
				/// ahora consultamos las proformas_pos
				
				$sql="select * from ventas_proforma_pos where id_proforma=$numero_proforma";
			    $rs = mysql_query($sql,$cn);
			    
				$cadena_respuesta=$cadena_respuesta.mysql_num_rows($rs)."{";
				
			while($fila=mysql_fetch_object($rs)){
				$consulta_pos[]=$fila;
			} 
			
			
				
				if($consulta_pos){
						foreach ($consulta_pos as $c):
					$cadena_respuesta=$cadena_respuesta.$c->id_venta_pov."{".$c->cantidad."{".$c->dimension."{".$c->descripcion."{".$c->tipo_cobro."{";
										
				endforeach;
				}
			
				return $cadena_respuesta;
			
			}else{
				return "no existe proforma";
			}    
		}else{
		return "mysql_no";
		}
	}
	
	function sgt_numero_proforma(){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="select max(id) id from ventas_proforma";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			} 
			return ($consulta[0]->id)+1;
		}else{
		return "mysql_no";
		}
	}
	
	function get_proformas(){
		$cn = $this->conexion();
        
        if($cn!="no_conexion"){
        	$sql="select * from ventas_proforma";
			    $rs = mysql_query($sql,$cn);
				
			while($fila=mysql_fetch_object($rs)){
				$consulta[]=$fila;
			} 
			return $consulta;
		}else{
		return "mysql_no";
		}
	}
}

?>