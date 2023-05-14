import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProjectCard from './ProjectCard';

interface ProjectInterface {
	_id: string;
	coverImg: string;
	desc: string;
	github: string;
	lastUpdated: Date;
	live: string;
	stacks: [];
	title: string;
}

const url = `http://localhost:4000/api/v1/projects`;

export default function Projects() {
	const { data, error } = useFetch(url);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		if (data !== undefined) {
			setIsLoading(false);
		}
	}, [data]);

	return (
		<section className='prose max-w-none flex flex-col py-14'>
			<h2 className='text-center'>Projects I've worked on:</h2>
			{error && <>Cannot fetch</>}
			{isLoading ? (
				<p className={error && 'hidden'}>Loading...</p>
			) : (
				<div className={`${error && 'hidden'} grid grid-cols-2 gap-16`}>
					{data instanceof Array
						? data.map((projectData: ProjectInterface) => (
								<ProjectCard key={projectData._id} data={projectData} />
						  ))
						: ''}
				</div>
			)}
		</section>
	);
}
