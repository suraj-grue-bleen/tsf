'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tbl_user_masters', 'otp', {
      type: Sequelize.INTEGER,
      allowNull: true,
      after: 'address',
     });
     
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('otp');
  },
};
