"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ArtisanAbout extends Model {
    static associate(models) {
      // AboutArtisan <1,1> Artisan: an AboutArtisan belongs to an Artisan
      ArtisanAbout.belongsTo(models.Artisan, {
        foreignKey: "artisan_id",
        as: "artisan",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  ArtisanAbout.init(
    {
      about_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      artisan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ArtisanAbout",
      tableName: "a_propos",
      timestamps: false,
      underscored: true,
    }
  );

  return ArtisanAbout;
};
