import { ExternalLink } from 'styled-icons/remix-line';
import { IProject } from '../utils/interfaces';
import { LinkBtn } from '../utils/styledComponents';

export default function CardCoverImg({ live, title, coverImg }: IProject) {
	return (
		<div className='not-prose relative'>
			<div className='flex items-center justify-center bg-gradient-to-t to-30% from-white group-hover:from-orange-50 group-hover:to-100% absolute bottom-0 w-full h-full'></div>
			<img src={coverImg} alt={title} className='rounded-tl-md rounded-tr-md' />
		</div>
	);
}
