'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        await queryInterface
          .createTable('tbl_user_masters', {
            id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },

            name: {
              type: Sequelize.STRING(150),
              allowNull: false
            },

            user_name: {
              type: Sequelize.STRING(50),
              allowNull: false
            },

            email: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
            },

            password: {
              type: Sequelize.STRING,
              allowNull: false
            },

            role_id: {
              type: Sequelize.INTEGER,
              allowNull: false
            },

            mobile_no: {
              type: Sequelize.STRING(12),
              allowNull: true
            },

            address: {
              type: Sequelize.STRING(200),
              allowNull: true
            },

            otp:{
              type: Sequelize.INTEGER,
              allownull:true
            },

            remember_token: {
              type: Sequelize.STRING(100),
              allowNull: true
            },

            created_by: {
              type: Sequelize.INTEGER,
              allowNull: true
            },

            updated_by: {
              type: Sequelize.INTEGER,
              allowNull: true
            },

            created_at: {
              type: Sequelize.DATE,
              allowNull: true
            },

            updated_at: {
              type: Sequelize.DATE,
              allowNull: true
            },

            deleted_at: {
              type: Sequelize.DATE,
              allowNull: true
            }

          })
  },

  async down (queryInterface, Sequelize) {
   
  }
};
