const express = require('express')
const router = express.Router()

const Activity = require('../models/Activity')
//const User = require('../models/userModel')


//router.post('/api/token', async (req, res) => {
//	const user = new User(req.body)
//	try {
//		const token = await user.generateAuthToken()
//		res.send({ token })
//		console.log(token)

//		return token

//	} catch (error) {
//		throw error
//	}

//})

//routes
router.get('/api', (req, res) => {
	//const data = {
	//	name: "Habib",
	//	age: 20
	//}

	Activity.find({})
		.then((data) => {
			console.log("data", data)
			res.json(data)
		})
		.catch((error) => {
			console.log("error", error)
		})

})

module.exports = router