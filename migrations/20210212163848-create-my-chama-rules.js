'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('myChamaRules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      myChamaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'myChamaMembers',
          key: 'id'
        }
        
      },
      myChamaMemberNumber: {
        type: Sequelize.INTEGER
      },
      MemberContribution: {
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
    return queryInterface.dropTable('myChamaRules');
  }
};