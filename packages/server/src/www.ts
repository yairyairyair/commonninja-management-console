const app = require('./');

const port = parseInt(process.env.PORT || '4000');

// Start server
app.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
