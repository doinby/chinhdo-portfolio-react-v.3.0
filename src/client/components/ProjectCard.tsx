// import { useFetch } from 'usehooks-ts';
// import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';
interface Props {
	name: string;
	url: string;
}

export default function ProjectCard({ name, url }: Props) {
	const [data, setData] = useState<any>();
	const [error, setError] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const res = await fetch(url);
			const json = await res.json();
			// console.log('json:', json);
			setData(json);
		} catch (err) {
			setError(err);
		} finally {
			setIsLoading(false);
			console.log(data);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	const { description, homepage, html_url: repoUrl } = data || {};

	return (
		<article className='flex flex-col'>
			<h3>
				<a href={repoUrl}>{name}</a>
			</h3>
			<p>{description}</p>
			<p>{homepage}</p>
			{/* {topics.map((topic: string) => (
				<p>{topic}</p>
			))} */}
		</article>
	);
}
