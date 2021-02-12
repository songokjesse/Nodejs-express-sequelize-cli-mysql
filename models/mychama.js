'use strict';
module.exports = (sequelize, DataTypes) => {
  const myChama = sequelize.define('myChama', {
    myChamaName: DataTypes.STRING,
    myChamaDescription: DataTypes.TEXT
  }, {});
  myChama.associate = function(models) {
    // associations can be defined here
        myChama.hasMany(models.myChamaMembers, {as: 'myChamaMember'})
  };
  return myChama;
};