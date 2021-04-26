"use strict";

const User = require('../models').User;

module.exports = {
	async registerUser(req, res) {
		const {
			email
		} = req.body;
		let user = await User.findOne({
			where: {email}
		})
		console.log("USER", user)
		if (user) return res.status(200).send({ message: "Success", user });
		console.log("USER", user)
		user = await User.create({ email })

		return res.status(200).send({ message: "Success", user });
	}
}