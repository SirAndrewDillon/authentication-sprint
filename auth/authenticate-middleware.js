/*
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets.js')

module.exports = (req, res, next) => {
	const token = req.headers.authorization
	if (req.session && req.session.loggedIn && token) {
		jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid token' })
			} else {
				req.user = { username: decodedToken.username }
				next()
			}
		})
	} else {
		res.status(401).json({ message: 'You do not have a token or a session' })
	}
}
