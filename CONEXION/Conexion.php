<?php


class Conexion 
{
	//SERVIDOR LOCAL
	//-------------------------------

   
	var $servidor = "127.0.0.1";
	var $usuario = "root";
	var $clave = "root";
	var $bd = "sinfo_colegio";
	
	//-------------------------------
	
 /*
	//SERVIDOR ACESPERU
	//-------------------------------
	var $servidor = "184.168.225.49";
    var $usuario = "costerp";
    var $clave = "Aces123.";
	//var $usuario = "costilli_root";
	//var $clave = "mysql";
	var $bd = "costerp";
*/
/*	var $usuario 	= "root";
	var $clave 		= "mysql";
	var $bd 		= "miscostillitas";
*/
	//-------------------------------



	function conexion(){
		$cn = mysql_connect("127.0.0.1","root","archer13");
		//$result = $cn;
		if($cn){
			mysql_select_db($this->bd,$cn);
			//$cn = mysql_connect($this->servidor,$this->usuario,$this->clave);
			//mysql_select_db("ventas_pasajes",$cn);
		@mysql_query("SET SQL_MODE = ''");
		return $cn;
		}else{
		@mysql_query("SET SQL_MODE = ''");
		return "no_conexion";
		}

		
	}

	function close($cn){
		mysql_close($cn);
		//mysql_close($cn);
	}
/*
	function create_sql($tipo,$id,$post,$campos,$tabla,$where){
		switch($tipo){
			case "insert":{
				//echo "es un insert ayumi:<br/>";
				//echo "campos: $campos <br/>";
				$s_campos = explode(",",$campos);
				//$post["id"] = $id;
				$values = $this->create_values($post,$s_campos);
				$sql = "insert into $tabla($campos) values($values)";
				//echo $sql; 
				unset($s_campos,$values);
				break;
			}
			case "update":{
				$s_campos = explode(",",$campos);
				//$post["id"] = $id;
				$sets = $this->create_sets($post,$s_campos);
				$sql = "update $tabla set $sets where $where";

				unset($s_campos,$values);
				break;
			}
		}

		unset($tipo,$id,$campos,$tabla);
		return $sql;
	}

	/*
	ESTA FUNCION SE UTILIZA EN CASO LA OPERACION
	SEA UN INSERT
	*//*
	function create_values($post,$campos){
		foreach($campos as $clave => $valor){
			foreach($post as $clave_c => $valor_c){
				if($valor == $clave_c){
					//echo "<br/> $valor - $clave_c ";
					$values .= "'".addslashes($valor_c)."',";
				}

				unset($clave_c,$valor_c);
			}

			unset($clave,$valor);
		}

		unset($campos);
		//echo $values."\n";
		$values = substr($values,0,strlen($values)-1);
		return $values;
	}

	/*
	ESTA FUNCION SE UTILIZA EN CASO LA OPERACION
	SEA UN UPDATE
	*//*
	function create_sets($post,$campos){
		foreach($campos as $clave => $valor){
			foreach($post as $clave_c => $valor_c){
				if($valor == $clave_c){
					$sets .= "$valor = '".addslashes($valor_c)."',";
				}

				unset($clave_c,$valor_c);
			}

			unset($clave,$valor);
		}

		unset($campos);
		//echo $values."\n";
		$sets = substr($sets,0,strlen($sets)-1);
		return $sets;
	}

	/*
	ESTE METODO DEVUELVE EL VALOR DE UN CAMPOS
	DEPENDIENDO DEL CRITERIO QUE SE DESEE
	$cn:     conexion a la base de datos
	$tabla:  nombre de la tabla que se consulta
	$campo:  nombre del campo que se desea mostrar
	$where:  condicion sql para el campo que se desea
	*//*
	function valor_campo($cn,$tabla,$campo,$where){
		$sql = "select $campo from $tabla where $where";
		//echo $sql."<br/>";
		$R = $this->ayu_query($sql,$cn);
		if($R){
			$n_regs = $this->ayu_num_rows($R);
			if($n_regs>0){
				$valor = $this->ayu_fetch_array($R);
				return $valor[0];
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	}

	function valor_campos($cn,$tabla,$campos,$where){
		$sql_where = "";
		if(strlen($where)>0){
			$sql_where = "where $where";
		}
		$sql = "select $campos from $tabla $sql_where";
		//echo "<br/>sql: ".$sql;
		$R = mysql_query($sql,$cn);
		if($R){
			$n_regs = mysql_num_rows($R);
			if($n_regs>0){
				$reg = mysql_fetch_array($R);
				$return = $reg;
			}
			else{
				$return = false;
			}
		}
		return $return;
	}

	function getRegs($cn,$tabla,$campos,$where){
		$sql_where = "";
		if(strlen($where)>0){
			$sql_where = "where $where";
		}
		$sql = "select $campos from $tabla $sql_where";
		//echo "<br/>sql: ".$sql;
		$R = mysql_query($sql,$cn);
		if($R){
			$n_regs = mysql_num_rows($R);
			if($n_regs>0){
				$return = $R;
			}
			else{
				$return = false;
			}
		}
		return $return;
	}

	//OPTIENE EL PRIMER REGISTRO
	/*
	ESTA FUNCION ES PARECIDA A valor_campos CON LA DIFERENCIA DE QUE
	LA CONSULTA OBTIENE EL PRIMER REGISTRO AUNQUE HALLAN MAS REGISTROS
	*//*
	function valor_campos_first($cn,$tabla,$campos,$where){
		$sql_where = "";
		if(strlen($where)>0){
			$sql_where = "where $where";
		}
		$sql = "select $campos from $tabla $sql_where limit 0,1";
		//echo "<br/>sql: ".$sql;
		$R = mysql_query($sql,$cn);
		if($R){
			$n_regs = mysql_num_rows($R);
			if($n_regs>0){
				$reg = mysql_fetch_array($R);
				$return = $reg;
			}
			else{
				$return = false;
			}
		}
		return $return;
	}

	function nuevo_id($cn,$campo_id,$tabla){
		$sql = "select max($campo_id) as ultimo_id from $tabla";
		//echo "<br/>sql: ".$sql;
		//$query = $this->db->query($sql);
		$R = $this->ayu_query($sql,$cn);
		//$reg = $query->row();
		$n_regs = $this->ayu_num_rows($R);
		if(isset($n_regs) && $n_regs>0){
			//$ultimo_id = $reg->ultimo_id;
			$reg = $this->ayu_fetch_object($R);
			$ultimo_id = $reg->ultimo_id;
			$id_nuevo = intval($ultimo_id)+1;

			unset($reg,$ultimo_id);
		}
		else{
			$id_nuevo = 1;
		}

		unset($sql,$R,$n_regs);
		unset($campo_id,$tabla);
		return $id_nuevo;
	}

	function makeCondicion($post,$where,$campo,$tipo="="){
	    if(strlen($where)>0){ $where .= " and "; }
		switch($tipo){
			case "=":{
	        	$where .= " $campo = '".$post[$campo]."' ";
				break;
			}
			case "like":{
				$where .= " $campo like '%".$post[$campo]."%' ";
				break;
			}
		}
		return $where;
	}
*/
}

?>