-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 11 nov. 2019 à 19:05
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

--
-- Déchargement des données de la table `auteur`
--

INSERT INTO `auteur` (`auteurId`, `auteurNom`) VALUES
(1, 'JRR Tolkien'),
(2, 'Victor Hugo');

--
-- Déchargement des données de la table `livre`
--

INSERT INTO `livre` (`livreId`, `livreISBN`, `livreTitre`, `livreAuteur`) VALUES
(1, 'p9g58e437856', 'Le seigneur des anneaux', 1),
(2, 'p9g58e437855', 'Le silmarillon', 1),
(3, 'p9g58e437850', 'Les misérables', 2),
(4, 'p9g58e437852', 'Notre dame de Paris', 2);

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`utilisateurId`, `utilisateurNom`, `utilisateurMdp`, `utilisateurIsAdmin`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 1),
(2, 'lecteur', '5826c57b292b26a246f25cfbb2326f8b', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
