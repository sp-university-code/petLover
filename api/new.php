<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "../bd/conexion.php";
$conexion = new dbConexion();

$imgE = $_FILES['imgE'];
$nombre = $_POST['nombre'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$lugar = $_POST['lugar'];
$descripcion = $_POST['descripcion'];

$ruta_imgE = md5($imgE["tmp_name"]) . ".jpg";
$ruta = "../images/" . $ruta_imgE;
move_uploaded_file($imgE["tmp_name"], $ruta);

mysqli_query($conexion->conexion,"INSERT INTO eventos(nombre,fecha, hora, lugar, likes, descripcion,url_imagen) VALUES ('$nombre','$fecha','$hora','$lugar',0,'$descripcion','$ruta_imgE')");

$response = array('create'=>'true');
echo json_encode($responde);
?>