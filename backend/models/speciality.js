"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Speciality extends Model {
    static associate(models) {
      // Speciality <1,1> Category: a Speciality belongs to a Category
      Speciality.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });

      // Speciality <1,n> Artisan: a Speciality has many Artisans
      Speciality.hasMany(models.Artisan, {
        foreignKey: "speciality_id",
        as: "artisans",
      });
    }
  }

  Speciality.init(
    {
      speciality_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      speciality: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Speciality",
      tableName: "specialites",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["speciality"],
        },
      ],
      underscored: true,
    }
  );

  return Speciality;
};
