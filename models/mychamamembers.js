'use strict';
module.exports = (sequelize, DataTypes) => {
  const myChamaMembers = sequelize.define('myChamaMembers', {
    userId: DataTypes.INTEGER,
    IDNumber: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  myChamaMembers.associate = function(models) {
    // associations can be defined here
  };
  return myChamaMembers;
};