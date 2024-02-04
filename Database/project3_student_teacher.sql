CREATE DATABASE  IF NOT EXISTS `project3` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `project3`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: project3
-- ------------------------------------------------------
-- Server version	5.7.41-log

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
-- Table structure for table `student_teacher`
--

DROP TABLE IF EXISTS `student_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teacher_id` varchar(10) NOT NULL,
  `student_id` varchar(10) NOT NULL,
  `course_name` varchar(45) NOT NULL,
  `semeter` int(11) NOT NULL,
  `group_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `student_teacher_FK1_idx` (`teacher_id`),
  KEY `student_teacher_FK2_idx` (`student_id`),
  CONSTRAINT `student_teacher_FK1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `student_teacher_FK2` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_teacher`
--

LOCK TABLES `student_teacher` WRITE;
/*!40000 ALTER TABLE `student_teacher` DISABLE KEYS */;
INSERT INTO `student_teacher` VALUES (1,'duynb123','2019824','Project I',20223,''),(2,'duynb123','2019825','Project I',20223,''),(4,'duynb123','2019830','Project I',20223,''),(5,'duynb123','20198246','Project I',20231,NULL),(6,'duynb123','20198314','Project I',20231,NULL),(7,'duynb123','20207609','Project I',20231,NULL),(8,'duynb123','20207645','Project I',20231,NULL),(9,'duynb123','20207663','Project I',20231,NULL),(10,'duynb123','20198246','Project I',20231,NULL),(11,'duynb123','20198314','Project I',20231,NULL),(12,'duynb123','20207609','Project I',20231,NULL),(13,'duynb123','20207645','Project I',20231,NULL),(14,'duynb123','20207663','Project I',20231,NULL),(15,'duynb123','20207684','Project I',20231,NULL),(16,'duynb123','20215274','Project I',20231,NULL),(17,'duynb123','20215275','Project I',20231,NULL),(18,'duynb123','20215276','Project I',20231,NULL),(19,'duynb123','20215277','Project I',20231,NULL),(20,'duynb123','20215278','Project I',20231,NULL),(21,'duynb123','20215279','Project I',20231,NULL),(22,'duynb123','20215571','Project I',20231,NULL),(23,'duynb123','20215572','Project I',20231,NULL),(24,'duynb123','20215573','Project I',20231,NULL),(25,'duynb123','20215574','Project I',20231,NULL),(26,'duynb123','20215576','Project I',20231,NULL),(27,'duynb123','20215657','Project I',20231,NULL),(28,'duynb123','20203913','Project III',20231,NULL),(29,'duynb123','20204867','Project III',20231,NULL),(30,'duynb123','20204868','Project III',20231,NULL),(31,'duynb123','20205231','Project III',20231,NULL),(32,'duynb123','20205232','Project III',20231,NULL),(33,'duynb123','20194231','Project III',20231,NULL),(34,'duynb123','20194234','Project III',20231,NULL),(35,'duynb123','20194238','Project III',20231,NULL),(36,'duynb123','20194248','Project III',20231,NULL),(37,'duynb123','20194261','Project III',20231,NULL),(38,'duynb123','20194264','Project III',20231,NULL),(39,'duynb123','20200234','Project III',20231,NULL),(40,'duynb123','20198187','Project 3: Thiết kế và quản trị HTTT',20231,NULL),(41,'duynb123','20198202','Project 3: Thiết kế và quản trị HTTT',20231,NULL),(42,'duynb123','20194258','Đồ án thiết kế Kỹ thuật máy tính',20231,NULL),(43,'duynb123','20194271','Đồ án thiết kế Kỹ thuật máy tính',20231,NULL),(44,'duynb123','20205149','Graduation Research 1',20231,NULL),(45,'duynb123','20205154','Graduation Research 1',20231,'2'),(46,'duynb123','20210692','Graduation Research 1',20231,NULL),(47,'duynb123','20194674','Nghiên cứu tốt nghiệp 1',20231,NULL),(48,'duynb123','20205114','Nghiên cứu tốt nghiệp 1',20231,NULL),(49,'duynb123','20194725','Graduation Research 2',20231,NULL),(50,'duynb123','20194726','Graduation Research 2',20231,NULL),(51,'duynb123','20194731','Graduation Research 2',20231,NULL),(52,'duynb123','20200349','Graduation Research 2',20231,NULL),(53,'duynb123','20200586','Nghiên cứu tốt nghiệp 2',20231,NULL),(54,'duynb123','20205114','Nghiên cứu tốt nghiệp 2',20231,NULL),(55,'duynb123','20200029','Nghiên cứu tốt nghiệp 2',20231,NULL),(56,'duynb123','20200563','Nghiên cứu tốt nghiệp 2',20231,NULL),(57,'duynb123','20204952','Nghiên cứu tốt nghiệp 2',20231,NULL),(58,'duynb123','20183791','Đồ án kỹ sư',20231,NULL),(59,'duynb123','20183795','Đồ án kỹ sư',20231,NULL),(60,'duynb123','20183796','Đồ án kỹ sư',20231,NULL),(61,'duynb123','20146015','Đồ án tốt nghiệp kỹ sư (CNTT)',20231,NULL),(62,'duynb123','20184235','Đồ án tốt nghiệp',20231,NULL),(63,'duynb123','20184235','Nghiên cứu tốt nghiệp 3',20231,NULL);
/*!40000 ALTER TABLE `student_teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-04 16:03:58
