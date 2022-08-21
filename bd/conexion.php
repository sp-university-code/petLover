<?php 

  class dbConexion{
    private $server;
    private $user;
    private $password;
    private $database;
    public $conexion;

    function __construct(){
      $listaDatos = $this->datosConexion();
      foreach($listaDatos as $key => $value){
        $this->server = $value["server"];
        $this->user = $value["user"];
        $this->password = $value["password"];
        $this->database = $value["database"];
      }

      $this->conexion = new mysqli($this->server,$this->user,$this->password,$this->database);
      
      if($this->conexion->connect_errno){
        echo "Error: No se pudo realizar la conexion a la base de datos.";
        die();
      }
    }

    private function datosConexion(){
      $direccion = dirname(__FILE__);
      $jsonData = file_get_contents($direccion . "/config");

      return json_decode($jsonData,true);
    }

  }

?>