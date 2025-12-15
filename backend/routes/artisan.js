const express = require("express");
const router = express.Router();
const ArtisanController = require("../controllers/artisanController");

router.get("/", ArtisanController.getAll);
router.get("/search", ArtisanController.getByFilters);
router.get("/:category/:slug", ArtisanController.getBySlug);
router.get("/:category", ArtisanController.getByCategory);

module.exports = router;
