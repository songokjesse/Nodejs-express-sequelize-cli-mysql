'use strict';
module.exports = (sequelize, DataTypes) => {
  const myChamaMembersContribution = sequelize.define('myChamaMembersContribution', {
    myChamaMemberId: DataTypes.INTEGER,
    Amount: DataTypes.INTEGER,
    ContrubutionDate: DataTypes.DATE,
    modeOfPayment: DataTypes.STRING
  }, {});
  myChamaMembersContribution.associate = function(models) {
    // associations can be defined here
       myChamaMembersContribution.belongsTo(models.myChamaMembers, {foreignKey: 'myChamaMemberId', as: 'myChamaMember'})

  };
  return myChamaMembersContribution;
};