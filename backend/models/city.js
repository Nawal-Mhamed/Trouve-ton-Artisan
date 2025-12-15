"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // City <1,n> Artisan: a City has many Artisans

      City.hasMany(models.Artisan, {
        foreignKey: "city_id",
        as: "artisans",
      });
    }
  }

  City.init(
    {
      city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "City",
      tableName: "villes",
      timestamps: false,
      underscored: true,
    }
  );

  return City;
};
