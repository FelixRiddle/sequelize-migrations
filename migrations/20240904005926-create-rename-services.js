"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameTable("Services", "service");
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.renameTable("service", "Services");
	},
};
