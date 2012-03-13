<?php
require_once("../../../DAO/Conexion.php");

class DAOLoginPadre extends Conexion{
	
	
	function logear($username,$password){  
  
        $cn = $this->conexion();
        									//falta definir q tipo de consulta se desea
        if($cn!="no_conexion"){
	        $sql="select concat(u.apellido_paterno,' ',u.apellido_materno,', ',u.nombre) nombre, u.dni dni,p.url_modulo url,u.username user from general_perfil p,general_empleados u where u.id_perfil=p.id_perfil and u.username='$username' and u.password='$password'";
	        $rs = mysql_query($sql,$cn);
	        	while($fila=mysql_fetch_object($rs)){
					$arr[]=$fila;
				}
	     
	      	$respuesta="";
	      	if($arr){
				foreach($arr as $a):
					$respuesta=$a->nombre."{".$a->url."{".$a->user."{".$a->dni;
				endforeach;
			}else{
				$respuesta="no data";
			}
	       	
	       	
			return $respuesta;
		
		}else{
		return "mysql_no";
		}
    }
    
    function valida_string_logeo($cadena){
	//	echo "**".$cadena."**";
		$valido=1;
	
		for($i=0;$cadena[$i] && $valido==1;$i++){
		//	echo "**".$cadena[$i]."**";
			if($cadena[$i]=='a' || $cadena[$i]=='b' || $cadena[$i]=="c" || $cadena[$i]=='d' || $cadena[$i]=='e' || $cadena[$i]=='f' || $cadena[$i]=='g' || $cadena[$i]=='h' || $cadena[$i]=='i' || $cadena[$i]=='j' || $cadena[$i]=='k' || $cadena[$i]=='l' || $cadena[$i]=='m' || $cadena[$i]=='n'|| $cadena[$i]=='o'|| $cadena[$i]=='p'|| $cadena[$i]=='q'|| $cadena[$i]=='r'|| $cadena[$i]=='s'|| $cadena[$i]=='t'|| $cadena[$i]=='u'|| $cadena[$i]=='v'|| $cadena[$i]=='w'|| $cadena[$i]=='x'|| $cadena[$i]=='y'|| $cadena[$i]=='z' || $cadena[$i]=='A' || $cadena[$i]=='B' || $cadena[$i]=="C" || $cadena[$i]=='D' || $cadena[$i]=='E' || $cadena[$i]=='F' || $cadena[$i]=='G' || $cadena[$i]=='H' || $cadena[$i]=='I' || $cadena[$i]=='J' || $cadena[$i]=='K' || $cadena[$i]=='L' || $cadena[$i]=='M' || $cadena[$i]=='N'|| $cadena[$i]=='O'|| $cadena[$i]=='P'|| $cadena[$i]=='Q'|| $cadena[$i]=='R'|| $cadena[$i]=='S'|| $cadena[$i]=='T'|| $cadena[$i]=='U'|| $cadena[$i]=='V'|| $cadena[$i]=='W'|| $cadena[$i]=='X'|| $cadena[$i]=='Y'|| $cadena[$i]=='Z'|| $cadena[$i]=='0'|| $cadena[$i]=='1'|| $cadena[$i]=='2'|| $cadena[$i]=='3'|| $cadena[$i]=='4'|| $cadena[$i]=='5'|| $cadena[$i]=='6'|| $cadena[$i]=='7'|| $cadena[$i]=='8'|| $cadena[$i]=='9' || $cadena[$i]=='_'  ){
				$valido=1;
			}else{
				
				$valido=0;
			}
		}
		
		return $valido;
	}
    
}

?>