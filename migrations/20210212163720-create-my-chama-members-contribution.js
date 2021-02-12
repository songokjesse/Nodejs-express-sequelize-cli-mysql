'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('myChamaMembersContributions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      myChamaMemberID: {
        type: Sequelize.INTEGER
      },
      Amount: {
        type: Sequelize.INTEGER
      },
      ContrubutionDate: {
        type: Sequelize.DATE
      },
      modeOfPayment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('myChamaMembersContributions');
  }
};