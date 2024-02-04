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
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('20146015','Hồ Phan Anh','anh.hp146015@sis.hust.edu.vn'),('20183791','Nguyễn Hoàng Long','long.nh183791@sis.hust.edu.vn'),('20183795','Hoàng Văn Minh','minh.hv183795@sis.hust.edu.vn'),('20183796','Ngô Đức Minh','minh.nd183796@sis.hust.edu.vn'),('20184235','Nguyễn Thành Vinh','vinh.nt184235@sis.hust.edu.vn'),('20194231','Nguyễn Bá Bình','binh.nb194231@sis.hust.edu.vn'),('20194234','Nguyễn Đình Chiến','chien.nd194234@sis.hust.edu.vn'),('20194238','Nguyễn Chí Công','cong.nc194238@sis.hust.edu.vn'),('20194248','Trịnh Quốc Đạt','dat.tq194248@sis.hust.edu.vn'),('20194258','Trần Minh Dũng','dung.tm194258@sis.hust.edu.vn'),('20194261','Nguyễn Bá Duy','duy.nb194261@sis.hust.edu.vn'),('20194264','Trần Khánh Duy','duy.tk194264@sis.hust.edu.vn'),('20194271','Đặng Thị Hạnh','hanh.dt194271@sis.hust.edu.vn'),('20194674','Đỗ Công Thành','thanh.dc194674@sis.hust.edu.vn'),('20194725','Nguyễn Hải Anh','anh.nh194725@sis.hust.edu.vn'),('20194726','Nguyễn Quốc Anh','anh.nq194726@sis.hust.edu.vn'),('20194731','Phạm Thành Biên','bien.pt194731@sis.hust.edu.vn'),('20198187','Nguyễn Thị Linh','linh.nt198187@sis.hust.edu.vn'),('20198202','Lê Đức Anh','anh.ld198202@sis.hust.edu.vn'),('2019824','Vũ Quang','minh.vq19@sis.hust.edu.vn'),('20198246','Vũ Quang Minh','minh.vq198246@sis.hust.edu.vn'),('2019825','Vũ Lam','Lam.vq19@sis.hust.edu.vn'),('2019830','Vũ Lam','Lam.vq19@sis.hust.edu.vn'),('20198314','Trần Đức Minh','minh.td198314@sis.hust.edu.vn'),('20200029','Nguyễn Nhật Anh','anh.nn200029@sis.hust.edu.vn'),('20200234','Lê Ngọc Hoa','hoa.ln200234@sis.hust.edu.vn'),('20200349','Nguyễn Thị Linh','linh.nt200349@sis.hust.edu.vn'),('20200563','Nguyễn Quang Tuấn','tuan.nq200563@sis.hust.edu.vn'),('20200586','Đỗ Đức Thành','thanh.dd200586@sis.hust.edu.vn'),('20203913','Nguyễn Đức Thành','thanh.nd203913@sis.hust.edu.vn'),('20204867','Lê Quang Anh','anh.lq204867@sis.hust.edu.vn'),('20204868','Lương Hoàng Anh','anh.lh204868@sis.hust.edu.vn'),('20204952','Nguyễn Sơn Đức','duc.ns204952@sis.hust.edu.vn'),('20205114','Trần Hồng Quân','quan.th205114@sis.hust.edu.vn'),('20205149','Bùi Hoàng Hà','ha.bh205149@sis.hust.edu.vn'),('20205154','Đoàn Tuấn Hùng','hung.dt205154@sis.hust.edu.vn'),('20205231','Nguyễn Thị Hoài Linh','linh.nth205231@sis.hust.edu.vn'),('20205232','Nguyễn Xuân Phước','phuoc.nx205232@sis.hust.edu.vn'),('20207609','Đào An Khánh','khanh.da207609@sis.hust.edu.vn'),('20207645','Nguyễn Minh Nhật','nhat.nm207645@sis.hust.edu.vn'),('20207663','Hoàng Minh Đức','duc.hm207663@sis.hust.edu.vn'),('20207684','Nguyễn Tùng Lâm','lam.nt207684@sis.hust.edu.vn'),('20210692','Nguyễn Tiểu Phương','phuong.nt210692@sis.hust.edu.vn'),('20215274','Lâm Việt Hoàng','hoang.lv215274@sis.hust.edu.vn'),('20215275','Trần Minh Huyền','huyen.tm215275@sis.hust.edu.vn'),('20215276','Lê Phúc Hưng','hung.lp215276@sis.hust.edu.vn'),('20215277','Nguyễn Thanh Hương','huong.nt215277@sis.hust.edu.vn'),('20215278','Đặng Trần Nam Khánh','khanh.dtn215278@sis.hust.edu.vn'),('20215279','Lê Hoàng Long','long.lh215279@sis.hust.edu.vn'),('20215571','Nguyễn Thanh Hải','hai.nt215571@sis.hust.edu.vn'),('20215572','Vũ Văn Hảo','hao.vv215572@sis.hust.edu.vn'),('20215573','Nguyễn Hữu Hậu','hau.nh215573@sis.hust.edu.vn'),('20215574','Trần Văn Hậu','hau.tv215574@sis.hust.edu.vn'),('20215576','Mai Xuân Hiếu','hieu.mx215576@sis.hust.edu.vn'),('20215657','Lê Minh Tú','tu.lm215657@sis.hust.edu.vn');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-04 16:03:57
