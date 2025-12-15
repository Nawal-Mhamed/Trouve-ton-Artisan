"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Category <1,n> Speciality: a Category has many Specialities
      Category.hasMany(models.Speciality, {
        foreignKey: "category_id",
        as: "specialities",
      });
    }
  }
  Category.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id_categorie",
      },
      category: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        field: "categorie",
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
      timestamps: false,
      underscored: true,
    }
  );

  return Category;
};
