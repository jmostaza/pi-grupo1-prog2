CREATE DATABASE  db_proyecto_integrador;
USE db_proyecto_integrador;

CREATE TABLE usuario (
/*nombre de la columna, tipo de dato, restricciones*/
id_usuario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100) NOT NULL,
contraseña VARCHAR(20) NOT NULL, 
fecha DATE NOT NULL,
dni INT UNIQUE NOT NULL,
foto TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE producto (
/*nombre de la columna, tipo de dato, restricciones*/
id_producto INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
foto TEXT NOT NULL,
nombre_producto VARCHAR(200) NOT NULL,
descripcion VARCHAR(200) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
id_usuario INT UNSIGNED,
FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE comentario (
id_comentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
texto VARCHAR(300) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
id_usuario INT UNSIGNED,
id_producto INT UNSIGNED,

FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

SELECT * FROM db_proyecto_integrador.usuario;

-- CREANDO 5 USUARIOS
INSERT INTO usuario (id_usuario, email, contraseña, fecha, dni, foto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, "jmostaza@udesa.edu.ar", "julijuli", "2004-09-26", 46026871, "foto1", NULL, NULL, NULL);
INSERT INTO usuario (id_usuario, email, contraseña, fecha, dni, foto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, "jm@udesa.edu.ar", "juliiiiiii", "2004-07-06", 46026872, "foto2", NULL, NULL, NULL);
INSERT INTO usuario (id_usuario, email, contraseña, fecha, dni, foto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, "julimosti@udesa.edu.ar", "julijulijuli", "2004-07-16", 46026873, "foto3", NULL, NULL, NULL);
INSERT INTO usuario (id_usuario, email, contraseña, fecha, dni, foto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, "julietamostazavillanueva@udesa.edu.ar", "julijulieta", "2004-08-26", 46026874, "foto4", NULL, NULL, NULL);
INSERT INTO usuario (id_usuario, email, contraseña, fecha, dni, foto, createdAt, updatedAt, deletedAt)
VALUES (DEFAULT, "jmoti@udesa.edu.ar", "julijulimostimosti", "2004-10-26", 46026875, "foto5", NULL, NULL, NULL);

SELECT * FROM db_proyecto_integrador.producto;

-- INSERTANDO 10 POSTEOS
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_1", "cafe1", "descripcion 1", NULL, NULL, NULL, 1);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_2", "cafe2", "descripcion 2", NULL, NULL, NULL, 1);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_3", "cafe3", "descripcion 3", NULL, NULL, NULL, 2);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_4", "cafe4", "descripcion 4", NULL, NULL, NULL, 2);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_5", "cafe5", "descripcion 5", NULL, NULL, NULL, 3);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_6", "cafe6", "descripcion 6", NULL, NULL, NULL, 3);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_7", "cafe7", "descripcion 7", NULL, NULL, NULL, 4);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_8", "cafe8", "descripcion 8", NULL, NULL, NULL, 4);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_9", "cafe9", "descripcion 9", NULL, NULL, NULL, 5);
INSERT INTO producto (id_producto, foto, nombre_producto, descripcion, createdAt, updatedAt, deletedAt, id_usuario)
VALUES (DEFAULT, "foto_prod_10", "cafe10", "descripcion 10", NULL, NULL, NULL, 5);

SELECT * FROM db_proyecto_integrador.comentario;

-- INSERTANDO 30 COMENTARIOS
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto1", NULL, NULL, NULL, 1, 1);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto2", NULL, NULL, NULL, 2, 1);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto3", NULL, NULL, NULL, 3, 1);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto4", NULL, NULL, NULL, 2, 2);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto5", NULL, NULL, NULL, 2, 2);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto6", NULL, NULL, NULL, 3, 2);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto7", NULL, NULL, NULL, 1, 3);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto8", NULL, NULL, NULL, 2, 3);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto9", NULL, NULL, NULL, 4, 3);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto10", NULL, NULL, NULL, 1, 4);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto11", NULL, NULL, NULL, 2, 4);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto12", NULL, NULL, NULL, 5, 4);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto13", NULL, NULL, NULL, 1, 5);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto14", NULL, NULL, NULL, 2, 5);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto15", NULL, NULL, NULL, 3, 5);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto16", NULL, NULL, NULL, 3, 6);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto17", NULL, NULL, NULL, 2, 6);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto18", NULL, NULL, NULL, 3, 6);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto19", NULL, NULL, NULL, 5, 7);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto20", NULL, NULL, NULL, 2, 7);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto21", NULL, NULL, NULL, 3, 7);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto22", NULL, NULL, NULL, 1, 8);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto23", NULL, NULL, NULL, 2, 8);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto24", NULL, NULL, NULL, 3, 8);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto25", NULL, NULL, NULL, 1, 9);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto26", NULL, NULL, NULL, 2, 9);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto27", NULL, NULL, NULL, 5, 9);

INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto28", NULL, NULL, NULL, 4, 10);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto29", NULL, NULL, NULL, 2, 10);
INSERT INTO comentario (id_comentario, texto, createdAt, updatedAt, deletedAt, id_usuario, id_producto)
VALUES (DEFAULT, "texto30", NULL, NULL, NULL, 3, 10);

