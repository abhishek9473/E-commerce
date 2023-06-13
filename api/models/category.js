const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: "CategoryId" });
    }
  }

  Category.init(
    {
      categoeryName: { type: DataTypes.STRING, allowNull: false },
      imageSrc: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
