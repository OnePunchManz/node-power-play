'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		"Users",
		[
			{
				email: "zaidpasha@gmail.com",
				createdAt: new Date(),
				updatedAt: new Date()
			},
		],
		{}
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }],
	
    */
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.bulkDelete('Users', null, {});
  }
};
