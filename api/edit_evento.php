<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "../bd/conexion.php";
$conexion = new dbConexion();

if($_SERVER['REQUEST_METHOD']=='POST'){
  $data = json_decode(file_get_contents("php://input"));
  $query = "UPDATE eventos SET nombre='$data->nombre', fecha='$data->fecha', hora='$data->hora', lugar='$data->lugar', descripcion='$data->descripcion',url_imagen='$data->imagen' WHERE id_evento = $data->id";
  $sqlEventos = mysqli_query($conexion->conexion,$query);
  exit();
}


?>