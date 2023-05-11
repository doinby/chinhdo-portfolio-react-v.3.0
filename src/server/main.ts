import express from 'express';
import ViteExpress from 'vite-express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

dotenv.config({ path: './src/server/config/config.env' });

const PORT = Number(process.env.PORT) || 8000;

const app = express();
connectDB();

// Desc:    Get All Projects
// Route:   GET /api/v1/projects/
// Access:  Public
app.get('/api/v1/projects', (_, res) => {
	try {
		res.status(200).json({ success: true, msg: 'Show all projects' });
	} catch (err) {
		res.status(400).json({ success: false });
	}
});

ViteExpress.listen(app, PORT, () =>
	console.log(`Server is listening on port ${PORT}...`)
);
