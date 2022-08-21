CREATE DATABASE IF NOT EXISTS petLoverDB;
USE petLoverDB;

CREATE TABLE IF NOT EXISTS eventos(
  id_evento INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  lugar VARCHAR(255) NOT NULL,
  likes INT DEFAULT 0 NOT NULL,
  descripcion VARCHAR(255),
  url_imagen VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS comentarios(
	id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    id_evento INT,
    comentario VARCHAR(255),
    FOREIGN KEY (id_evento) REFERENCES eventos(id_evento)
);
