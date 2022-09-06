<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "../bd/conexion.php";
$conexion = new dbConexion();

$comentario = $_POST['comentario'];
$id_evento = $_POST['id_evento'];

mysqli_query($conexion->conexion,"INSERT INTO comentarios(id_evento,comentario) VALUES ('$data->id_evento','$data->comentario')");

$response = array('create'=>'true');
echo json_encode($responde);
?>