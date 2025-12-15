const {
  Artisan,
  Category,
  Speciality,
  City,
  ArtisanAbout,
  Website,
} = require("../models");
const { sequelize } = require("../models");
const { Op } = require("sequelize");

const artisanInclude = [
  {
    association: "speciality",
    attributes: ["speciality"],
    include: [
      {
        association: "category",
        attributes: ["category"],
      },
    ],
  },
  {
    association: "city",
    attributes: ["city"],
  },
];

const artisanOrder = [
  [
    { association: "speciality" },
    { association: "category" },
    "categorie",
    "ASC",
  ],
  [{ model: Speciality, as: "speciality" }, "specialite", "ASC"],
];

module.exports = {
  getAll() {
    return Artisan.findAll({
      attributes: ["name", "note"],
      include: artisanInclude,
      order: artisanOrder,
    });
  },

  getByCategory(categoryId) {
    return Artisan.findAll({
      attributes: ["name", "note"],
      include: [
        {
          model: Speciality,
          as: "speciality",
          where: { category_id: categoryId },
          include: [
            {
              model: Category,
              as: "category",
              attributes: ["category"],
            },
          ],
          attributes: ["speciality"],
        },
        { model: City, as: "city", attributes: ["city"] },
      ],
      order: artisanOrder,
    });
  },

  getByFilters(filters) {
    const { name, category_id, speciality_id, city_id, note } = filters;

    const where = {};
    if (name) where.name = { [Op.like]: `%${name}%` };
    if (note !== undefined) where.note = note;

    const include = [
      {
        association: "speciality",
        attributes: ["speciality"],
        include: [
          {
            association: "category",
            attributes: ["category"],
            where: category_id ? { category_id } : undefined,
            require: Boolean(category_id),
          },
        ],
        where: speciality_id
          ? { speciality_id }
          : undefined || category_id
          ? { category_id }
          : undefined,
        required: Boolean(speciality_id) || Boolean(category_id),
      },
      {
        association: "city",
        attributes: ["city"],
        where: city_id ? { city_id } : undefined,
        required: Boolean(city_id),
      },
    ];

    return Artisan.findAll({
      where,
      attributes: ["name", "note"],
      include,
      order: artisanOrder,
    });
  },

  getById(id) {
    return Artisan.findByPk(id, {
      attributes: ["name", "email", "note"],
      include: [
        ...artisanInclude,
        { model: ArtisanAbout, as: "about", attributes: ["content"] },
        { model: Website, as: "website", attributes: ["address"] },
      ],
    });
  },

  getBySlug(slug) {
    return Artisan.findAll({
      where: sequelize.where(
        sequelize.fn(
          "LOWER",
          sequelize.fn("REPLACE", sequelize.col("nom"), " ", "-")
        ),
        slug
      ),
      attributes: ["name", "note", "email"],
      include: [
        ...artisanInclude,
        { model: ArtisanAbout, as: "about", attributes: ["content"] },
        { model: Website, as: "website", attributes: ["address"] },
      ],
    });
  },
};
