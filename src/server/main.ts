import express from 'express';
import ViteExpress from 'vite-express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import Project from './model/Project';

dotenv.config({ path: './src/server/config/config.env' });

const PORT = Number(process.env.PORT) || 8000;

const app = express();
connectDB();

// Desc:    Get All Projects
// Route:   GET /api/v1/projects/
// Access:  Public
app.get('/api/v1/projects', async (_, res) => {
	try {
		const projects = await Project.find();

		res.status(200).json({ success: true, data: projects });
	} catch (err) {
		res.status(400).json({ success: false });
	}
});

ViteExpress.listen(app, PORT, () =>
	console.log(`Server is listening on port ${PORT}...`)
);
