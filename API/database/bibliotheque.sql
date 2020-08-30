-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 11 nov. 2019 à 19:04
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `bibliotheque`
--
CREATE DATABASE IF NOT EXISTS `bibliotheque` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bibliotheque`;

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

DROP TABLE IF EXISTS `auteur`;
CREATE TABLE IF NOT EXISTS `auteur` (
  `auteurId` int(11) NOT NULL AUTO_INCREMENT,
  `auteurNom` varchar(100) NOT NULL,
  PRIMARY KEY (`auteurId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

DROP TABLE IF EXISTS `livre`;
CREATE TABLE IF NOT EXISTS `livre` (
  `livreId` int(11) NOT NULL AUTO_INCREMENT,
  `livreISBN` varchar(12) NOT NULL,
  `livreTitre` varchar(100) NOT NULL,
  `livreAuteur` int(11) NOT NULL,
  PRIMARY KEY (`livreId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `utilisateurId` int(11) NOT NULL AUTO_INCREMENT,
  `utilisateurNom` varchar(50) NOT NULL,
  `utilisateurMdp` varchar(32) NOT NULL,
  `utilisateurIsAdmin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`utilisateurId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
