'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
    Tasks.belongsTo(models.User)
  };
  return Tasks;
};
