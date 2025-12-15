"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Artisan extends Model {
    static associate(models) {
      // Artisan <1,1> Speciality: an Artisan belongs to a Speciality
      Artisan.belongsTo(models.Speciality, {
        foreignKey: "speciality_id",
        as: "speciality",
      });

      // Artisan <1,1> City: an Artisan belongs to a City
      Artisan.belongsTo(models.City, {
        foreignKey: "city_id",
        as: "city",
      });

      // Artisan <1,1> About: an Artisan has one About
      Artisan.hasOne(models.ArtisanAbout, {
        foreignKey: "artisan_id",
        as: "about",
      });

      // Artisan <0,1> Website: an Artisan can have one Website
      Artisan.hasOne(models.Website, {
        foreignKey: "artisan_id",
        as: "website",
      });

      // Artisan <0,n> PartOf: an Artisan can have one or many PartOf
      Artisan.hasMany(models.PartOf, {
        foreignKey: "artisan_id",
        as: "part_of",
      });
    }
  }

  // Model definition

  Artisan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_artisan",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "nom",
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      note: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: false,
        validate: {
          min: 0,
          max: 5,
        },
      },
      speciality_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "id_specialite",
      },
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "id_ville",
      },
    },
    {
      sequelize,
      modelName: "Artisan",
      tableName: "artisans",
      timestamps: false,
      underscored: true,
    }
  );

  return Artisan;
};
