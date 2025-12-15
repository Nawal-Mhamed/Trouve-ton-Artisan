const ArtisanService = require("../services/artisanService");
const { Artisan, Category, Speciality, City } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const artisans = await ArtisanService.getAll();
      res.status(200).json(artisans);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getByCategory: async (req, res) => {
    try {
      const { category } = req.params;
      const categoryRecord = await Category.findOne({ where: { category } });
      if (!categoryRecord)
        return res
          .status(404)
          .json({ message: "Cette catégorie n'existe pas." });
      const categoryId = categoryRecord.category_id;

      const artisans = await ArtisanService.getByCategory(categoryId);
      if (artisans.length === 0)
        return res.status(404).json({ message: "Aucun artisan trouvé." });
      res.status(200).json(artisans);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getByFilters: async (req, res) => {
    try {
      const { category, speciality, city, name, note } = req.query;
      let categoryId, specialityId, cityId;

      if (category) {
        const categoryRecord = await Category.findOne({
          where: { category: category },
        });
        if (!categoryRecord)
          return res
            .status(404)
            .json({ message: "Cette catégorie n'existe pas." });
        categoryId = categoryRecord.category_id;
        console.log(categoryId);
      }

      if (speciality) {
        const specialityRecord = await Speciality.findOne({
          where: { speciality },
        });
        if (!specialityRecord)
          return res
            .status(404)
            .json({ message: "Cette spécialité n'existe pas." });
        if (categoryId && specialityRecord.category_id !== categoryId)
          return res.status(400).json({
            message:
              "La spécialité choisie n'appartient pas à la catégorie indiquée.",
          });
        specialityId = specialityRecord.speciality_id;
      }

      if (city) {
        const cityRecord = await City.findOne({ where: { city } });
        if (!cityRecord)
          return res.status(404).json({ message: "Ville introuvable." });
        cityId = cityRecord.city_id;
      }

      const filters = {
        name,
        note,
        category_id: categoryId,
        speciality_id: specialityId,
        city_id: cityId,
      };
      const artisans = await ArtisanService.getByFilters(filters);
      res.status(200).json(artisans);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getBySlug: async (req, res) => {
    try {
      const { slug } = req.params;
      const artisan = await ArtisanService.getBySlug(slug);

      if (!artisan) {
        return res.status(404).json({ message: "Aucun artisan trouvé." });
      }

      res.status(200).json(artisan);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
