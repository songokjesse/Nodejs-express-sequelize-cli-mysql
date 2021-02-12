'use strict';
module.exports = (sequelize, DataTypes) => {
  const myChamaRules = sequelize.define('myChamaRules', {
    myChamaId: DataTypes.INTEGER,
    myChamaMemberNumber: DataTypes.INTEGER,
    MemberContribution: DataTypes.STRING
  }, {});
  myChamaRules.associate = function(models) {
    // associations can be defined here
     myChamaRules.belongsTo(models.myChama, {foreignKey: 'myChamaId', as: 'myChama'})

  };
  return myChamaRules;
};