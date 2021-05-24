'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.DECIMAL
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of table name
          key: 'id', // key in Target model that we're referencing
        }
      },
      productId: { 
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
        
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};