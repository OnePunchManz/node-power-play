"use strict";

const userController = require('../controllers/user.js');


module.exports = (app) => {
	// saves user account for waitlist. 
	app.post("/api/user/waitlist", userController.registerUser)
}