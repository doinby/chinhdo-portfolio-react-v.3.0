import { Schema, model } from 'mongoose';
interface ProjectInterface {
	title: string;
	desc: string;
	coverImg: string;
	github: string;
	live: string;
	lastUpdated: Date;
	stacks: any;
}

const ProjectSchema = new Schema<ProjectInterface>({
	title: { type: String, unique: true },
	desc: { type: String },
	github: { type: String, unique: true },
	live: { type: String, unique: true },
	coverImg: { type: String },
	lastUpdated: { type: Date },
	stacks: { type: [String] },
});

const Project = model<ProjectInterface>('Project', ProjectSchema);
export default Project;
