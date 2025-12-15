const ArtisanTopService = require("../services/artisanTopService");

module.exports = {
  getAll: async (req, res) => {
    try {
      const topArtisans = await ArtisanTopService.getTop();
      res.json(topArtisans);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
