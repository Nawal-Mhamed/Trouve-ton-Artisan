const { Artisan } = require("../models");

module.exports = {
  getTop: () => {
    return Artisan.findAll({
      attributes: ["name", "note"],
      order: [["note", "DESC"]],
      limit: 3,
      include: [
        {
          association: "speciality",
          attributes: ["speciality"],
          include: [{ association: "category", attributes: ["category"] }],
        },
        { association: "city", attributes: ["city"] },
      ],
    });
  },
};
