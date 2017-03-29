'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    categoryId: {
      type: DataTypes.INTEGER,
      allowNulls: false
    },
    name: { type: DataTypes.STRING, allowNulls: false },
    isValid: {type: DataTypes.BOOLEAN, defaultValue: false}
  }, {
      classMethods: {
        associate: (models) => {
          item.belongsTo(models.category, {
            foreignKey: 'categoryId',
            onDelete: 'CASCADE'
          });
        }
      }
    });
  return item;
};