const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // static associate(models){
    //   User.hasMany(models.Cart, { foreignKey: "userId" });
    // }
  }

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      number: { type: DataTypes.BIGINT },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("admin", "user", "guest"),
        defaultValue: "user",
        allowNull : false
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
