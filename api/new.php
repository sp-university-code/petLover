<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "../bd/conexion.php";
$conexion = new dbConexion();

#print_r($_POST);
echo "new";
$data = json_decode(file_get_contents("php://input"));
#echo json_encode($_POST);
#echo json_encode($data);
echo "'$data->nombre',$data->fecha,$data->hora,'$data->lugar',$data->likes,'$data->descripcion','$data->imagen'";


#echo $data->nombre;
#echo date("Y-m-d");

#mysqli_query($conexion->conexion,"INSERT INTO eventos(nombre,fecha, hora, lugar, likes, descripcion,url_imagen) VALUES ('$data->nombre','$data->fecha','$data->hora','$data->lugar',$data->likes,'$data->descripcion','$data->imagen')");

?>