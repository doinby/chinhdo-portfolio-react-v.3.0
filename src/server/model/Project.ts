import { Schema, model } from 'mongoose';
interface IProject {
	title: string;
	desc: string;
	coverImg: string;
	github: string;
	live: string;
	lastUpdated: Date;
	stacks: [];
	screenshots: [];
	content: string;
}

const ProjectSchema = new Schema<IProject>({
	title: { type: String, unique: true },
	desc: { type: String },
	github: { type: String, unique: true },
	live: { type: String, unique: true },
	coverImg: { type: String },
	lastUpdated: { type: Date },
	stacks: {
		type: [String],
		enum: [
			'Typescript',
			'React',
			'Node.js',
			'Tailwind',
			'MUI',
			'Express',
			'MongoDB',
			'Sass',
		],
	},
	screenshots: { type: [String] },
	content: { type: String },
});

const Project = model<IProject>('Project', ProjectSchema);
export default Project;
