'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, autoIncrement: true, allowNulls: false
    },
    name: { type: DataTypes.STRING, allowNulls: false },
    isValid: {type: DataTypes.BOOLEAN, defaultValue: false}
  }, {
      classMethods: {
        associate: (models) => {
          category.hasMany(models.item, {
            foreignKey: 'categoryId',
            as: 'categoryItems'
          })
        }
      }
    });
  return category;
};