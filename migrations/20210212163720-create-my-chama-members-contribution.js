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
      myChamaMemberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'myChamaMembers',
          key: 'id'
        }
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