const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	token: [{
		type: String,
		required: true
	}]
})

UserSchema.methods.generateAuthToken = async function () {
	const user = this
	const token = jwt.sign({ _id: user._id.toString(), email: user.email.toString() },
		('jwtSecret'), { expiresIn: '1 hour' })
	user.token = user.token.concat({ token })
	await user.save()
	return token
}

//model
const User = mongoose.model('User', UserSchema)
module.exports = User