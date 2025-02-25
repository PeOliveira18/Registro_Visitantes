CREATE DATABASE  IF NOT EXISTS `visitantes` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `visitantes`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: visitantes
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `registo_visitantes`
--

DROP TABLE IF EXISTS `registo_visitantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registo_visitantes` (
  `IDVISITANTES` int NOT NULL AUTO_INCREMENT,
  `NOME` varchar(50) COLLATE utf8mb3_unicode_ci NOT NULL,
  `CPF` varchar(11) COLLATE utf8mb3_unicode_ci NOT NULL,
  `ENDERECO` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `TELEFONE` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `IDADE` int NOT NULL,
  PRIMARY KEY (`IDVISITANTES`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registo_visitantes`
--

LOCK TABLES `registo_visitantes` WRITE;
/*!40000 ALTER TABLE `registo_visitantes` DISABLE KEYS */;
INSERT INTO `registo_visitantes` VALUES (1,'pedro','38232393840','Rua Fabia 800','55961912468',19),(2,'pedro','38232393840','Rua Fabia 800','55961912468',19),(3,'Pedro','38232393840','Rua fabia 800 Sao Paulo SP','5511961912468',19),(4,'Pedro','38232393840','Rua fabia 800 Sao Paulo SP','5511961912468',19),(5,'Pedro','38232393840','Rua fabia 800 Sao Paulo SP','5511961912468',19),(6,'pedro','4384384','RUa faf','924581',18),(7,'dada','43434','rradat','4141414',13),(8,'dadad','434343','dadadad','433443',13);
/*!40000 ALTER TABLE `registo_visitantes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-25 18:04:37
