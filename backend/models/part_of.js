"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PartOf extends Model {
    static associate(models) {
      // PartOf <1,1> Artisan: a PartOf belongs to one Artisan
      PartOf.belongsTo(models.Artisan, {
        foreignKey: "artisan_id",
        as: "artisan",
      });

      PartOf.belongsTo(models.ArtisanTop, {
        foreignKey: "id_top3",
        as: "top3",
      });
    }
  }

  PartOf.init(
    {
      id_top3: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "top_3",
          key: "id_top3",
        },
      },
      artisan_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: "artisans",
          key: "id",
        },
      },
      position: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 3,
        },
      },
    },
    {
      sequelize,
      modelName: "PartOf",
      tableName: "fait_partie",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["id_top3", "position"],
        },
      ],
      underscored: true,
    }
  );

  return PartOf;
};
