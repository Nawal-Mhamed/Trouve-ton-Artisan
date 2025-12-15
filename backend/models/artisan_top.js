"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ArtisanTop extends Model {
    static associate(models) {
      // ArtisanTop <1,n> PartOf: ArtisanTop has one or more PartOf
      ArtisanTop.hasMany(models.PartOf, {
        foreignKey: "id_top3",
        as: "part_of",
      });
    }
  }

  ArtisanTop.init(
    {
      id_top3: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      month: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_DATE"),
      },
    },
    {
      sequelize,
      modelName: "ArtisanTop",
      tableName: "top_3",
      timestamps: false,
      indexes: [{ unique: true, fields: ["month"] }],
      underscored: true,
    }
  );

  return ArtisanTop;
};
