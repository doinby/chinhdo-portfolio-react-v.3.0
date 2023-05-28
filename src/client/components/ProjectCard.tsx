import { useState } from 'react';
import dateFn from 'date-fn';
import CardCoverImg from './CardCoverImg';
import CardSubtitle from './CardSubtitle';
import CardDesc from './CardDesc';
import ContentModal from './ContentModal';
import { LinkBtn } from '../utils/styledComponents';
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
		screenshots: [];
		title: string;
		content: string;
	};
}

export default function ProjectCard({ data }: IProjectProps) {
	const {
		coverImg,
		desc,
		lastUpdated,
		live,
		github,
		stacks,
		title,
		content,
		screenshots,
	} = data;
	const [isOpen, setOpen] = useState(false);

	// https://www.npmjs.com/package/date-fn?activeTab=code
	// README.md
	const lastUpdatedFormatted = dateFn.date(lastUpdated, 109);

	return (
		<>
			<ContentModal
				isOpen={isOpen}
				setOpen={setOpen}
				title={title}
				content={content}
				screenshots={screenshots}
				live={live}
				github={github}
			/>
			<div className='relative flex justify-center group'>
				<LinkBtn className='absolute z-10 top-36 hidden group-hover:flex items-center gap-1 shadow-md'>
					View App <ExternalLink size='18' title={title} className='mb-0.5' />
				</LinkBtn>
				<article
					onClick={() => setOpen(!isOpen)}
					className='relative group prose prose-a:no-underline shadow-md rounded-md pb-12 cursor-pointer transition ease-in-out motion-reduce:group-hover:-translate-y-1 group-hover:bg-orange-50 group-hover:shadow-lg'>
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
			</div>
		</>
	);
}
