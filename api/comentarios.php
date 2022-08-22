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
    $sqlComentarios = mysqli_query($conexion->conexion,"SELECT * FROM comentarios WHERE id_evento=$data->id");
    if(mysqli_num_rows($sqlComentarios) > 0){
        $comentarios = mysqli_fetch_all($sqlComentarios,MYSQLI_ASSOC);
        echo json_encode($comentarios);
    }
    exit();
}

?>