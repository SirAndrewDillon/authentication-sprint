const server = require('./api/server.js')

const PORT = process.env.PORT || 1919
server.listen(PORT, () => {
	console.log(`\n=== Server chilling out on port ${PORT} ===\n`)
})
