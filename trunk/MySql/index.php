<?php

	$conexion = mysql_connect("localhost","root","root") or  die("Problemas en la conexion");
	// esta es tu conexion??? seeeeeeeee
	$db_selected = "sinfo_colegio";	//fal

	mysql_select_db($db_selected,$conexion)  or  die("Problemas en la selección de la base de datos");


	function tabla_vacia($table_name,$con){
	// pa pintar la creacion cada tabla	
		$vacia= true;
		$registros=mysql_query("select * from ".$table_name ,$con) or  die("Problemas en el select:".mysql_error());	
		while ($reg=mysql_fetch_array($registros)){	
			$vacia = false;
		}
		return $vacia;
	
	}
	
	
	function cadena_create_table($db_name,$table_name,$con){
	// pa pintar la creacion cada tabla	
		$cadena = "";
		$registros=mysql_query("SHOW create table ".$db_name.".".$table_name ,$con) or  die("Problemas en el select:".mysql_error());	
		while ($reg=mysql_fetch_array($registros)){	
			$cadena = $reg[1].";";
		}
		return $cadena;
	
	}
	
	
	function cadena_insert_table($table_name,$con){
	// pa pintar la insercion en cada tabla	
		$cadena = "INSERT INTO ".$table_name." ( ";		
		$primero = true;
		$col =0;
		$registros=mysql_query("show columns from ".$table_name ,$con) or  die("Problemas en el select:".mysql_error());	
		while ($reg=mysql_fetch_array($registros)){
			if(!$primero){  
				$cadena = $cadena.", ";
			}	
			$cadena = $cadena." ".$reg[0];
			$primero = false;	
			$col++;

		}
		$cadena = $cadena." ) VALUES <br>";
		
		$registros=mysql_query("select * from ".$table_name ,$con) or  die("Problemas en el select:".mysql_error());	
		
		$primero = true;
		while ($reg2=mysql_fetch_array($registros)){
			$insert="";
			//echo "<---".count($reg2)."--->";
			
			if(!$primero){  
				$insert = $insert.", <br> ";
			}
			$insert = $insert." ( ";
			$primero2 = true;
			for($i=0;$i<$col;$i++){
				if(!$primero2){  
					$insert = $insert.",";
				}
				$insert = $insert." '".$reg2[$i]."'"; 
				$primero2=false;
			}
			$insert = $insert." ) ";
			
			$primero = false;			
  
			$cadena = $cadena ." ".$insert;
		}
		//echo "<---".count($reg2)."--->";
		$cadena = $cadena ."; <br>";
		
		
		return $cadena;		
	
	}
	


?>




<html>
	<body>

<?php

	
	// pintando la creacion de la bd
	$name_db="";
	$registros=mysql_query("SHOW create database ".$db_selected,$conexion) or  die("Problemas en el select:".mysql_error());	
	while ($reg=mysql_fetch_array($registros)){
	
		echo $reg[1].";";
		$db = $reg[0];
  

	}
?>
	<br>

	use `<?php echo $db;?>`;
	
	<br><br>
	
<?php
	
	$tablas = null;
	$i=0;
	$registros=mysql_query("SHOW tables from ".$db_selected,$conexion) or  die("Problemas en el select:".mysql_error());	
	while ($reg=mysql_fetch_array($registros)){
	
		$tablas[$i] = $reg[0];
		$i++;

	}
	echo "<br>";
	
	foreach($tablas as $tabla){
	
		echo cadena_create_table($db,$tabla,$conexion);
		
		echo "<br>";
		
		if(!tabla_vacia($tabla,$conexion)){			
			echo cadena_insert_table($tabla,$conexion);
			echo "<br>";
		}
		
		echo "<br>";
		
		
	
	}
?>
	
	



	
	</body>
</html>