"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Website extends Model {
    static associate(models) {
      // Website <1,1> Artisan: a Website belongs to one Artisan
      Website.belongsTo(models.Artisan, {
        foreignKey: "artisan_id",
        as: "artisan",
      });
    }
  }

  Website.init(
    {
      website_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      artisan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Website",
      tableName: "sites",
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["address", "artisan_id"],
        },
      ],
      underscored: true,
    }
  );

  return Website;
};
