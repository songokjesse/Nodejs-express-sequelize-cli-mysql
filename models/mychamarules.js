'use strict';
module.exports = (sequelize, DataTypes) => {
  const myChamaRules = sequelize.define('myChamaRules', {
    myChamaID: DataTypes.INTEGER,
    myChamaMemberNumber: DataTypes.INTEGER,
    MemberContribution: DataTypes.STRING
  }, {});
  myChamaRules.associate = function(models) {
    // associations can be defined here
  };
  return myChamaRules;
};