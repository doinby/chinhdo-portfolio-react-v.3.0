import { ExternalLink } from 'styled-icons/remix-line';
import { IProject } from '../utils/interfaces';

export default function CardCoverImg({ live, title, coverImg }: IProject) {
	return (
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
	);
}
