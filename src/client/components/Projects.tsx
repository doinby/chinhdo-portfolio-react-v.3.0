import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

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
		<section className='flex flex-col gap-6 px-16 py-14'>
			<h2 className='font-header text-2xl text-center'>
				Projects I've worked on:
			</h2>
			{error && <>Cannot fetch</>}
			{isLoading ? (
				<p className={error && 'hidden'}>Loading...</p>
			) : (
				<p className={error && 'hidden'}>show projects</p>
			)}
		</section>
	);
}
