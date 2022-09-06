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

INSERT INTO eventos(nombre,fecha, hora, lugar, likes, descripcion,url_imagen) VALUES 
('Feria de perros','2022-08-21','12:21','Parque Samanes',0,'Feria de perros con tiendas para consentirlos','img1.jpg'),
('Feria de gatos','2022-09-23','12:21','Parque Samanes',0,'Feria de perros con tiendas para consentirlos','img1.jpg'),
('Feria de gatos y perros','2022-08-21','12:21','Parque Samanes',0,'Feria de perros con tiendas para consentirlos','img1.jpg');

INSERT INTO comentarios(id_evento,comentario) VALUES 
(1,"Que evento tan increible, estoy ansioso por asistir"),
(1,"Que evento tan increible, estoy ansioso por asistir :)"),
(1,"Que evento tan increible, se ve muy organizado, estoy ansioso por asistir");

