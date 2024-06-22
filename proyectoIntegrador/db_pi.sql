CREATE DATABASE  IF NOT EXISTS `db_pi` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `db_pi`;
-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: localhost    Database: db_pi
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `texto` varchar(300) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_usuario` int(10) unsigned DEFAULT NULL,
  `id_producto` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,'Este café superó todas mis expectativas.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1,1),(2,'Este estilo de café es simplemente insuperable. ¡Recomiendo 100%!','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,1),(3,'Este café es una verdadera obra maestra.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,1),(4,'Probé este estilo de café por recomendación de un amigo y no me decepcionó en absoluto.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,2),(5,' Es increíblemente delicioso y definitivamente lo recomendaría a todos mis conocidos.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,2),(6,'¡Qué café tan increíble!','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,2),(7,' No puedo dejar de alabar su sabor y calidad.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1,3),(8,'Es el mejor que he probado hasta ahora','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,3),(9,'Este café me dejó boquiabierto desde el primer sorbo.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',4,3),(10,'¡Qué experiencia tan maravillosa! Este estilo de café es simplemente incomparable.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1,4),(11,'Probé este café por pura curiosidad y ahora no puedo dejar de recomendarlo.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,4),(12,'Este café es una verdadera joya','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',5,4),(13,'Después de probar este café, estoy completamente impresionado.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1,5),(14,'Es simplemente delicioso y lo recomendaría a todos mis amigos y familiares.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,5),(15,'Lo recomendaría a cualquiera que busque una experiencia de café excepcional.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,5),(16,'Es el más rico que he probado hasta ahora.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,6),(17,'Definitivamente lo recomendaría a todos los amantes del café.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,6),(18,'Me aventuré a probar un café fuera de mi zona de confort y fue una grata sorpresa','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,6),(19,'Después de probar varios estilos de café, finalmente encontré uno que se destaca.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',5,7),(20,'Este estilo de café se ha convertido en mi nuevo favorito.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,7),(21,'Este nuevo estilo de café que probé es simplemente excepcional. No puedo dejar de pensar en lo delicioso que era.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,7),(22,'Nunca pensé que me gustaría tanto un nuevo café.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1,8),(23,'Definitivamente el mejor que he tenido hasta ahora. ','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,8),(24,'Después de probar este café, no puedo imaginar mi vida sin él.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,8),(25,'Quedé impresionada por su sabor y calidad. ','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1,9),(26,'No puedo creer lo increíble que fue mi experiencia con este café.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,9),(27,'Lo probé por primera vez y me dejó sin palabras.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',5,9),(28,'He probado muchos tipos de café, pero este estilo en particular me dejó impresionado.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',4,10),(29,'Después de probar este café, estoy segura de que no volveré a mirar hacia atrás.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2,10),(30,'Qué descubrimiento tan maravilloso! Este café es una verdadera joya.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3,10);
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `foto` text NOT NULL,
  `nombre_producto` varchar(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_usuario` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'foto_prod_1.jpg','Half Caff Blend\r\n','Mezcla relajada y media cafeína. Tueste suave y dulce, con notas de almendras tostadas, chocolate semidulce, caramelo y pasas. Ideal para disfrutar con calma.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1),(2,'foto_prod_2.jpg','Espresso Blend\r\n','No necesitas máquina de espresso para el americano perfecto. Con notas de chocolate amargo y caramelo dulce, esta mezcla de espresso es ideal para cualquier ocasión.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',1),(3,'foto_prod_3.jpg','Early Bird Blend\r\n','Para madrugadores: tueste ligero, crujiente y complejo, con notas de manzana verde, cítricos, caramelo dulce y chocolate con leche cremoso. Te hará más productivo, o lo que sea.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2),(4,'foto_prod_4.jpg','Vanilla Blend\r\n','Esta infusión de tueste medio es ligera, deliciosa y de ensueño, con toques de vainilla de Madagascar y nueces tostadas.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',2),(5,'foto_prod_5.jpg','Social Dog Blend\r\n',' Este es el tipo de bebida hecha para compartir. Con mucho cuerpo, complejo y suave con notas de chocolate con leche, maní tostado, azúcar moreno y un final de galleta Graham. ','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3),(6,'foto_prod_6.jpg','Decaf Blend','La mezcla descafeinada es para aquellos que quieren un café sin energía. Disfruta de esta mezcla antes de dormir sin interrumpir tu horario de sueño','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',3),(7,'foto_prod_7.jpg','Night Owl Blend','Con esta mezcla, la noche es siempre joven. Rico y aterciopelado, tostado y cremoso con notas de chocolate amargo, miel dulce y nueces tostadas.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',4),(8,'foto_prod_8.jpg','Cake Batter Blend','Con notas de pastel de cumpleaños y glaseado de crema de vainilla, nuestra mezcla de masa para pastel hace que cada taza sepa a fiesta.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',4),(9,'foto_prod_9.jpg','Matcha Green Tea\r\n','Tiene un hermoso sabor terroso con un color verde vibrante que resulta del alto nivel de clorofila en las hojas. Es vegano, sin gluten, con cafeína y lleno de antioxidantes','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',5),(10,'foto_prod_10.jpg','Vanilla Matcha Tea','Nuestro Vanilla Matcha es 100% vegetal, hecho con té verde ceremonial japonés de grado A. Notas de vainilla de Madagascar combinadas maravillosamente con el sabor terroso del matcha.','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13',5);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `contrasenia` varchar(2000) NOT NULL,
  `fecha` date NOT NULL,
  `dni` int(15) NOT NULL,
  `foto` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'jmostaza@udesa.edu.ar','julijuli','2004-09-26',46026871,'icono-usuario-1.jpeg','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13'),(2,'jm@udesa.edu.ar','juliiiiiii','2004-07-09',4600000,'foto-icono-2.jpeg','2024-06-10 13:51:13','2024-06-14 00:17:39','2024-06-10 13:51:13'),(3,'julimosti@udesa.edu.ar','julijulijuli','2004-07-16',46026873,'foto-icono-3.jpeg','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13'),(4,'julietamostazavillanueva@udesa.edu.ar','julijulieta','2004-08-26',46026874,'foto-icono-4.jpeg','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13'),(5,'jmoti@udesa.edu.ar','julijulimostimosti','2004-10-26',46026875,'foto-icono-5.jpeg','2024-06-10 13:51:13','2024-06-10 13:51:13','2024-06-10 13:51:13'),(6,'Julieta@gmail.com','1','1111-11-11',1,'1','2024-06-12 18:16:49','2024-06-12 18:16:49','2024-06-12 18:16:49'),(15,'hola@gmail.com','a','1111-11-11',2,'1','2024-06-12 18:22:05','2024-06-12 18:22:05','2024-06-12 18:22:05'),(16,'juju@gmail.com','$2a$10$EYzJZrjuK5PfRSchmyNVnOUp8jpQ1WYdeusF1KE73YxKjTwUL0O7y','1111-11-11',5643,'uihii','2024-06-12 19:27:04','2024-06-12 19:27:04','2024-06-12 19:27:04'),(18,'juju@gmail.com','$2a$10$.bc6P8fdgpPfJCdBvoGzb.Zmh6GAtyBo3V4bMcLisagkUtYJDqSm6','1111-11-11',56436,'uihii','2024-06-12 19:46:47','2024-06-12 19:46:47','2024-06-12 19:46:47'),(19,'juju@gmail.com','$2a$10$spIne706sflXxipeB.QAVefRU39Si3amCjxFdOppWVNwWjGjINxOm','1111-11-11',564365,'uihii','2024-06-12 19:46:58','2024-06-12 19:46:58','2024-06-12 19:46:58'),(20,'hola@gmail.com','$2a$10$gH8o4wpUYcpySQrCaWh5xe0caTzIxFSst9sbInE62okDBqfFA9tlm','1111-11-11',123456,'a','2024-06-12 19:55:59','2024-06-12 19:55:59','2024-06-12 19:55:59'),(22,'hola@gmail.com','$2a$10$/bH8KMP44N5V2cAzXZkEDelTvFD6tfWNQcozOtN4/VbyxwWnCjo6C','1111-11-11',1234567,'a','2024-06-12 19:59:22','2024-06-12 19:59:22','2024-06-12 19:59:22'),(23,'hola@gmail.com','$2a$10$92WMCnZXTHdsmmkA0mNwn.VH/vuKBVL1dGqu262AORBYTGyouLShm','1111-11-11',8,'a','2024-06-12 20:19:11','2024-06-12 20:19:11','2024-06-12 20:19:11'),(25,'holasoyjuli@gmail.com','$2a$10$wL63lK9UPjEc9KOqSUk7f.8NzE4bIc3htNCJv2qiUU78ajziZ84K6','2024-06-07',46026888,'a','2024-06-12 21:57:45','2024-06-12 21:57:45','2024-06-12 21:57:45'),(35,'carmens@gmail.com','$2a$10$qgt4EL6SDK9PPzrllSOjce50vJkj76kmeJDIoA74WuVWsCCw23Due','2024-06-01',46006520,'foto5','2024-06-16 20:05:46','2024-06-16 20:14:49','2024-06-16 20:05:46'),(36,'carmen@gmail.com','$2a$10$jJSzz.HRFbyIs6ikwox4u.1uNP.yWW1FcUzdv3rwEnZ6D.JmLh9ES','2024-06-02',11221211,'foto-icono-5.jpeg','2024-06-16 20:15:52','2024-06-16 21:02:01','2024-06-16 20:15:52'),(37,'carsendoya@gmail.com','$2a$10$GNqyGWJIKYq5wlXmXR1iRuWi8iepicuCg7hCsZc/IJL5UyDA20xhm','2024-06-09',12345678,'hwjh','2024-06-16 20:23:50','2024-06-16 20:23:50','2024-06-16 20:23:50'),(39,'sendoya@gmail.com','$2a$10$0Yr33.VH/TzEBFMNwrLaHO3MCTutQTIVWaQ9ici4DXlrgoL0vMGt2','2024-06-06',24356726,'foto-icono-3.jpeg','2024-06-16 21:48:27','2024-06-16 21:51:47','2024-06-16 21:48:27');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-16 18:55:22
