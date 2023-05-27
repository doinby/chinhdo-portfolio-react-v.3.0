import { useState } from 'react';
import dateFn from 'date-fn';
import CardCoverImg from './CardCoverImg';
import CardSubtitle from './CardSubtitle';
import CardDesc from './CardDesc';
import Popover from './Popover';

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
	const [isOpen, setOpen] = useState(false);

	// https://www.npmjs.com/package/date-fn?activeTab=code
	// README.md
	const lastUpdatedFormatted = dateFn.date(lastUpdated, 109);

	return (
		<>
			<Popover isOpen={isOpen} setOpen={setOpen} title={title} />
			<article
				onClick={() => setOpen(!isOpen)}
				className='relative group prose prose-a:no-underline shadow-md rounded-md pb-12 cursor-pointer transition ease-in-out motion-reduce:hover:-translate-y-1 hover:bg-orange-50 hover:shadow-lg'>
				<CardCoverImg
					key={title + ' coverImg'}
					live={live}
					title={title}
					coverImg={coverImg}
				/>
				<h3 className='px-12 text-orange-500'>{title}</h3>
				<CardSubtitle
					key={title + ' subtitle'}
					title={title}
					stacks={stacks}
					lastUpdated={lastUpdatedFormatted}
				/>
				<CardDesc key={title + ' desc'} desc={desc} />
			</article>
		</>
	);
}
