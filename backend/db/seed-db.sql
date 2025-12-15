-- ------------------------------------------------------------------------------------------------------------
-- SELECTING DATABASE: 'artisans_aura'
-- ------------------------------------------------------------------------------------------------------------

USE artisans_aura;



-- ------------------------------------------------------------------------------------------------------------
--
-- IMPORTING DATA FOR TABLE: 'categories'
--

INSERT INTO categories (categorie)
VALUES ('Alimentation'), ('Bâtiment'), ('Fabrication'), ('Services');

-- ------------------------------------------------------------------------------------------------------------



-- ------------------------------------------------------------------------------------------------------------
--
-- IMPORTING DATA FOR TABLE: 'villes'
--

INSERT INTO villes (ville)
VALUES ('Aix-les-Bains'), ('Annecy'), ('Annonay'), ('Bourg-en-Bresse'), ('Chambéry'), ('Chamonix'), ('Evian'), ('Le-Puy-en-Velay'), ('Lyon'), ('Montélimar'), ('Romans-sur-Isère'),
('Saint-Priest'), ('Valence'), ('Vienne');

-- ------------------------------------------------------------------------------------------------------------


-- ------------------------------------------------------------------------------------------------------------
--
-- IMPORTING DATA FOR TABLE: 'specialites'
--

INSERT INTO specialites (specialite, id_categorie)
VALUES  ('Boucher', 1), ('Boulanger', 1), ('Chocolatier', 1), ('Traiteur', 1), 
('Chauffagiste', 2), ('Electricien', 2), ('Menuisier', 2), ('Plombier', 2),
('Bijoutier', 3), ('Couturier', 3), ('Ferronier', 3),
('Coiffeur', 4), ('Fleuriste', 4),  ('Toiletteur', 4),  ('WebDesign', 4);

-- ------------------------------------------------------------------------------------------------------------


-- ------------------------------------------------------------------------------------------------------------
--
-- IMPORTING DATA FOR TABLE: 'artisans'
--

INSERT INTO artisans (nom, email, note, id_specialite, id_ville)
VALUES ('Boucherie Dumont', 'boucherie.dumond@gmail.com', 4.5, 1, 9),
('Au pain chaud', 'aupainchaud@hotmail.com', 4.8, 2, 10),
('Chocolaterie Labbé', 'chocolaterie-labbe@gmail.com', 4.9, 3, 9),
('Traiteur Truchon', 'contact@truchon-traiteur.fr', 4.1, 4, 9),
('Orville Salmons', 'o-salmons@live.com', 5.0, 5, 7),
('Mont Blanc Electricité', 'contact@mont-blanc-electricite.com', 4.5, 6, 6),
('Boutot & fils', 'boutot-menuiserie@gmail.com', 4.7, 7, 4),
('Vallis Bellemare', 'v.bellemare@gmail.com', 4.0, 8, 14),
('Claude Quinn', 'claude.quinn@gmail.com', 4.2, 9, 1),
('Amitee Lécuyer', 'a.amitee@hotmail.com', 4.5, 10, 2),
('Ernest Carignan', 'e-carignan@hotmail.com', 5.0, 11, 8),
('Royden Charbonneau', 'r.charbonneau@gmail.com', 3.8, 12, 12),
('Leala Dennis', 'l.dennis@hotmail.fr', 3.8, 12, 5),
('C''est sup''hair', 'sup-hair@gmail.com', 4.1, 12, 11),
('Le monde des fleurs', 'contact@le-monde-des-fleurs-annonay.fr', 4.6, 13, 3),
('Valérie Laredoute', 'v.laredoute@gmail.com', 4.5, 14, 13),
('CM Graphisme', 'contact@cm-graphisme.com', 4.4, 15, 13);

-- ------------------------------------------------------------------------------------------------------------



-- ------------------------------------------------------------------------------------------------------------
--
-- IMPORTING DATA FOR TABLE: 'a_propos'
--
-- For now, the content is the same for all artisan, but it will be updated with the actual content of the 
-- "about" section for each artisan in the future.
-- 

INSERT INTO a_propos (id_artisan, contenu)
VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(11, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(12, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(13, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(14, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(15, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(16, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'),
(17, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.');

-- ------------------------------------------------------------------------------------------------------------



-- ------------------------------------------------------------------------------------------------------------
--
-- IMPORTING DATA FOR TABLE: 'sites'
--

INSERT INTO sites (id_artisan, adresse)
VALUES (3, 'https://chocolaterie-labbe.fr'), 
(4, 'https://truchon-traiteur.fr'),
(6, 'https://mont-blanc-electricite.com'),
(7, 'https://boutot-menuiserie.com'),
(8, 'https://plomberie-bellemare.com'),
(10, 'https://lecuyer-couture.com'),
(13, 'https://coiffure-leala-chambery.fr'),
(14, 'https://sup-hair.fr'),
(15, 'https://le-monde-des-fleurs-annonay.fr'),
(17, 'https://cm-graphisme.com');

-- ------------------------------------------------------------------------------------------------------------


-- ------------------------------------------------------------------------------------------------------------
--
-- IMPORTING DATA FOR TABLES: 'top_3' and 'fait_partie'
--
-- The importation is done through a procedure and an event.
--

SET GLOBAL event_scheduler = ON;


-- Creation of the procedure that automatically add the current month into 'top_3' and add the artisan id
-- and its position for the current month into 'fait_partie'

DELIMITER $$

CREATE PROCEDURE generer_top3_mensuel()
BEGIN
  DECLARE top3_id INT;
  INSERT INTO top_3 (mois)
  VALUES (DATE_FORMAT(CURRENT_DATE(), '%Y-%m-01'));

  SET top3_id = LAST_INSERT_ID();

  INSERT INTO fait_partie(id_top3, id_artisan, position)
  SELECT
    top3_id,
    id_artisan,
    ROW_NUMBER() OVER (ORDER BY note DESC, id_artisan ASC) AS position
  FROM artisans
  ORDER BY note DESC
  LIMIT 3;
END$$

DELIMITER ;


-- Creation of the event that automatically updates the Top 3 each month.

DELIMITER $$ 

CREATE EVENT IF NOT EXISTS maj_top3_mensuel
ON SCHEDULE
  EVERY 1 MONTH
  STARTS (TIMESTAMP(CURRENT_DATE()) + INTERVAL 1 DAY - INTERVAL DAY(CURRENT_DATE()) DAY)
DO
BEGIN
  CALL generer_top3_mensuel();
END $$

DELIMITER ;


-- First data importation

CALL generer_top3_mensuel();

-- ------------------------------------------------------------------------------------------------------------