import fs from 'fs';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import Project from './model/Project';

// Load env vars
dotenv.config({ path: './src/server/config/config.env' });

// Connect to DB
connectDB();

// Read JSON files
const projects = JSON.parse(
	fs.readFileSync(`${__dirname}/_data/projects.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
	try {
		await Project.create(projects);

		console.log('Data Imported...');
		process.exit();
	} catch (err) {
		console.error(err);
	}
};

// Delete data
const deleteData = async () => {
	try {
		await Project.deleteMany();

		console.log('Data Destroyed...');
		process.exit();
	} catch (err) {
		console.error(err);
	}
};

// Execute import/delete functions when run command
// node seeder -i (or -d)

if (process.argv[2] === '-i') {
	importData();
} else if (process.argv[2] === '-d') {
	deleteData();
}
