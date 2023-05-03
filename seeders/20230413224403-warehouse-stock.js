"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "WarehouseStocks",
      [
        {
          product_id: 1,
          warehouse_id: 1,
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 1,
          warehouse_id: 2,
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 2,
          warehouse_id: 2,
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 3,
          warehouse_id: 1,
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: 4,
          warehouse_id: 2,
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WarehouseStocks", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  },
};
