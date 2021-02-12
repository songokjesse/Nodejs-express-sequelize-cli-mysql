'use strict';
module.exports = (sequelize, DataTypes) => {
  const myChamaMembers = sequelize.define('myChamaMembers', {
    userId: DataTypes.INTEGER,
    myChamaId: DataTypes.INTEGER,
    IDNumber: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  myChamaMembers.associate = function(models) {
    // associations can be defined here
   myChamaMembers.belongsTo(models.myChama, {foreignKey: 'myChamaId', as: 'myChama'})
   myChamaMembers.belongsTo(models.Users, {foreignKey: 'userId', as: 'users'})
  };
  return myChamaMembers;
};