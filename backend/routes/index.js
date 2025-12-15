const express = require("express");
const router = express.Router();
const ArtisanTopController = require("../controllers/artisanTopController");

router.get("/accueil", ArtisanTopController.getAll);

module.exports = router;
