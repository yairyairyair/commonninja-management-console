import 'dotenv/config';

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import router from './routes';

const app = express();
 
// Parse cookies
app.use(cookieParser());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(
	bodyParser.json({
		limit: '50mb',
	})
);

app.use('/', router);

module.exports = app;
