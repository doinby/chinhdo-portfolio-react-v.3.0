import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import ProjectCard from './ProjectCard';
import React from 'react';
interface IProject {
	_id: string;
	coverImg: string;
	desc: string;
	github: string;
	lastUpdated: Date;
	live: string;
	stacks: [];
	title: string;
}

const url = `${import.meta.env.VITE_API_URL}/projects`;

export default function Projects() {
	const { data, error } = useFetch(url);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		if (data !== undefined) {
			setIsLoading(false);
		}
	}, [data]);

	if (error instanceof Object) {
		return (
			<img
				src='/images/illustrations/404.svg'
				alt='No Server Response'
				className='h-96'
			/>
		);
	}

	if (isLoading) {
		return <img src='/spinner.svg' alt='Loading...' className='h-20' />;
	}

	return (
		<section className='prose max-w-none flex flex-col'>
			<h2 className='text-center text-3xl mb-16'>Projects I've worked on:</h2>
			<div className={`${error && 'hidden'} grid grid-cols-2 gap-16`}>
				{data instanceof Array &&
					data.map((projectData) => (
						<ProjectCard key={projectData._id} data={projectData} />
					))}
			</div>
		</section>
	);
}
