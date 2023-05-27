import dateFn from 'date-fn';
import { ExternalLink } from 'styled-icons/remix-line';
import { getStackColour } from '../utils/utilsFunctions';
import CardCoverImg from './CardCoverImg';
import CardSubtitle from './CardSubtitle';
import CardDesc from './CardDesc';

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
	const { coverImg, desc, lastUpdated, live, stacks, title } = data;

	// https://www.npmjs.com/package/date-fn?activeTab=code
	// README.md
	const lastUpdatedFormatted = dateFn.date(lastUpdated, 109);

	return (
		<article className='group prose prose-a:no-underline shadow-md rounded-md pb-12 cursor-pointer transition ease-in-out motion-reduce:hover:-translate-y-1 hover:bg-orange-50 hover:shadow-lg'>
			<CardCoverImg live={live} title={title} coverImg={coverImg} />
			<h3 className='px-12 text-orange-500'>{title}</h3>
			<CardSubtitle stacks={stacks} lastUpdated={lastUpdatedFormatted} />
			<CardDesc desc={desc} />
		</article>
	);
}
