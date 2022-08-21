<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require_once "../bd/conexion.php";
$conexion = new dbConexion();

if($_SERVER['REQUEST_METHOD']=='GET'){
  
  $sqlEventos = mysqli_query($conexion->conexion,"SELECT * FROM eventos");
  if(mysqli_num_rows($sqlEventos) > 0){
      $eventos = mysqli_fetch_all($sqlEventos,MYSQLI_ASSOC);
      echo json_encode($eventos);
  }
  exit();
}

if($_SERVER['REQUEST_METHOD']=='POST'){
  $data = json_decode(file_get_contents("php://input"));

  $sqlEventos = mysqli_query($conexion->conexion,"SELECT * FROM eventos WHERE id_evento=$data->id");
  if(mysqli_num_rows($sqlEventos) > 0){
      $eventos = mysqli_fetch_all($sqlEventos,MYSQLI_ASSOC);
      echo json_encode($eventos);
  }
  exit();
}

?>