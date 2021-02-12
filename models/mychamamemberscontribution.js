'use strict';
module.exports = (sequelize, DataTypes) => {
  const myChamaMembersContribution = sequelize.define('myChamaMembersContribution', {
    myChamaMemberID: DataTypes.INTEGER,
    Amount: DataTypes.INTEGER,
    ContrubutionDate: DataTypes.DATE,
    modeOfPayment: DataTypes.STRING
  }, {});
  myChamaMembersContribution.associate = function(models) {
    // associations can be defined here
  };
  return myChamaMembersContribution;
};