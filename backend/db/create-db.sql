-- ------------------------------------------------------------------------------------------------------------
-- DATABASE: 'artisans_aura'
-- ------------------------------------------------------------------------------------------------------------

DROP DATABASE IF EXISTS artisans_aura;

CREATE DATABASE IF NOT EXISTS artisans_aura DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE artisans_aura;



-- ------------------------------------------------------------------------------------------------------------
-- CREATE USER WITH ALL PRIVILEGES: 'admin_aura'
-- ------------------------------------------------------------------------------------------------------------

CREATE USER IF NOT EXISTS 'admin_aura'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON artisans_aura.* TO 'admin_aura'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

-- ------------------------------------------------------------------------------------------------------------



-- ------------------------------------------------------------------------------------------------------------
--
-- TABLE STRUCTURE: 'categories'
--

CREATE TABLE IF NOT EXISTS categories (
  id_categorie INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  categorie VARCHAR(50) UNIQUE NOT NULL
) ENGINE = InnoDB;

-- ------------------------------------------------------------------------------------------------------------




-- ------------------------------------------------------------------------------------------------------------
--
-- TABLE STRUCTURE: 'specialites'
--
-- RELATIONS FOR TABLE 'specialites'
--  `id_categorie`
--    `categorie` -> `id_categorie`
--

CREATE TABLE IF NOT EXISTS specialites (
  id_specialite INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  specialite VARCHAR(50) UNIQUE NOT NULL,
  id_categorie INT NOT NULL,
  FOREIGN KEY (id_categorie) 
    REFERENCES categories(id_categorie) 
    ON DELETE RESTRICT 
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- ------------------------------------------------------------------------------------------------------------




-- ------------------------------------------------------------------------------------------------------------
--
-- TABLE STRUCTURE: 'villes'
--

CREATE TABLE IF NOT EXISTS villes (
 id_ville INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 ville VARCHAR(100) NOT NULL UNIQUE
) ENGINE = InnoDB;

-- ------------------------------------------------------------------------------------------------------------




-- ------------------------------------------------------------------------------------------------------------
-- 
-- TABLE STRUCTURE: 'artisans'
--
-- RELATIONS FOR TABLE 'artisans'
--  `id_specialite`
--    `specialites` -> `id_specialite`
--  `id_ville`
--    `villes` -> `id_ville`
--

CREATE TABLE IF NOT EXISTS artisans (
  id_artisan INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  nom VARCHAR(50) NOT NULL , 
  email VARCHAR(255) UNIQUE NOT NULL , 
  note DECIMAL(2,1) NOT NULL , 
  id_specialite INT NOT NULL,
  id_ville INT NOT NULL,
  FOREIGN KEY (id_specialite) 
    REFERENCES specialites(id_specialite) 
    ON DELETE RESTRICT 
    ON UPDATE CASCADE,
  FOREIGN KEY (id_ville) 
    REFERENCES villes(id_ville) 
    ON DELETE RESTRICT 
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- ------------------------------------------------------------------------------------------------------------



-- ------------------------------------------------------------------------------------------------------------
--
-- TABLE STRUCTURE: 'sites'
--
-- RELATIONS FOR TABLE 'sites'
--  `id_artisan`
--    `artisans` -> `id_artisan`
--

CREATE TABLE IF NOT EXISTS sites (
  id_site INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  adresse VARCHAR(255),
  id_artisan INT NOT NULL UNIQUE,
  FOREIGN KEY (id_artisan)
    REFERENCES artisans(id_artisan)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------------------------------------------------------------


-- ------------------------------------------------------------------------------------------------------------
--
-- TABLE STRUCTURE: 'a_propos_artisans'
--
-- RELATIONS FOR TABLE 'a_propos_artisans'
--  `id_artisan`
--    `artisans` -> `id_artisan`
--

CREATE TABLE IF NOT EXISTS a_propos (
  id_a_propos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_artisan INT NOT NULL UNIQUE,
  contenu TEXT NOT NULL,
  FOREIGN KEY (id_artisan)
    REFERENCES artisans(id_artisan)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;


-- ------------------------------------------------------------------------------------------------------------
--
-- TABLE STRUCTURE: 'top_3'
--
-- RELATIONS FOR TABLE 'top_3'
--  `id_artisan`
--    `artisans` -> `id_artisan`
--

CREATE TABLE IF NOT EXISTS top_3 (
  id_top3 INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  mois DATE NOT NULL,
  UNIQUE(mois)
) ENGINE = InnoDB;

-- ------------------------------------------------------------------------------------------------------------
-- ------------------------------------------------------------------------------------------------------------
--
-- TABLE STRUCTURE: 'fait_partie'
--
-- RELATIONS FOR TABLE 'fait_partie'
--  `id_top3`
--    `top_3` -> `id_top3`
--  `id_artisan`
--    `artisans` -> `id_artisan`
--

CREATE TABLE IF NOT EXISTS fait_partie (
  id_top3 INT NOT NULL,
  id_artisan INT NOT NULL,
  position INT NOT NULL CHECK(position BETWEEN 1 AND 3),
  PRIMARY KEY (id_top3, id_artisan),
  UNIQUE (id_top3, position),
  FOREIGN KEY (id_top3) 
    REFERENCES top_3(id_top3)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (id_artisan)
    REFERENCES artisans(id_artisan)
    ON DELETE CASCADE
    ON UPDATE CASCADE 
) Engine = InnoDB;

-- --------------------------------------------------------------------------------------------------------------