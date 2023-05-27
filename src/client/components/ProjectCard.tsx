import dateFn from 'date-fn';
import { Home } from 'styled-icons/entypo';
import { ExternalLink } from 'styled-icons/remix-line';

interface IProjectProps {
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

export default function ProjectCard({ data }: IProjectProps) {
	const { coverImg, desc, github, lastUpdated, live, stacks, title } = data;

	function getStackColour(key: string) {
		switch (key) {
			case 'typescript':
				return 'text-blue-400';
				break;
			case 'tailwind':
				return 'text-teal-400';
				break;
			case 'sass':
				return 'text-pink-400';
				break;
			case 'mui':
				return 'text-violet-400';
				break;
			default:
				return 'text-sky-400';
				break;
		}
	}

	const hasGithub = github
		? 'bg-orange-500 hover:bg-orange-700 text-white'
		: 'bg-slate-200 text-slate-400 cursor-not-allowed';

	// https://www.npmjs.com/package/date-fn?activeTab=code
	// README.md
	const lastUpdatedFormatted = dateFn.date(lastUpdated, 109);

	return (
		<article className='group prose prose-a:no-underline shadow-md rounded-md pb-12 cursor-pointer transition ease-in-out motion-reduce:hover:-translate-y-1 hover:bg-orange-50 hover:shadow-lg '>
			<div className='not-prose relative'>
				<div className='flex items-center justify-center bg-gradient-to-t to-30% from-white group-hover:from-orange-50 group-hover:to-100% absolute bottom-0 w-full h-full'>
					<a href={live} target='_blank' rel='noreferrer'>
						<button className='hidden group-hover:flex items-center gap-2 bg-slate-500 hover:bg-orange-500 text-white px-4 py-2 rounded-md shadow-md'>
							View App <ExternalLink size='18' title={title} className='mb-0.5' />
						</button>
					</a>
				</div>
				<img src={coverImg} alt={title} className='rounded-tl-md rounded-tr-md' />
			</div>
			<div className='flex justify-between items-baseline px-12'>
				<h3 className='text-orange-500'>{title}</h3>
			</div>
			<div className='flex justify-between items-baseline px-12'>
				<div className='flex items-baseline gap-4'>
					{stacks.map((stack: string) => {
						return (
							<p
								className={`${getStackColour(
									stack.toLowerCase()
								)} font-header text-sm`}>
								{stack}
							</p>
						);
					})}
				</div>
				<p className='text-slate-400 text-sm'>Updated: {lastUpdatedFormatted}</p>
			</div>
			<p className='px-12 mt-0'>
				{desc}
				<span className='ml-2 text-slate-500 hover:text-orange-500 underline underline-offset-2 text-sm'>
					...Read more
				</span>
			</p>

			{/* <div className='mx-12 flex gap-6'>
				<button className={`${hasGithub} px-4 py-2 rounded-md flex-grow`}>
					Github
				</button>
				<button className='bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-md flex-grow'>
					Details
				</button>
			</div> */}
		</article>
	);
}
