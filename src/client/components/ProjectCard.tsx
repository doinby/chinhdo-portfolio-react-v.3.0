import dateFn from 'date-fn';
import ReactMarkdown from 'react-markdown';
interface ProjectInterface {
	data: {
		_id: string;
		coverImg: string;
		desc: string;
		github: string;
		lastUpdated: Date;
		live: string;
		stacks: [];
		title: string;
	};
}

export default function ProjectCard({ data }: ProjectInterface) {
	const { coverImg, desc, github, lastUpdated, live, stacks, title } = data;

	// https://www.npmjs.com/package/date-fn?activeTab=code
	// README.md
	const lastUpdatedFormatted = dateFn.date(lastUpdated, 109);

	return (
		<article className='prose prose-a:no-underline shadow-md rounded-md pb-12'>
			<div className='not-prose relative'>
				<div className='cover-gradient absolute bottom-0 w-full h-full'></div>
				{/* <p className='absolute bottom-[-1.5rem] right-10 text-slate-400 z-10 text-sm'>
					<small>Updated: {lastUpdatedFormatted}</small>
				</p> */}
				<img src={coverImg} alt={title} className='rounded-tl-md rounded-tr-md' />
			</div>
			<div className='flex justify-between items-baseline px-12'>
				<h3>{title}</h3>
				{/* <p className='absolute right-10 bottom-[-2rem] text-slate-400 text-sm'>
					<small>Updated: {lastUpdatedFormatted}</small>
				</p> */}
			</div>
			<div className='flex justify-between items-baseline px-12'>
				<div className='flex items-baseline gap-4'>
					{stacks.map((stack) => (
						<p className='text-sm'>{stack}</p>
					))}
				</div>
				<p className='text-slate-400 text-sm'>
					<small>Updated: {lastUpdatedFormatted}</small>
				</p>
			</div>
			<p className='px-12 mt-0'>{desc}</p>
			<div className='mx-12 flex justify-evenly'>
				{github && (
					<button className='bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-md'>
						Github
					</button>
				)}
			</div>
		</article>
	);
}
